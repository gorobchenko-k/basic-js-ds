const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queue = [];
  }

  getUnderlyingList() {
    console.log(this.queue[0]);
    return this.queue[0];
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    this.queue.push(newNode);

    if (this.queue.length !== 1) {
      this.queue[this.queue.length - 2].next = newNode;
    }
  }

  dequeue() {
    return this.queue.shift().value;
  }
}

module.exports = {
  Queue
};
