class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Single Linked List Implementation
/**
 * Represents the functionality of a Single Linked List
 * @class
 */
class SingleLinkedList {
  constructor() {
    this.head = null; // Points to the first node
    this.length = 0; // tracks list size
  }

  append(value) {
    const node = new ListNode(value);

    if (!this.head) {
      this.head = node;
    } else {
      const current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    // increment list size
    this.length++;
  }
}

const sll = new SingleLinkedList();

console.log(sll);
sll.append("hola");
console.log(sll);
sll.append("adios");
console.log(sll);
