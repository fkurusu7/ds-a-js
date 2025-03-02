/** Invert Binary Tree

Given a binary tree, invert it and return the new value. 
You may invert it in-place.

To "invert" a binary tree, switch the left subtree and the right subtree, 
and invert them both. Inverting an empty tree does nothing.
*/
class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const tree = new Node(1);
tree.left = new Node(2);
tree.left.left = new Node(4);
tree.left.left.right = new Node(7);
tree.left.right = new Node(5);

tree.right = new Node(3);
tree.right.right = new Node(6);
tree.right.right.left = new Node(8);

function invertBinaryTree(tree) {
  if (tree === null) return tree;

  const left = invertBinaryTree(tree.left);
  const right = invertBinaryTree(tree.right);

  tree.left = right;
  tree.right = left;

  return tree;
}

console.log(tree);
console.log(invertBinaryTree(tree));
