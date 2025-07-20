/** Balanced Binary Tree
  A binary tree is considered balanced if, for every node in the tree, the difference in 
  the height (or depth) of its left and right subtrees is at most 1.
  In other words, the depth of the two subtrees for every node in the tree differs by no more than one.



 */

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const balanced = new Node(1);
balanced.left = new Node(2);
balanced.left.left = new Node(4);
balanced.left.left.right = new Node(7);
balanced.left.right = new Node(5);

balanced.right = new Node(3);
balanced.right.right = new Node(6);

const unbalanced = new Node(1);
unbalanced.left = new Node(2);
unbalanced.left.left = new Node(4);
unbalanced.left.left.right = new Node(7);
unbalanced.left.right = new Node(5);

unbalanced.right = new Node(3);
unbalanced.right.right = new Node(6);
unbalanced.right.right.left = new Node(8);

function treeHeightDFS(tree) {
  // base case, if node is null returns 0
  if (tree === null) return 0;

  // These two lines will be null at somepoint an return 0
  const leftHeight = treeHeightDFS(tree.left);
  const rightHeight = treeHeightDFS(tree.right);

  if (leftHeight === -1 || rightHeight === -1) return -1;
  // Conditions to return -1 if result from left - right is > 1
  if (Math.abs(rightHeight - leftHeight) > 1) return -1;

  return Math.max(leftHeight, rightHeight) + 1;
}

function isBalanaced(tree) {
  let outcome = treeHeightDFS(tree);
  console.log(outcome);
  return outcome !== -1;
}

console.log(isBalanaced(unbalanced)); // => false
console.log(isBalanaced(balanced)); // => true
