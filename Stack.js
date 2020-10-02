/* Stacks Data Structure */

// Definition => A LIFO(Last In, First Out) data structure. The last element added to the stack will be the first element removed from the stack

// Stacks can be used in =>
// 1 - Managing function invocations (Call Stack, you know)
// 2 - Undo / Redo
// 3 - Routing (The history object) is treated like a stack

class StackNode {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor () {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push (val) {
        var newNode = new StackNode(val);

        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }

        return ++this.size;
    }

    pop () {
        if (!this.first) return null;
        if (this.first === this.last) return this.last = null;

        var temp = this.first;
        this.first = this.first.next;
        this.size--;

        return temp.value;
    }
}