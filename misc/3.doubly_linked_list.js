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

  prettyFormatList() {
    let current = this.head;
    let values = [];

    while (current) {
      values.push(current.value);
      current = current.next;
    }

    return values.join(" <-> ");
  }

  append(value) {
    let newNode = new DoublyListNode(value);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(value) {
    let newNode = new DoublyListNode(value);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
  }

  delete(value) {
    if (!this.head) return null;

    // if value is in head, check if values are the same
    // point head to head's next node, and prev to null, decrease length
    if (this.head.value === value) {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
    }

    // loop until current is null
    let current = this.head;
    while (current) {
      // check if current value is equal to value
      if (current.value === value) {
        // check if current is tails, remove current tail and point it to prev
        if (current === this.tail) {
          this.tail = this.tail.prev;
          this.tail.next = null;
        } else {
          current.next.prev = current.prev;
          current.prev.next = current.next;
        }
        this.length--;
        return;
      }
      current = current.next;
    }
  }
}

const dll = new DoublyLinkedList();
dll.append("start");
console.log(dll.prettyFormatList()); // 'start'
dll.append("medium");
console.log(dll.prettyFormatList()); // 'start <-> medium'
dll.append("end");
console.log(dll.prettyFormatList()); // 'start <-> medium <-> end'

dll.prepend("genesis");
console.log(dll.prettyFormatList());
// 'genesis <-> start <-> medium <-> end'

dll.delete("end");
console.log(dll.prettyFormatList());
// 'genesis <-> start <-> medium'
dll.delete("start");
console.log(dll.prettyFormatList());
// 'genesis <-> medium'
