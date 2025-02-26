# DFS - Depth First Search

## Recursion Review

Recursion is the process of a function calling itself. Key components in writing a correct recursive function:

1. **Base Case/Exit**
1. **Recursive Call**

Classic textbook example: finding the factorial of a number (5! = 5*4*3*2*1)

```js
function factorial(n) {
  // BASE CASE
  if (n <= 1) return 1;
  return n * factorial(n - 1); // RECURSIVE CALL
}
```

### Recursion and Stack

How does the computer accomplish such a feat as calling a function itself?
The answer is quite simple
==> it uses a stack behind the scene to keep track of where things are.
For this particular problem, the factorial recursive function roughly translates to this when executed:

```js
function factorialStack(n) {
  const stack = [];
  // push each call to a stack
  // Top of the stack is base case
  while (n > 0) {
    stack.push(n);
    n -= 1;
  }
  console.log(stack); // [ 5, 4, 3, 2, 1 ]

  let res = 1;
  // pop and use return value until stack is empty
  while (stack.length > 0) {
    res *= stack.pop();
  }

  return res;
}

factorialStack(5); // 120
```

## TREES

A tree is a type of graph Data Structure composed of nodes and edges. It's main properties are:

1. It is acyclic
2. There exists a path between the root to any node
3. Has "N - 1" edges, N is the number of nodes in the tree
4. Each node has exactly one parent node, except the ROOT Node

### Definitions:

- **Internal node**: every node in a tree that has at least one child node.
- **Leaf node**: every node in a tree that has no child nodes.
- **Ancestor**: all the nodes that are between the path from the root to the current node are the
  ancestors of the current node. An ancestor node of the current node is either the parent of the
  current node or the parent of another ancestor of the node.
- **Descendent**: all the nodes that are reachable from the current node when moving down the tree
  are the descendants of the current node. A descendant of the current node is either a child of
  the node or a child of another descendant of the node.
- **Level**: the number of ancestors from the node to the root nodes.

## Binary Tree

An n-ary tree is a tree in which each node has no more than n children.
A binary tree is a type of n-nary tree with n = 2, so every node in a binary tree has 0 to 2 children.

## Tree Traversal

```js
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
```

1. In-Order Traversal.- visits the left branch first, then the current node, and finally the right branch.

```js
function inOrderTraversal(head) {
  if (head !== null) {
    inOrderTraversal(head.left);
    console.log(head.val);
    inOrderTraversal(head.right);
  }
}
inOrderTraversal(root); // => 3 2 4 1 5
```

2. Pre-Order Traversal.- visits the current node first, then the left subtree, and finally the right subtree.

```js
function preOrderTraversal(head) {
  if (head !== null) {
    console.log(head.val);
    preOrderTraversal(head.left);
    preOrderTraversal(head.right);
  }
}
preOrderTraversal(root); // => 1 2 3 4 5
```

3. Post-Order Traversal.- visits the left subtree first, then the right subtree, and finally the current node.

```js
function postOrderTraversal(head) {
  if (head !== null) {
    postOrderTraversal(head.left);
    postOrderTraversal(head.right);
    console.log(head.val);
  }
}
postOrderTraversal(root); //=> 3 4 2 5 1
```

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

**DFS is a bold SEARCH** in other words DFS is **PRE-ORDER Traversal**.

```js
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
console.log(searchValueInTree(root, 6)); // => null
console.log(searchValueInTree(root, 2));
/* Node {
  val: 2,
  left: Node { val: 3, left: null, right: null },
  right: Node { val: 4, left: null, right: null }
} */
```

## Defining the Recursive function

Two things to define the function:

1. RETURN VALUE (passing value up from child to parent)
   1.1 What do to return after visiting a node?
   R: Use the return value to pass information from children to parent.

2. Identify state(s) (passing value down from parent to child)
   2.1 What states do we need to maintain to compute the return value for the current node?
   R: State becomes DFS's function arguments. Use states to pass information from parent to children.

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
/* 
    1
      2
        3
        4
      3
        4
        5
*/
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
