# DFS - Depth First Search

## Think like a NODE

Think from the perspective of a node _indestead_ of looking at the whole tree. This is in line with how recursion is written.

- Decide how the current node should be proceeded with.
- Then recurse on children and let recursion take care of the rest.

When you are a node, the only thing you know are:

1. Own value
2. How to get to the own's children

**Template for DFS:**

```js
function dfs(node, state){
  if(node === null){
    ...
    return;
  }

  let left = dfs(node.left, state)
  let right = dfs(node.right, state)
  ...
  return ...
}
```

## Defining the Recursive function

Two things to define the function:

1. RETURN VALUE (passing value up from child to parent)
   1.1 What do to return after visiting a node?

2. Identify state(s) (passing value down from parent to child)
   2.1 What states do we need to maintain to compute the return value for the current node?
   2.2 State becomes DFS's function arguments. Use states to pass information from parent to children.

## Simple Example - "Pretty-print" a Tree

```js
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

// console.log("ROOT NODE: ", rootNode);

const indentPerLevel = "  ";

function dfsPrettyPrint(node, indentLevel) {
  if (node === null) return;

  const currentIndentLevel = indentPerLevel + indentLevel;
  console.log(currentIndentLevel, node.value);
  dfsPrettyPrint(node.left, currentIndentLevel);
  dfsPrettyPrint(node.right, currentIndentLevel);
}

dfsPrettyPrint(rootNode, indentPerLevel);
```

## Harder example (2 answers) - Finding the Maximum value in a binary tree

1. Using return value (divide and conquer)

Use return value to pass the maximum value encountered back to parent node,
and let parent node compare it with the return value from the other child.

```js
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
```

```js
// console.log(-Infinity);
// console.log(Number.MIN_VALUE); // 5e-324

function dfsMaxValueReturn(node) {
  // if (node === null) {
  // return Number.MIN_VALUE;
  if (!node) {
    return -1;
  }

  const leftValue = dfsMaxValueReturn(node.left);
  const rightValue = dfsMaxValueReturn(node.right);

  return Math.max(node.value, leftValue, rightValue);
}

console.log(dfsMaxValueReturn(rootNode)); // ==> 8
```

2. Using global variable

Traverse the tree while keeping a global variable that keeps track of the
maximum value enccountered so far. After the dfs, return the global variable.

The recursive function does not return any value in this case.
**_FIRE-and-Forget_** the dfs call.

```js
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

console.log(getMaxValue(rootNode)); // ==> 8
```
