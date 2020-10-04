/* Heap Data Structure */

// Definition => Very similar to Binary Search Tree (BST) but with some different rules!
// In a MaxBinaryHeap, parent nodes are always larger than child nodes. In a MinBinaryHeap, parent nodes are always smaller than child nodes

// WHAT DOES IT LOOK LIKE?
//      41
//      /\
//    39  33
//    /\    \
//  18  27   12

// Max Binary Heap
// * Each parent has at most two child nodes
// * The value of each parent node is always greater than its child nodes
// * In a MaxBinaryHeap, the parent is greater than the children, but there are no guarantees between sibling nodes.
// * A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first

// Why do we need to know this? Binary Heaps are used to implement Priority Queues, which are very common used data structure. They are also used quite a bit, with graph traversal algorithms

// Storing Heaps
// For any index of an array n, the left child is stored at 2n + 1 and the right child is at 2n + 2
// For any child node at index n, its parent is at index (n - 1) / 2

class MaxBinaryHeap {
    constructor () {
        this.values = [];
    }

    insert (element) {
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp () {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];

            if (element <= parent) break;

            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);