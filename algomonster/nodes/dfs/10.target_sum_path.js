/* Determine if there's a path from the root to any leaf node in a 
  binary tree that sums up to a target value 

  tree:
      1
    /   \
   2     3
    \     \
     6     4

  Input: tree, target = 9 
  Output: true (there is a path:  1 -> 2 -> 6)
*/

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function targetSumPathBST(root, target) {
  // Base case: if node is null, return false
  if (!root) {
    return false;
  }

  // Subtract the current node's value from the target
  target -= root.value;
  console.log(target, root.left, root.right);

  // If we reached a leaf node and target is 0, we found a valid path
  if (!root.left && !root.right) {
    return target === 0;
  }

  // Recursively check left and right subtrees
  return (
    targetSumPathBST(root.left, target) || targetSumPathBST(root.right, target)
  );
}

// Create the tree from the example
const n6 = new Node(6);
const n4 = new Node(4);
const n3 = new Node(3, null, n4);
const n2 = new Node(2, null, n6);
const n1 = new Node(1, n2, n3);

console.log(targetSumPathBST(n1, 9)); // Should output: true
