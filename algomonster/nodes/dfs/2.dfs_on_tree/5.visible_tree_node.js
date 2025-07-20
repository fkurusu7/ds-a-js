/**  Visible Tree Node | Number of Visible Nodes

  In a binary tree, a node is labeled as "visible" if, on the path from the root to that node, 
  there isn't any node with a value higher than this node's value. 
  The root is always "visible" since there are no other nodes between the root and itself. 
  
  Given a binary tree, count the number of "visible" nodes.

  Input:
            5
           / \
          4   6
         / \ 
        3  8
  Output: 3
  Explanation: Node 4 is not visible since 5>4, 
               Node 3 is not visible since both 5>3 and 4>3. 
               Node 8 is visible since all 5<=8, 4<=8, and 8<=8.
               Node 6 is visible since all 5<=8, and 6<=6.
*/

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const root = new Node(5);
root.left = new Node(4);
root.left.left = new Node(3);
root.left.right = new Node(8);
root.right = new Node(6);

/**
  1. Decide on the return value
    The problem asks for the total number of visible nodes, so at the end of each function call, 
    return the total number of visible nodes in the current subtree.
  2. Identify states
    The definition of a "visible" node is that its value is greater or equal to any other node's 
    value on the root-to-itself path. To determine whether the current node is visible or not, 
    we need to know the max value from the root to it. Carry this as a state as we traverse down the tree. 
*/

function visibleTreeNode(node, maxSoFar) {
  if (node === null) return 0;
  let total = 0; // 1. RETURN VALUE

  // Increment total if current node value is >= maxSoFar
  if (node.val >= maxSoFar) total++;

  // maxSoFar for child node is the larger of previous max and current node val
  console.log(node.val, maxSoFar);
  // [ 5, -Infinity ] [4, 5] [(3, 5)] [(8, 5)] [(6, 5)];
  maxSoFar = Math.max(node.val, maxSoFar);
  total += visibleTreeNode(node.left, maxSoFar);
  total += visibleTreeNode(node.right, maxSoFar);
  console.log(node.val, maxSoFar);
  // [ 5, 5 ] [4, 5] [(3, 5)] [(8, 8)] [(6, 6)];

  return total;
}

console.log(visibleTreeNode(root, Number.NEGATIVE_INFINITY)); // => 3
