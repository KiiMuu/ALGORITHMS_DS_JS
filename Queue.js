/* Queues Data Structure */

// Definition => A FIFO(First In, First Out) data structure. all elements are first in first out

// Queues can be used in =>
// 1 - Background Task
// 2 - Uploading resources
// 3 - Printing / Task processing

class QueueNode {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor () {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue (val) {
        var newNode = new QueueNode(val);

        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last = newNode;
            this.last.next = newNode;
        }

        return ++this.size;
    }

    dequeue () {
        if (!this.first) return null;
        if (this.first === this.last) return this.last = null;

        var temp = this.first;
        this.first = this.first.next;
        this.size--;

        return temp.value;
    }
}