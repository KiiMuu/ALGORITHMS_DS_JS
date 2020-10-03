/* Tree Data Structure */

// Definition => A data structure that consists of nodes in a parent / child relationship (Tree branches)

// Compare with lists =>
// Lists => Linear(next, next, next, next and so on...)
// Trees => Non-linear
// Singly linked list is sort of a special case of a tree
// Tree childs have no relationship between each other!

// Tree Terminology
// - Root => The top node in a tree
// - Child => A node directly connected to another node when moving away from the root
// - Parent => The converse notion of a child
// - Siblings => A group of nodes with the same parent
// - Leaf => A node with no child :(
// - Edge => The connection between one node and another

// Trees Applications
// 1) - HTML DOM => elements and nested elements
// 2) - Network Routing
// 3) - Abstract Syntax Tree
// 4) - Artificial Intelligence
// 5) - Folders in Operating Systems
// 6) - Computer File Systems

// Kinds of Trees
// 1) - Trees
// 2) - Binary Trees (each node can have at most two children)
// 3) - Binary Search Trees (A special case of a binary tree. each node can have at most two children and are sorted in a particular way in order)

// How BSTS(Binary Search Trees) Work?
// * Every parent node has at most two children
// * Every node to the left of a parent node is always less than the parent
// * Every node to the right of a parent node is always greater than the parent

class TreeNode {
    constructor (value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor () {
        this.root = null;
    }

    // Basic BST
    //        10
    //    5         13
    // 2    7    11    16

    insert (value) {
        var newNode = new TreeNode(value);

        if (this.root === null) {
            this.root = newNode;

            return this;
        } else {
            var current = this.root;

            while (true) {
                if (value === current.value) return undefined;
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;

                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;

                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    find (value) {
        if (this.root === null) return false;

        var current = this.root,
            found = false;

        while (current && !found){
            if (value < current.value){
                current = current.left;
            } else if (value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }

        if (!found) return undefined;

        return current;
    }

    contains (value) {
        if (this.root === null) return false;
        var current = this.root,
            found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        
        return false;
    }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
