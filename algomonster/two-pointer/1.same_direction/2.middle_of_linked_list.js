/** Middle of a Linked List
 * 
  Find the middle node of a linked list.
  Input: 0 1 2 3 4
  Output: 2
  
  If the number of nodes is even, then return the second middle node.
  Input: 0 1 2 3 4 5
  Output: 3
 */

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.nex = next;
  }
}
let linkedList = new Node(0);
linkedList.next = new Node(1);
linkedList.next.next = new Node(2);
linkedList.next.next.next = new Node(3);
linkedList.next.next.next.next = new Node(4);

function getMiddleOfLinkedList(node) {
  let slow = node;
  let fast = node;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow.val;
}

console.log(getMiddleOfLinkedList(linkedList)); // 2

linkedList.next.next.next.next.next = new Node(5);
console.log(getMiddleOfLinkedList(linkedList)); // 3
