/** Linked List Cycle
  
Given a linked list with potentially a loop, determine whether the linked list from the 
  first node contains a cycle in it. For bonus points, do this with constant space.
  Parameters
    nodes: The first node of a linked list with potentially a loop.
  Result
    Whether there is a loop contained in the linked list.
*/

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const rootNoCycle = new Node(0);
rootNoCycle.next = new Node(1);
rootNoCycle.next.next = new Node(2);
rootNoCycle.next.next.next = new Node(3);

const rootCycle = new Node(0);
rootCycle.next = new Node(1);
rootCycle.next.next = new Node(2);
rootCycle.next.next.next = new Node(3);
rootCycle.next.next.next.next = rootCycle.next;

function nextNode(node) {
  if (node.next === null) return node;
  return node.next;
}

function hasCycle(elel) {
  console.log(elel);
  let tortoise = nextNode(elel);
  let hare = nextNode(nextNode(elel));

  while (tortoise !== hare && hare.next !== null) {
    tortoise = nextNode(tortoise);
    hare = nextNode(nextNode(hare));
  }

  return hare.next !== null;
}

/** SOLUTION
 Introducing Floyd's Cycle Finding Algorithm, also known as the Tortoise and Hare Algorithm. 
 The idea is to have two pointers, the fast pointer (or "hare") moves at double speed of the slow 
 pointer (or "tortoise"). Each cycle, the tortoise moves once and the hare moves twice. The idea is 
 that since the cycle must have integer size, when the tortoise and the hare are both in the cycle, 
 their distance difference must also be an integer. Then, each cycle, because of their speed difference, 
 the distance between them constantly reduces until they meet, in which case we know there is a cycle. 
 However, if there is no cycle, they will never meet because the speed of the hare is always faster.
 */
console.log(hasCycle(rootNoCycle)); // false
console.log(hasCycle(rootCycle)); // ==> true

/* 
Node {
  val: 0,
  next: Node {
    val: 1,
    next: Node { val: 2, next: Node { val: 3, next: null } }
  }
} 
Node {
  val: 0,
  next: Node {
    val: 1,
    next: Node { val: 2, next: Node { val: 3, next: [Circular] } }
  }
}
*/
