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

  /**
   * Display the linked list
   * @returns {string} SLL values joined by "==>"
   */
  printListValues() {
    let current = this.head;
    const values = [];

    while (current) {
      values.push(current.value);
      current = current.next;
    }

    return values.join(" ==> ");
  }

  /**
   * Adds a new List Node at the end of the SLL
   * @param {any} value
   */
  append(value) {
    const node = new ListNode(value);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    // increment list size
    this.length++;
  }

  /**
   * Adds a new List Node at the beggining of the SLL
   * @param {any} value
   */
  prepend(value) {
    const node = new ListNode(value);
    // Point the new node (next) to the head
    node.next = this.head;
    //Update head pointer
    this.head = node;

    this.length++;
  }

  /**
   * Delete a Node by value
   * @param {any} value
   * @returns
   */
  delete(value) {
    // Empty List check
    if (!this.head) return null;

    // delete head node if value is head
    if (this.head.value === value) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    // Search if current next value is the passed value
    let current = this.head;
    while (current) {
      // Remove reference if found
      if (current.next.value === value) {
        current.next = current.next.next;
        this.length--;
        return;
      }
      current = current.next;
    }
  }

  reverse() {
    let prev = null;
    let current = this.head;

    while (current) {
      let nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }

    this.head = prev;
  }
}

const sll = new SingleLinkedList();

console.log(sll.printListValues());
// ''
sll.append("Buenas!!!");
console.log(sll.printListValues());
// 'Buenas!!!'
sll.append("adios");
console.log(sll.printListValues());
// 'Buenas!!! ==> adios'

sll.prepend("Hola");
console.log(sll.printListValues());
// "Hola ==> Buenas!!! ==> adios";

sll.prepend("to be deleted");
console.log(sll.printListValues());
// 'to be deleted ==> Hola ==> Buenas!!! ==> adios'
sll.delete("to be deleted");
console.log(sll.printListValues());
// 'Hola ==> Buenas!!! ==> adios'

sll.append("to be deleted");
console.log(sll.printListValues());
// 'Hola ==> Buenas!!! ==> adios ==> to be deleted'

sll.delete("to be deleted");
console.log(sll.printListValues());
// 'Hola ==> Buenas!!! ==> adios'

sll.reverse();
console.log(sll.printListValues());
// 'adios ==> Buenas!!! ==> Hola'
