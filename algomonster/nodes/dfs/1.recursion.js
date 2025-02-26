// Recursion with Stack implementation

function factorialStack(n) {
  const stack = [];
  // push each call to a stack
  // Top of the stack is base case
  while (n > 0) {
    stack.push(n);
    n -= 1;
  }
  console.log(stack);

  let res = 1;
  // pop and use return value until stack is empty
  while (stack.length > 0) {
    res *= stack.pop();
  }

  return res;
}

console.log(factorialStack(5)); // 120

/* ******************************************************************* */
// ****************************** TREES ******************************
/* ******************************************************************* */

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
root.right = new Node(5);

function inOrderTraversal(head) {
  if (head !== null) {
    inOrderTraversal(head.left);
    console.log(head.val);
    inOrderTraversal(head.right);
  }
}

function preOrderTraversal(head) {
  if (head !== null) {
    console.log(head.val);
    preOrderTraversal(head.left);
    preOrderTraversal(head.right);
  }
}
function postOrderTraversal(head) {
  if (head !== null) {
    postOrderTraversal(head.left);
    postOrderTraversal(head.right);
    console.log(head.val);
  }
}

console.log(root);
/* Node {
    val: 1,
    left: Node {
      val: 2,
      left: Node { val: 3, left: null, right: null },
      right: Node { val: 4, left: null, right: null }
    },
    right: Node { val: 5, left: null, right: null }
  } 
*/
inOrderTraversal(root); // => 3 2 4 1 5
preOrderTraversal(root); // => 1 2 3 4 5
postOrderTraversal(root); //=> 3 4 2 5 1

function searchValueInTree(head, target) {
  if (head === null) return null;

  if (head.val === target) return head;

  // return non-null value from recursive calls

  const left = searchValueInTree(head.left, target);
  if (left !== null) return left;

  // left is null at this point, right could be null or non-null
  // return right child's directly
  const right = searchValueInTree(head.right, target);
  return right;
}
console.log(searchValueInTree(root, 6));
console.log(searchValueInTree(root, 2));

let maxValue = Number.MIN_VALUE;
console.log(maxValue);

function dfs(node) {
  if (!node) return;

  if (node.val > maxValue) {
    maxValue = node.val;
  }

  dfs(node.left);
  dfs(node.right);
}

function dfsMaxValueReturn(node) {
  dfs(node);
  return maxValue;
}

console.log(dfsMaxValueReturn(root)); // 5
