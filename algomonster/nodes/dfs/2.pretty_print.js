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
