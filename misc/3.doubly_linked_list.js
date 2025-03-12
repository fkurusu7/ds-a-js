class DoublyListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null; // Points to the first node.
    this.tail = null; // Points to the last node.
    this.length = 0; //Tracks list size.
  }

  append(value) {
    let newNode = new DoublyListNode(value);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      // newNode.next will be null
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
  }
}

const dll = new DoublyLinkedList();
dll.append("start");
console.log(dll);
/* 
DoublyLinkedList {
  head: DoublyListNode { value: 'start', next: null, prev: null },
  tail: DoublyListNode { value: 'start', next: null, prev: null },
  length: 1
  }
  */
dll.append("medium");
console.log(dll);
/* 
DoublyLinkedList {
  head: DoublyListNode {
    value: 'start',
    next: DoublyListNode { value: 'medium', next: null, prev: [Circular] },
    prev: null
  },
  tail: DoublyListNode {
    value: 'medium',
    next: null,
    prev: DoublyListNode { value: 'start', next: [Circular], prev: null }
  },
  length: 2
}
 */
