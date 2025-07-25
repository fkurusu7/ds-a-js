/* Linked List
  A DS that contins a HEAD, TAIL, and LENGTH property.
  LinkedLists consist of nodes, and each node has a value 
  and a pointer to another node or null.

  HEAD       next(s)   TAIL
   4 ===> 6 ===> 8 ===> 2 ===> null

  Singly Linked List.- Each node is only connected one direction to the next node


  Characteristics:
  - Do not have indexes.
  - Connected via nodes with a next pointer.
  - Random access is not allowed.
*/

class SinglyListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let first = new SinglyListNode('Hi');
first.next = new SinglyListNode('there');

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newListNode = new SinglyListNode(value);

    if (!this.head) {
      this.head = newListNode;
      this.tail = this.head;
    } else {
      this.tail.next = newListNode;
      this.tail = newListNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;

    while (current && current.next) {
      const prev = current;
      const next = current.next;
      if (current.next.next === null) {
        this.tail = prev;
        prev.next = null;
      }
      current = next;
    }

    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  /** removes (pops) from the head */
  shift() {
    if (!this.head) return undefined;
    const noHead = this.head;
    this.head = this.head.next;
    this.length--;
    return noHead;
  }

  /** adds (pushes) to the head */
  unshift(value) {
    let newHead = new SinglyListNode(value);

    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }

  /** Retrieves a node by its position.
   * Indexing starts at 0
   * @returns SinglyListNode
   */
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    let currentIndex = 0;

    while (currentIndex !== index) {
      current = current.next;
      currentIndex++;
    }

    return current;
  }

  /**
   * Changes the value of a node based on its position
   * @param {*} value
   * @param {number} index
   * @returns {boolean}
   */
  set(value, index) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = value;
      return true;
    }

    return false;
  }

  /**
   * Adds a node at a specific position
   * @param {any} value
   * @param {number} index
   */
  insert(value, index) {
    console.log(this.length, index, value);
    if (index < 0 || index >= this.length) return false;

    // if index is the same as the length push a new node
    if (index === this.length) return !!this.push(value);

    // if index is equal to 0, unshift a new node
    if (index === 0) return !!this.unshift(value);

    const prev = this.get(index - 1);
    const newNode = new SinglyListNode(value);

    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;
    return true;
  }

  print() {
    let current = this.head;
    const listValues = [];

    while (current) {
      listValues.push(current.val);
      current = current.next;
    }

    return listValues.join(' -> ');
  }
}

let list = new SinglyLinkedList();
list.push('hi');
list.push('there');
list.push('little');
list.push('mermaid');

console.log(list.print()); // 'hi -> there -> little -> mermaid'
console.log(list.get(2)); // ==> Node.value === little
console.log(list.get(1)); // ==> Node.value === there
console.log(list.get(10)); // ==> null
console.log(list.get(-1)); // ==> null

/* 
SinglyLinkedList {
  head: SinglyListNode {
    val: 'hi',
    next: SinglyListNode {
      val: 'there',
*/
// console.log(list.set('Hola', 0));
/* 
SinglyListNode {
  val: 'Hola',
  next: SinglyListNode {
    val: 'hi',
    next: SinglyListNode {
      val: 'there',
      */

console.log(list.unshift('holaa'));
console.log(list.print()); // 'holaa -> hi -> there -> little -> mermaid'
console.log(list.set('beben', 2));
console.log(list.print()); // 'holaa -> hi -> beben -> little -> mermaid'

console.log(list.insert('insertaaado', 6)); // false
console.log(list.insert('insertaaado', 3)); // true
console.log(list.insert('at the end', 6)); // true
console.log(list.insert('at the beginning', 0)); // true
console.log(list.print()); // 'holaa -> hi -> beben -> insertaaado -> little -> mermaid'
