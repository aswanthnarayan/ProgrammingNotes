# Introduction to Trees

A **Tree** is a fundamental, non-linear data structure that represents hierarchical data. Unlike linear structures like arrays or linked lists, which have a sequential order, trees are organized in a parent-child relationship.

---

## Key Terminology

-   **Node**: The basic unit of a tree that contains data and may have links to other nodes.
-   **Edge**: The link or pointer between two nodes.
-   **Root**: The topmost node in a tree, which has no parent.
-   **Parent**: A node that has a child or children.
-   **Child**: A node that has a parent.
-   **Siblings**: Nodes that share the same parent.
-   **Leaf Node**: A node that has no children. It is a terminal node.
-   **Internal Node**: Any node that has at least one child (i.e., a non-leaf node).
-   **Path**: A sequence of nodes and edges from one node to another.
-   **Height of a Tree**: The number of edges on the longest path from the root to a leaf node.
-   **Depth of a Node**: The number of edges from the root to that node.

---

## Why Use Trees? (Advantages)

1.  **Hierarchical Data Representation**: Trees are ideal for storing data that has a natural hierarchy, such as file systems, organizational charts, or the Document Object Model (DOM) in HTML.
2.  **Efficient Searching**: Certain types of trees, like Binary Search Trees (BSTs), provide very efficient searching, insertion, and deletion operations (often O(log N)).
3.  **Dynamic Size**: Trees can grow and shrink as needed.
4.  **Natural Sorting**: In-order traversal of a BST retrieves elements in sorted order.

---

## Common Applications of Trees

-   **File Systems**: Directories and files are organized in a tree structure.
-   **Databases**: Indexes in databases often use B-Trees or B+ Trees for fast data retrieval.
-   **Web Development**: The HTML DOM is a tree structure representing the webpage.
-   **Networking**: Routers use pathfinding algorithms on trees to find the shortest path.
-   **Compilers**: Abstract Syntax Trees (ASTs) are used to represent the structure of source code.
-   **AI and Game Development**: Decision trees and game trees (e.g., for chess) are widely used.

---

## Types of Trees

There are many specialized types of trees, each with its own properties and use cases:

-   **General Tree**: A tree where a node can have any number of children.
-   **Binary Tree**: A tree where each node has at most two children (a left child and a right child).
-   **Binary Search Tree (BST)**: A binary tree where the left child's value is less than the parent's, and the right child's value is greater.
-   **AVL Tree**: A self-balancing BST that maintains a logarithmic height to guarantee O(log N) performance for all operations.
-   **Red-Black Tree**: Another type of self-balancing BST, commonly used in language libraries (e.g., C++ STL `map`).
-   **Heap**: A complete binary tree that satisfies the heap property (Min Heap or Max Heap), often used for Priority Queues.
-   **Trie (Prefix Tree)**: A tree used for efficient retrieval of keys in a dataset of strings.

---

## General Time & Space Complexity

The complexity of tree operations heavily depends on the **type of tree** and whether it is **balanced**.

| Operation | Average Case (Balanced Tree) | Worst Case (Unbalanced Tree) |
| :-------- | :--------------------------: | :--------------------------: |
| Search    |           O(log N)           |            O(N)            |
| Insert    |           O(log N)           |            O(N)            |
| Delete    |           O(log N)           |            O(N)            |

-   **Space Complexity**: The space complexity of a tree is typically **O(N)**, as it needs to store N nodes.

An **unbalanced tree** can degenerate into a linked list, leading to O(N) performance. This is why self-balancing trees like AVL and Red-Black trees are so important.