/* VALID Parentheses 
  
  Given a string containing only '()[]{}', determine if the string is valid. A string is valid if:

    - Open brackets are closed by the same type of brackets.
    - Open brackets are closed in the correct order.

  Examples:
    Input: "({[]})"
    Output: true

    Input: "(]"
    Output: false

*/

function isValid(str) {
  const stack = [];
  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of str) {
    if (["(", "[", "{"].includes(char)) {
      stack.push(char);
    } else if (pairs[char]) {
      if (stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValid("([{d}])")); // true
console.log(isValid("([dlsjn{d}ljs])")); // true
console.log(isValid("({d}])")); // true

/* Min Stack

  Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
  Example:
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    minStack.getMin(); // Returns -3
    minStack.pop();
    minStack.top();    // Returns 0
    minStack.getMin(); // Returns -2

  Hints:
    - Use two stacks: one for values and one for minimum values.
    - When pushing a new element, also push the current minimum onto the min stack.
    - When popping, pop from both stacks.

*/

class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  push(value) {
    this.stack.push(value);
    if (this.minStack.length === 0 || value <= this.getMin()) {
      this.minStack.push(value);
    }
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty.");
      return null;
    } else {
      if (this.stack.pop() === this.getMin()) {
        return this.minStack.pop();
      }
    }
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Stack is empty.");
      return null;
    } else {
      return this.stack[this.stack.length - 1];
    }
  }

  printStack() {
    return this.stack.join(" => ");
  }

  printMinStack() {
    return this.minStack.join(" => ");
  }
}
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.printStack());
console.log(minStack.printMinStack());
console.log(minStack.getMin()); // Returns -3
console.log(minStack.pop());
console.log(minStack.printStack());
console.log(minStack.printMinStack());
console.log(minStack.peek()); // Returns 0
console.log(minStack.getMin()); // Returns -2
