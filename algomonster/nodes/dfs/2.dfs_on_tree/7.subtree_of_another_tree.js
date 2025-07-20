/**Subtree of Another Tree
  
  Given two binary trees root and subRoot, determine if subRoot is a subtree of root. 
  A subtree of a binary tree is a tree that consists of a node in the tree and all of its descendants. 

  Identical Tree Check: 
    To determine if two trees are identical:
      - traverse both trees simultaneously
      - compare their nodes as we traverse.

  Subtree Check: 
    To determine if tree2 is a subtree of tree1:
      - traverse tree1 and treat each node as the root of a subtree, 
      - then use the identical tree check above to see if any of these subtrees are identical to tree2.

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

const subTree = new Node(3);
subTree.right = new Node(6);
subTree.right.left = new Node(8);

console.log(tree);
/* 
Node {
  val: 1,
  left: Node {
    val: 2,
    left: Node {
      val: 4,
      left: null,
      right: Node { val: 7, left: null, right: null }
    },
    right: Node { val: 5, left: null, right: null }
  },
  right: Node {
    val: 3,
    left: null,
    right: Node {
      val: 6,
      left: Node { val: 8, left: null, right: null },
      right: null
    }
  }
}
*/
console.log(subTree);
/* 
Node {
  val: 3,
  left: null,
  right: Node {
    val: 6,
    left: Node { val: 8, left: null, right: null },
    right: null
  }
} 
*/
// Identical Tree Check
function isSameTree(tree1, tree2) {
  if (tree1 === null && tree2 === null) return true;
  if (tree1 === null || tree2 === null) return false;

  return (
    tree1.val === tree2.val &&
    isSameTree(tree1.left, tree2.left) &&
    isSameTree(tree1.right, tree2.right)
  );
}

function subtreeOfAnotherTree(root, subroot) {
  if (root === null) return false;
  return (
    isSameTree(root, subroot) ||
    subtreeOfAnotherTree(root.left, subroot) ||
    subtreeOfAnotherTree(root.right, subroot)
  );
}

console.log(subtreeOfAnotherTree(tree, subTree)); // => true
subTree.right.right = new Node(10);
console.log(subtreeOfAnotherTree(tree, subTree)); // => false
