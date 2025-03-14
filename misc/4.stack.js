class Stack {
  constructor() {
    // Array-based storage for the stack
    this.items = [];
  }

  /**
   * Check if the stack is empty (O(1))
   * @returns {boolean} True if stack is empty, False is not empty
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * Add an item to the stack (O(1))
   * @returns {Array} Items Stack
   */
  push(item) {
    this.items.push(item);
    return this.items;
  }

  /**
   * Remove and return the top item (O(1))
   * @returns {any} Popped item in the Stack
   */
  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return null;
    }
    return this.items.pop();
  }

  /**
   * View the top item without removing it (O(1))
   * @returns {any} Top item in the Stack
   */
  peek() {
    if (this.isEmpty()) {
      console.log("Stack is empty!");
      return null;
    }
    return this.items[this.items.length - 1];
  }
  /**
   * Display the entire stack
   * @returns Items in string type joined by "->"
   */
  printStack() {
    return this.items.join(" --> ");
  }
}

const stacky = new Stack();

stacky.push("bottom");
stacky.push("above bottom");
stacky.push("in the middle");
stacky.push("above the middle");
stacky.push("TOP");
stacky.push("TOP 2");
console.log(stacky.printStack());
// 'bottom --> above bottom --> in the middle --> above the middle --> TOP --> TOP 2'
console.log(stacky.pop()); // 'TOP 2'
console.log(stacky.printStack());
// 'bottom --> above bottom --> in the middle --> above the middle --> TOP'
console.log(stacky.peek()); // 'TOP'
