/** Consider the problem of finding the maximum value in a binary tree. */

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const rootNode = new Node(1);
rootNode.left = new Node(2);
rootNode.left.left = new Node(3);
rootNode.left.right = new Node(4);
rootNode.right = new Node(3);
rootNode.right.left = new Node(4);
rootNode.right.right = new Node(5);
rootNode.right.right.left = new Node(8);

// console.log(-Infinity);
// console.log(Number.MIN_VALUE); // 5e-324

// **************************************
// ************ Return Value ************
// **************************************
function dfsMaxValueReturn(node) {
  if (!node) {
    return Number.MIN_VALUE;
  }

  const leftValue = dfsMaxValueReturn(node.left);
  const rightValue = dfsMaxValueReturn(node.right);

  return Math.max(node.value, leftValue, rightValue);
}

console.log(dfsMaxValueReturn(rootNode));

// **************************************
// ********** Global Variable  **********
// **************************************

let maxValue = Number.MIN_VALUE;

function dfsMaxValueGlobal(node) {
  if (!node) return;

  // Update the global variable if current value is larger
  if (node.value > maxValue) {
    maxValue = node.value;
  }

  // Recurse
  dfsMaxValueGlobal(node.left);
  dfsMaxValueGlobal(node.right);
}

function getMaxValue(root) {
  dfsMaxValueGlobal(root);
  return maxValue;
}

console.log(getMaxValue(rootNode));
