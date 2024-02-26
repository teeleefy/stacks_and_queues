/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor(vals = []) {
    this.first = null;
    this.last = null;
    this.size = 0;

    for (let val of vals) this.enqueue(val);
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      this.size = 1;
    } else {
      this.last.next = newNode;
      this.last = newNode;
      this.size += 1;
    }
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (!this.last) {
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

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (this.size === 0){
      return true;
    }
    return false;
  }
}

module.exports = Queue;
