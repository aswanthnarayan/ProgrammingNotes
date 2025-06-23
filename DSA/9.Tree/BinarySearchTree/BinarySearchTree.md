# Binary Search Tree (BST)

A Binary Search Tree is a node-based binary tree data structure with the following key properties:

-   The left subtree of a node contains only nodes with keys **lesser** than the node's key.
-   The right subtree of a node contains only nodes with keys **greater** than the node's key.
-   Both the left and right subtrees must also be binary search trees.
-   There must be no duplicate nodes (in a standard BST).

This structure provides an ordering that makes operations like searching, insertion, and deletion highly efficient.

---

## Classifications of Binary Trees

Understanding these terms is crucial for analyzing tree performance.

-   **Full Binary Tree**: A tree where every node has either 0 or 2 children. No node has only one child.
-   **Complete Binary Tree**: A binary tree where all levels are completely filled, except possibly the last level, which is filled from left to right. (Heaps are complete binary trees).
-   **Perfect Binary Tree**: A tree that is both full and complete. All leaf nodes are at the same level.
-   **Balanced Binary Tree**: A tree where the height difference between the left and right subtrees for any node is at most 1. This is key to ensuring O(log N) performance.
-   **Skewed Binary Tree (Degenerate Tree)**: An unbalanced tree where each node has only one child (or none), resembling a linked list. This leads to worst-case O(N) performance.
-   **Self-Balancing BST**: A BST that automatically adjusts its structure to remain balanced during insertions and deletions (e.g., AVL Trees, Red-Black Trees).
-   **B-Tree**: A different type of search tree (not binary) that can have more than two children per node. They are optimized for systems that read and write large blocks of data, like databases and filesystems.

---

## Implementation in JavaScript

Here is a robust, class-based implementation of a Binary Search Tree.

```javascript
// Node class represents each node in the tree
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // --- Insertion ---
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        this.root = this._insertNode(this.root, newNode);
    }

    _insertNode(root, newNode) {
        if (root === null) {
            return newNode;
        }

        if (newNode.value < root.value) {
            root.left = this._insertNode(root.left, newNode);
        } else if (newNode.value > root.value) {
            root.right = this._insertNode(root.right, newNode);
        }
        // If value is equal, we don't insert (no duplicates)
        return root;
    }

    // --- Searching ---
    search(value) {
        return this._searchNode(this.root, value);
    }

    _searchNode(node, value) {
        if (node === null) {
            return false; // Not found
        }
        if (value < node.value) {
            return this._searchNode(node.left, value);
        } else if (value > node.value) {
            return this._searchNode(node.right, value);
        } else {
            return true; // Found
        }
    }

    // --- Deletion ---
    delete(value) {
        this.root = this._deleteNode(this.root, value);
    }

    _deleteNode(root, value) {
        if (root === null) {
            return null;
        }

        if (value < root.value) {
            root.left = this._deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this._deleteNode(root.right, value);
        } else {
            // Case 1: Node is a leaf (no children)
            if (root.left === null && root.right === null) {
                return null;
            }
            // Case 2: Node has one child
            if (root.left === null) {
                return root.right;
            }
            if (root.right === null) {
                return root.left;
            }
            // Case 3: Node has two children
            // Find the inorder successor (smallest value in the right subtree)
            let successor = this._findMinValueNode(root.right);
            root.value = successor.value;
            root.right = this._deleteNode(root.right, successor.value);
        }
        return root;
    }

    _findMinValueNode(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    // --- Tree Traversal ---
    // In-Order: Left -> Root -> Right (sorted order)
    inOrder(node = this.root, result = []) {
        if (node !== null) {
            this.inOrder(node.left, result);
            result.push(node.value);
            this.inOrder(node.right, result);
        }
        return result;
    }

    // Pre-Order: Root -> Left -> Right
    preOrder(node = this.root, result = []) {
        if (node !== null) {
            result.push(node.value);
            this.preOrder(node.left, result);
            this.preOrder(node.right, result);
        }
        return result;
    }

    // Post-Order: Left -> Right -> Root
    postOrder(node = this.root, result = []) {
        if (node !== null) {
            this.postOrder(node.left, result);
            this.postOrder(node.right, result);
            result.push(node.value);
        }
        return result;
    }

    // Level-Order (BFS): Visit nodes level by level
    levelOrder() {
        const result = [];
        const queue = [];

        if (this.root !== null) {
            queue.push(this.root);
        }

        while (queue.length > 0) {
            const node = queue.shift(); // Dequeue the node
            result.push(node.value);

            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }

        return result;
    }
}

// --- Usage Example ---
const bst = new BinarySearchTree();
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

console.log("In-Order Traversal:", bst.inOrder()); // [20, 30, 40, 50, 60, 70, 80]
console.log("Pre-Order Traversal:", bst.preOrder()); // [50, 30, 20, 40, 70, 60, 80]
console.log("Post-Order Traversal:", bst.postOrder()); // [20, 40, 30, 60, 80, 70, 50]
console.log("Level-Order Traversal:", bst.levelOrder()); // [50, 30, 70, 20, 40, 60, 80]

console.log("\nSearch for 40:", bst.search(40)); // true
console.log("Search for 90:", bst.search(90)); // false

console.log("\n--- Deleting Nodes ---");
bst.delete(20); // Deleting a leaf node
console.log("In-Order after deleting 20:", bst.inOrder()); // [30, 40, 50, 60, 70, 80]

bst.delete(30); // Deleting a node with one child
console.log("In-Order after deleting 30:", bst.inOrder()); // [40, 50, 60, 70, 80]

bst.delete(50); // Deleting the root (a node with two children)
console.log("In-Order after deleting 50:", bst.inOrder()); // [40, 60, 70, 80]
console.log("New root:", bst.root.value); // 60
```

---

## Complexity Analysis

| Operation | Average Case (Balanced) | Worst Case (Skewed) |
| :-------- | :---------------------: | :-----------------: |
| Search    |        O(log N)         |        O(N)         |
| Insert    |        O(log N)         |        O(N)         |
| Delete    |        O(log N)         |        O(N)         |
| Space     |          O(N)           |        O(N)         |

---

## Advantages & Disadvantages

### Advantages
-   **Efficient Operations**: When balanced, provides fast O(log N) search, insert, and delete.
-   **Sorted Order**: In-order traversal retrieves all elements in sorted order.
-   **Dynamic**: The size of the tree is not fixed.
-   **Simple Structure**: The rules are relatively simple to understand and implement.

### Disadvantages
-   **Unbalanced Performance**: The major drawback is that performance degrades to O(N) if the tree becomes unbalanced.
-   **No O(1) Access**: Unlike an array, you cannot access an element by index in O(1) time.
-   **Implementation Overhead**: Requires careful implementation, especially for the delete operation.
