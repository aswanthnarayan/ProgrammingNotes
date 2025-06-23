# AVL Tree (Adelson-Velsky and Landis Tree)

An AVL Tree is the first self-balancing binary search tree. It maintains a balanced state by ensuring that for every node, the height difference between its left and right subtrees (the **balance factor**) is at most 1.

This balancing act guarantees that the tree's height remains logarithmic, ensuring **O(log N) time complexity** for search, insertion, and deletion operations in the worst case, overcoming the main drawback of a standard BST which can become skewed.

---

## Key Concepts

### 1. Balance Factor

The balance factor of a node is calculated as:
`Balance Factor = height(left subtree) - height(right subtree)`

For a tree to be considered an AVL tree, the balance factor of **every node** must be in the set **{-1, 0, 1}**.

-   **-1**: The right subtree is one level taller than the left.
-   **0**: The left and right subtrees have the same height.
-   **1**: The left subtree is one level taller than the right.

If an insertion or deletion causes any node's balance factor to become -2 or 2, the tree is "unbalanced" and must be rebalanced using rotations.

### 2. Tree Rotations

Rotations are the operations used to rebalance the tree. There are four scenarios that require rotations:

1.  **Left-Left (LL) Case**: The new node is inserted in the left subtree of the left child of the unbalanced node.
    -   **Fix**: Perform a **single right rotation** on the unbalanced node.

2.  **Right-Right (RR) Case**: The new node is inserted in the right subtree of the right child of the unbalanced node.
    -   **Fix**: Perform a **single left rotation** on the unbalanced node.

3.  **Left-Right (LR) Case**: The new node is inserted in the right subtree of the left child of the unbalanced node.
    -   **Fix**: Perform a **left rotation** on the left child, followed by a **right rotation** on the unbalanced node.

4.  **Right-Left (RL) Case**: The new node is inserted in the left subtree of the right child of the unbalanced node.
    -   **Fix**: Perform a **right rotation** on the right child, followed by a **left rotation** on the unbalanced node.

---

## Implementation in JavaScript

The implementation extends the BST by adding height tracking, balance factor calculation, and rotation logic to the `insert` and `delete` methods.

```javascript
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1; // Height of a new node is 1
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    // Get the height of a node
    _getHeight(node) {
        return node ? node.height : 0;
    }

    // Update the height of a node
    _updateHeight(node) {
        node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
    }

    // Get the balance factor of a node
    _getBalanceFactor(node) {
        return node ? this._getHeight(node.left) - this._getHeight(node.right) : 0;
    }

    // --- Rotations ---
    _rightRotate(y) {
        const x = y.left;
        const T2 = x.right;

        // Perform rotation
        x.right = y;
        y.left = T2;

        // Update heights
        this._updateHeight(y);
        this._updateHeight(x);

        return x; // New root of the subtree
    }

    _leftRotate(x) {
        const y = x.right;
        const T2 = y.left;

        // Perform rotation
        y.left = x;
        x.right = T2;

        // Update heights
        this._updateHeight(x);
        this._updateHeight(y);

        return y; // New root of the subtree
    }

    // --- Insertion ---
    insert(value) {
        this.root = this._insertNode(this.root, value);
    }

    _insertNode(node, value) {
        // 1. Standard BST insertion
        if (node === null) {
            return new Node(value);
        }

        if (value < node.value) {
            node.left = this._insertNode(node.left, value);
        } else if (value > node.value) {
            node.right = this._insertNode(node.right, value);
        } else {
            return node; // No duplicates allowed
        }

        // 2. Update height of the current node
        this._updateHeight(node);

        // 3. Get the balance factor to check if this node became unbalanced
        const balance = this._getBalanceFactor(node);

        // 4. If unbalanced, perform rotations

        // Left-Left Case
        if (balance > 1 && value < node.left.value) {
            return this._rightRotate(node);
        }

        // Right-Right Case
        if (balance < -1 && value > node.right.value) {
            return this._leftRotate(node);
        }

        // Left-Right Case
        if (balance > 1 && value > node.left.value) {
            node.left = this._leftRotate(node.left);
            return this._rightRotate(node);
        }

        // Right-Left Case
        if (balance < -1 && value < node.right.value) {
            node.right = this._rightRotate(node.right);
            return this._leftRotate(node);
        }

        return node; // Return the (possibly new) root of the subtree
    }
    
    // (For brevity, delete is omitted but follows a similar pattern of rebalancing)

    // Helper to print the tree (for visualization)
    prettyPrint(node = this.root, prefix = '', isLeft = true) {
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value} (h:${node.height}, b:${this._getBalanceFactor(node)})`);
        if (node.left !== null) {
            this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
    }
}

// --- Usage Example ---
console.log("--- AVL Tree Insertion ---");
const avl = new AVLTree();
avl.insert(10);
avl.insert(20);
avl.insert(30); // This will cause a left rotation on node 10

console.log("Tree after inserting 10, 20, 30 (should be balanced with 20 as root):");
avl.prettyPrint();

avl.insert(40);
avl.insert(50); // This will cause another rotation

console.log("\nTree after inserting 40, 50:");
avl.prettyPrint();

avl.insert(25); // This will cause a Right-Left rotation

console.log("\nTree after inserting 25:");
avl.prettyPrint();
```

---

## Complexity

| Operation | Time Complexity | Space Complexity |
| :-------- | :-------------: | :--------------: |
| Search    |    O(log N)     |       O(1)       |
| Insert    |    O(log N)     |       O(1)       |
| Delete    |    O(log N)     |       O(1)       |

The self-balancing nature ensures these logarithmic time complexities even in the worst-case scenarios.