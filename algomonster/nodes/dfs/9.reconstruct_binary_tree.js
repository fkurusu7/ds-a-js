/** Reconstruct Binary Tree from Preorder and Inorder Traversal

  Given two arrays representing the preorder and inorder traversals of the same binary tree consisting of unique values, construct the original tree.

  Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7].
  Output: The binary tree structure:
          3
        /   \
       9    20
          /   \
         15    7

  Solution:
  1. Preorder Traversal: Visit the current node first, then the left subtree, and finally the right   
  2. Inorder Traversal: Visit the left subtree first, then the current node, and finally the right subtree. 


    In a preorder traversal, the first element is always the root of the tree.
    In an inorder traversal, elements to the left of the root are in the left subtree, and elements to the right are in the right subtree.

  The key approach is to use the preorder array to identify the root, and the inorder array to identify the left and right subtrees.

  The elements in the tree are unique, so we can construct a mapping from the value to the index in the inorder array.

In the given preorder array, the first element represents the root of the binary tree. Using this value, its index is located in the inorder array. The elements to the left of this index in the inorder array represent the left subtree, and the elements to the right represent the right subtree. The same steps are then repeated for the left and right subtrees respectively (recursively).

Let's break down the solution step by step:

    Create a value-to-index map for inorder traversal: We create a dictionary to store the index of each value in the inorder traversal. This allows us to quickly find the position of the root in the inorder array, which is crucial for determining the sizes of left and right subtrees.

    Define a recursive helper function: We create a helper function that takes the following parameters:
        preorder_start and preorder_end: the range of indices in the preorder array we're currently considering.
        inorder_start and inorder_end: the range of indices in the inorder array we're currently considering.

    Base case: If the start index is greater than the end index for either array, we return None, as this represents an empty subtree.

    Identify the root: The first element in the current preorder range is always the root of the current subtree.

    Find the root in inorder traversal: Use the value-to-index map to quickly locate the root's position in the inorder array.

    Calculate sizes of left and right subtrees: The number of elements to the left of the root in the inorder array is the size of the left subtree. The remaining elements form the right subtree.

    Recursively construct left and right subtrees:
        For the left subtree, use the left portion of both preorder and inorder arrays.
        For the right subtree, use the right portion of both preorder and inorder arrays.

    Return the constructed node: Create a new TreeNode with the root value and attach the left and right subtrees.

This recursive approach efficiently reconstructs the binary tree by dividing the problem into smaller subproblems for each subtree. The use of the value-to-index map allows for O(1) lookup of root positions in the inorder array, resulting in an overall time complexity of O(n), where n is the number of nodes in the tree.
 */

function buildTreeRecursive(preorder, indexMap, preStart, inStart, size) {
  if (size <= 0) return null;

  const rootValue = preorder[preStart];

  const inorderIndex = indexMap.get(rootValue);

  const leftSize = inorderIndex - inStart;

  const left = buildTreeRecursive(
    preorder,
    indexMap,
    preStart + 1,
    inStart,
    leftSize
  );

  const right = buildTreeRecursive(
    preorder,
    indexMap,
    preStart + 1 + leftSize,
    inorderIndex + 1,
    size - 1 - leftSize
  );

  return new Node(rootValue, left, right);
}

function constructBinaryTree(preorder, inorder) {
  const indexMap = new Map();

  inorder.forEach((value, index) => {
    indexMap.set(value, index);
  });

  return buildTreeRecursive(preorder, indexMap, 0, 0, preorder.length);
}
