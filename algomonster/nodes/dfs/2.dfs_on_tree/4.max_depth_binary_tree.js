/** Max depth of a binary tree

  Prerequisite: DFS on Tree
  Max depth of a binary tree is the longest root-to-leaf path. 
  Given a binary tree, find its max depth. 
  Here, we define the length of the path to be the number 
  of edges on that path, not the number of nodes.

  Number of nodes in longest path of:
  current subtree = max num nodes of its two subtrees + 1 (current node)
*/
class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(4);
root.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.right.right.left = new Node(8);
root.right.right.left.right = new Node(9);
root.right.right.left.right.left = new Node(10);

function treeMaxDepth(root) {
  if (root === null) return 0;

  // + 1 refers to the current node
  return Math.max(treeMaxDepth(root.left), treeMaxDepth(root.right)) + 1;
}

console.log(treeMaxDepth(root)); // => 6 nodes
