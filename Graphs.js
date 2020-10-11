/* Graph Data Structure */

// Definition => A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of rdered pairs of these vertices for a directed graph.

// Uses for Graphs
// * Social Networks
// * Location / Maping
// * Routing Algorithms
// * Visual Hierarchy
// * File System Optimization
// * Everywhere !

// Essential Graph Terms
// * Vertex => a node
// * Edge => connection between nodes
// * Weighted / Unweighted => values assigned to distances between vertices
// * Directed / Undirected => directions assigned to distanced between vertices

// Adjacency List vs. Adjacency Matrix
// List (which is the better => Most data in the real world tends to lend itself to sparser and/or larger graphs) => 
// 1) Can be take up less space (in sparse graphs)
// 2) Faster to iterate over all edges
// 3) Can be slower to lookup specific edge
// Matrix =>
// 1) Can be take up more space (in sparse graphs)
// 2) Slower to iterate over all edges
// 3) Faster to lookup specific edge

class Graph {
    constructor () {
        this.adjacencyList = {};
    }

    addVertex (vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge (v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge (vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );

        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }

    removeVertex (vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();

            this.removeEdge(vertex, adjacentVertex);
        }

        delete this.adjacencyList[vertex];
    }
}

let g = new Graph();

g.addVertex('Kotlin');
g.addVertex('React Native');
g.addVertex('Ionic');

g.addEdge('Kotlin', 'React Native');
g.addEdge('Kotlin', 'Ionic');