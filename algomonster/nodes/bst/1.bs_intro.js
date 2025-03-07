/** Binary Search Tree Intro

  It's a rooted binary tree with the value of each internal node being greater than all the values in the respective node's left subtree and less than the ones in its right subtree.

  The values of each node in a BST can be of any type, as long as they are comparable with each other.

  Search:
    To search for the existence of an item, we look at the value of the top node and see if it's greater, smaller, or equal to the item we are looking for. If it is equal, great! We found the item. If it's smaller, we look for that item in the left subtree, if the item exists in the BST, it must be in the left subtree. If it's larger, we look for that item in the right subtree, using the same reasoning.

  Insertion:
    One of the advantages to using a BST compared to a sorted list (to keep track of which items exist in a collection) is that, unlike a sorted list, inserting an item to the BST does not require each item in the list to move down an index, like inserting to a sorted list do.

    Instead, when inserting an item, first perform the searching for that item in that BST. However, if we find an empty tree, instead we replace that empty tree with a new node containing the inserted value in the BST.

  Deletion:
    Deleting an element from a BST doesn't show up often in interview questions, but if you are curious, deleting an element from the tree is the same as finding an element in the tree. After you find the node, if the node's right subtree is empty, bring its left subtree to its current position and remove the node. Otherwise, delete the leftmost node of the right subtree and put it in its current position.
 */

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
const tree = new Node(10);
tree.left = new Node(5);
tree.left.left = new Node(3);
tree.left.left.right = new Node(4);
tree.left.right = new Node(6);

tree.right = new Node(15);
tree.right.left = new Node(12);
tree.right.right = new Node(17);
/*
          10
        /    \
       5      15
     /   \   /   \      
    3     6 12   17
      \
       4
*/

function searchInTree(tree, searchValue) {
  if (tree === null) return false;

  if (tree.val === searchValue) {
    return true;
  } else if (tree.val < searchValue) {
    return searchInTree(tree.right, searchValue);
  } else {
    return searchInTree(tree.left, searchValue);
  }
}

console.log(searchInTree(tree, 6)); // ==> true
console.log(searchInTree(tree, 2)); // ==>  false

function insertInTree(node, newValue) {
  if (node === null) return new Node(newValue);

  // Search for value
  if (node.val < newValue) {
    return insertInTree(node.right, newValue);
  } else if (node.val > newValue) {
    return insertInTree(node.left, newValue);
  }

  return node;
}
console.log(insertInTree(tree, 2));
