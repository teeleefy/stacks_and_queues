/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor(vals = []) {
    this.first = null;
    this.last = null;
    this.size = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      this.size = 1;
    } else {
      newNode.next = this.first;
      this.first = newNode; 
      this.size += 1;
    }
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (!this.first) {
      throw new Error("List is currently empty. Cannot use pop method.");
    } 
     else {
      let oldHead = this.first;
      let newHead = this.first.next;
      this.first = newHead;
      this.size -= 1;
      if (this.size === 1) {
        this.last = newHead;
      }
      return oldHead.val;
    }
  }


  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if (this.size === 0){
      return true;
    }
    return false;
  }
}

module.exports = Stack;
