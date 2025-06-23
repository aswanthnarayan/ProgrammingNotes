# Graph Data Structure

A Graph is a non-linear data structure consisting of a finite set of **vertices** (or nodes) and a set of **edges** that connect these vertices.

-   **Vertices**: The fundamental units of the graph.
-   **Edges**: The connections between pairs of vertices. An edge `(u, v)` connects vertex `u` to `v`. Edges can also have weights or costs.

---

## Real-World Applications

-   **Social Networks**: Representing users as vertices and friendships as edges (e.g., Facebook, LinkedIn).
-   **Navigation Systems**: Modeling locations as vertices and roads as edges to find the shortest path (e.g., Google Maps).
-   **Computer Networks**: Representing devices as vertices and network connections as edges.
-   **Web Pages**: Representing web pages as vertices and hyperlinks as edges for search engine crawlers.

---

## Types of Graphs

### 1. Undirected Graph
An edge `(u, v)` is directionless, meaning the connection works both ways (from `u` to `v` and from `v` to `u`).

### 2. Directed Graph (Digraph)
An edge `(u, v)` is a one-way connection from vertex `u` to vertex `v`.

---

## Graph Representation

There are two primary ways to represent a graph in memory:

1.  **Adjacency Matrix**
2.  **Adjacency List**

### 1. Adjacency Matrix

An adjacency matrix is a 2D array of size `V x V` (where `V` is the number of vertices). A value `adj[i][j] = 1` indicates an edge from vertex `i` to `j`. For weighted graphs, the value can be the edge's weight.

-   **Pros**:
    -   Simple to implement.
    -   Querying for an edge between two vertices is very fast (O(1)).
    -   Removing an edge is O(1).
-   **Cons**:
    -   Consumes a lot of space: O(V²), which is inefficient for sparse graphs (graphs with few edges).
    -   Adding a new vertex is expensive (O(V²)) because it requires resizing the matrix.

#### JavaScript Implementation (Adjacency Matrix)
```javascript
class GraphMatrix {
    constructor(numVertices) {
        this.numVertices = numVertices;
        this.adjMatrix = new Array(numVertices).fill(0).map(() => new Array(numVertices).fill(0));
    }

    addEdge(v1, v2) {
        // For an undirected graph
        this.adjMatrix[v1][v2] = 1;
        this.adjMatrix[v2][v1] = 1;
    }

    printMatrix() {
        for (let i = 0; i < this.numVertices; i++) {
            console.log(this.adjMatrix[i].join(' '));
        }
    }
}
```

### 2. Adjacency List

An adjacency list represents a graph as an array or map of lists. The key `i` holds a list of all vertices adjacent to vertex `i`. This is the most common and efficient way to represent graphs, especially sparse ones.

-   **Pros**:
    -   Space-efficient for sparse graphs: O(V + E).
    -   Adding a new vertex is easy.
    -   Iterating over all neighbors of a vertex is efficient.
-   **Cons**:
    -   Querying for an edge between two vertices can be slower (O(k), where k is the number of neighbors of a vertex, up to O(V) in the worst case).

#### JavaScript Implementation (Adjacency List)
```javascript
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
    }
  }
  
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1); // For undirected graph
    }
  }

  showConnections() {
    Object.keys(this.adjacencyList).forEach(vertex => {
      console.log(`${vertex} --> ${this.adjacencyList[vertex].join(', ')}`);
    });
  }
}
```

### Comparison: Adjacency Matrix vs. Adjacency List

| Operation         | Adjacency Matrix | Adjacency List |
|-------------------|------------------|----------------|
| **Storage Space** | O(V²)            | O(V + E)       |
| **Add Vertex**    | O(V²)            | O(1)           |
| **Add Edge**      | O(1)             | O(1)           |
| **Remove Vertex** | O(V²)            | O(V + E)       |
| **Remove Edge**   | O(1)             | O(E)           |
| **Query Edge**    | O(1)             | O(V)           |

---

## Graph Traversal

Graph traversal is the process of visiting every vertex and edge in a graph. The two most common traversal algorithms are Breadth-First Search (BFS) and Depth-First Search (DFS).

### 1. Breadth-First Search (BFS)

BFS explores the graph level by level. It starts at a source vertex, explores all its immediate neighbors, then the neighbors of those neighbors, and so on. It uses a **queue** data structure.

**Algorithm**:
1.  Create a `queue` and add the starting vertex to it.
2.  Create a `visited` set or array to track visited vertices, and mark the starting vertex as visited.
3.  While the queue is not empty:
    a. Dequeue a vertex.
    b. For each of its unvisited neighbors:
        i. Mark the neighbor as visited.
        ii. Enqueue the neighbor.

#### JavaScript Implementation (BFS)
```javascript
class Graph {
  // ... (previous implementation: constructor, addVertex, addEdge, etc.)
  
  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;
    let currentVertex;
    
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    
    return result;
  }
}
```

#### Applications of BFS
-   **Shortest Path in Unweighted Graphs**: Finds the path with the fewest edges.
-   **Web Crawlers**: To build an index of web pages, limiting the depth of traversal.
-   **Social Networks**: Finding people within a certain "degree" of connection.
-   **GPS Navigation**: Finding all nearby locations.
-   **Cycle Detection**: Can detect cycles in undirected graphs.
-   **Bipartite Graph Check**: To test if a graph can be colored with two colors.

### 2. Depth-First Search (DFS)

DFS explores the graph by going as deep as possible down one path before backtracking. It uses a **stack** data structure (either explicitly with an iterative approach or implicitly with recursion).

**Algorithm (Recursive)**:
1.  Create a `visited` set or array.
2.  Define a recursive function `dfs(vertex)`:
    a. Mark `vertex` as visited.
    b. Add `vertex` to the result list.
    c. For each neighbor of `vertex`:
        i. If the neighbor has not been visited, call `dfs(neighbor)`.

#### JavaScript Implementation (DFS)
```javascript
class Graph {
  // ... (previous implementation)
  
  dfsRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList; // for correct 'this' context

    function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          dfs(neighbor);
        }
      });
    }

    dfs(start);
    return result;
  }

  dfsIterative(start) {
      const stack = [start];
      const result = [];
      const visited = {};
      visited[start] = true;
      let currentVertex;

      while (stack.length) {
          currentVertex = stack.pop();
          result.push(currentVertex);

          this.adjacencyList[currentVertex].forEach(neighbor => {
              if (!visited[neighbor]) {
                  visited[neighbor] = true;
                  stack.push(neighbor);
              }
          });
      }
      return result;
  }
}
```

#### Applications of DFS
-   **Cycle Detection**: Can detect cycles in both directed and undirected graphs (checking for "back edges").
-   **Path Finding**: Finding a path between two vertices.
-   **Topological Sorting**: For Directed Acyclic Graphs (DAGs), used in job scheduling and dependency resolution.
-   **Finding Connected Components**: To find all vertices reachable from a starting vertex.
-   **Solving Puzzles**: Such as mazes, where you need to explore one path to its conclusion.
-   **Finding Strongly Connected Components**: In directed graphs.