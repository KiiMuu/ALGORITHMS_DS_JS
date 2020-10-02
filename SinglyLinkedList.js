/* Singly Linked List */

// Definition => A data structure that contains a 'Head', 'Tail' and 'Length' property
// Linked Lists consits of nodes, and each node has a value and a pointer to another node or null

// Comparison with Arrays
// Lists
// - Do not have indexes
// - Connected via nodes with a next pointer
// - Random access is not allowed
// Arrays
// - Indexed in order!
// - Insertion and deletion can be expensive
// - Can quickly be accessed at specific index

class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push (val) {
        var newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;

        return this; // return the list
    }

    traverse () {
        var current = this.head;

        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }

    pop () {
        if (!this.head) return undefined;

        var current = this.head;
        var newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    shift () {
        if (!this.head) return undefined;

        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return currentHead;
    }

    unshift (val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        newNode.next = this.head;
        this.head = newNode;
        this.length++;

        return this;
    }

    get (index) {
        if (index < 0 || index >= this.length) return null;

        var counter = 0;
        var current = this.head;

        while (counter !== index) {
            current = current.next;
            counter++;
        }

        return current;
    }

    set (index, val) {
        var foundNode = this.get(index);

        if (foundNode) {
            foundNode.val = val;

            return true;
        }

        return false;
    }

    insert (index, val) {
        if (index < 0 || index >= this.length) return false;
        if (index === this.length) return !!this.push(val); // !! return true
        if (index === 0) return !!this.unshift(val);

        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;

        prev.next = newNode;
        newNode.next = temp;
        this.length++;

        return true;
    }

    remove (index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        var prevNode = this.get(index - 1);
        var removed = prevNode.next;

        prevNode.next = removed.next;
        this.length--;

        return removed;
    }

    reverse () {
        var node = this.head;
        var next;
        var prev = null;

        this.head = this.tail;
        this.tail = node;

        for (var i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return this;
    }
 
    print () {
        var arr = [];

        var current = this.head;

        while (current) {
            arr.push(current.val);
            current = current.next;
        }

        console.log(arr);
    }
}

// var first = new Node('Hi');
// first.next = new Node('There');
// first.next.next = new Node('Works!!');

var list = new SinglyLinkedList();
list.push('Hi')
list.push('u')
console.log(list);