# Graphs
A Graph is a data structure that consists of nodes (vertices) and edges that connect them.
- Formally, a graph is represented as **G(V, E)**, where:
- **V** = Set of vertices (nodes).
- **E** = Set of edges (connections between nodes).

## Types of Graphs

1. **Directed Graph (Digraph)** → Edges have a direction (A → B).
2. **Undirected Graph** → Edges do not have a direction (A — B).
3. **Weighted Graph** → Each edge has a weight (cost, distance, time, etc.).
4. **Unweighted Graph** → Edges have no weights, only connections.

*Example of an Undirected & Unweighted Graph:*

```js
     A ---- B
     |      |
     C ---- D
```

*Example of a Directed & Weighted Graph:*

```js
     A → B (5)
     ↓    ↓
     C → D (3)
```

## 2. Graph Representation
Graphs can be stored using two common methods:

1. ### Adjacency Matrix
Uses a 2D array of size V × V (where V = number of vertices).

Entry (i, j) = 1 if there is an edge from vertex i to j, otherwise 0.

**Pros:** Easy edge lookup (O(1)).
**Cons:** Uses more space O(V²) for large graphs.

*Example (Undirected Graph)*

```js
     A -- B
     |    |
     C -- D
```

**Adjacency Matrix:**

|       | **A** | **B** | **C** | **D** |
|:-----:|:-----:|:-----:|:-----:|:-----:|
| **A** |   0   |   1   |   1   |   0   |
| **B** |   1   |   0   |   0   |   1   |
| **C** |   1   |   0   |   0   |   1   |
| **D** |   0   |   1   |   1   |   0   |

2. ### Adjacency List
- Uses a HashMap or Array of LinkedLists.
- Each node stores a list of its neighbors.

**Pros:** Space-efficient for sparse graphs O(V + E).
**Cons:** Slower edge lookup O(V).

*Example (Undirected Graph)*

```js
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "D"],
  D: ["B", "C"]
};
```

## Graph Traversal Algorithms

1. ### Breadth-First Search (BFS)
- Explores all neighbors of a node before moving deeper.
- Uses a Queue (FIFO).
- Time Complexity: O(V + E).

*BFS Implementation in JavaScript*

```js
function bfs(graph, start) {
  let queue = [start];
  let visited = new Set();
  visited.add(start);

  while (queue.length) {
    let node = queue.shift();
    console.log(node);

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}

// Example Graph
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "D"],
  D: ["B", "C"]
};

bfs(graph, "A");
```

2. ### Depth-First Search (DFS)
- Explores deep into a branch before backtracking.
- Uses a Stack (or Recursion).
- Time Complexity: O(V + E).

*DFS Implementation in JavaScript*

```js
function dfs(graph, start, visited = new Set()) {
  if (!visited.has(start)) {
    console.log(start);
    visited.add(start);
    
    for (let neighbor of graph[start]) {
      dfs(graph, neighbor, visited);
    }
  }
}

dfs(graph, "A");
```

## 4. Shortest Path Algorithms

### 1. Dijkstra’s Algorithm (Greedy)
- Finds the shortest path from a source node to all others.
- Uses a Priority Queue (Min Heap).
- Time Complexity: O((V + E) log V).

*Dijkstra’s Algorithm*

```js
function dijkstra(graph, start) {
  let distances = {};
  let priorityQueue = new MinHeap();
  let visited = new Set();

  for (let node in graph) distances[node] = Infinity;
  distances[start] = 0;
  priorityQueue.insert({ node: start, cost: 0 });

  while (priorityQueue.heap.length) {
    let { node, cost } = priorityQueue.extractMin();

    if (visited.has(node)) continue;
    visited.add(node);

    for (let neighbor in graph[node]) {
      let newDist = cost + graph[node][neighbor];
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        priorityQueue.insert({ node: neighbor, cost: newDist });
      }
    }
  }

  return distances;
}

// Example Weighted Graph
const graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 }
};

console.log(dijkstra(graph, "A"));
```

## Applications of Graphs

|      **Application**      |                 **Use Case**                |
|:-------------------------:|:-------------------------------------------:|
| Social Networks           | Friend recommendations (Facebook, LinkedIn) |
| Navigation Systems        | Google Maps (Shortest Path)                 |
| Web Crawling              | Google Search Indexing                      |
| Computer Networks         | Routing algorithms (Dijkstra, OSPF)         |
| AI & Machine Learning     | Knowledge graphs, Neural networks           |
| Scheduling & Dependencies | Task scheduling (Topological Sorting)       |
