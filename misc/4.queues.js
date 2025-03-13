class Queue {
  constructor() {
    this.items = [];
  }

  /**
   * Display the entire queue
   */
  printQueue() {
    return this.items.join(" <-- ");
  }

  /**
   * Check if the queue is empty (O(1))
   * @returns {boolean} True if empty, else False
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * Add an item to the queue (O(1))
   * @param {*} Item to add at the end of the array
   */
  enqueue(item) {
    this.items.push(item);
  }

  /**
   * Remove and return the front item (O(1))
   * @returns {any} Removed item
   */
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }

    return this.items.shift();
  }

  /**
   * View the front item without removing it.
   * @returns {any} Front item
   */
  peek() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }

    return this.items[0];
  }
}

const queuey = new Queue();

console.log(queuey.isEmpty()); // true
queuey.enqueue("fisrt to go!!!");
queuey.enqueue("second to go!!!");
queuey.enqueue("third to go!!!");
queuey.enqueue("4th to go!!!");
queuey.enqueue("5th to go!!!");
console.log(queuey.printQueue());
// 'fisrt to go!!! <-- second to go!!! <-- third to go!!! <-- 4th to go!!! <-- 5th to go!!!'
console.log(queuey.isEmpty()); // false
console.log(queuey.dequeue()); // 'fisrt to go!!!'
console.log(queuey.peek()); // 'second to go!!!'
