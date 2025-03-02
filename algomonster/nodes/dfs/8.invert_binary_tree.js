/** Invert Binary Tree

Given a binary tree, invert it and return the new value. You may invert it in-place.

To "invert" a binary tree, switch the left subtree and the right subtree, and invert them both. Inverting an empty tree does nothing.
*/
class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function invertBinaryTree(tree) {
  if (!tree) return tree;

  let left = invertBinaryTree(tree.left);
  let right = invertBinaryTree(tree.right);

  tree.right = left;
  tree.left = right;

  return tree;
}

console.log(invertBinaryTree());
