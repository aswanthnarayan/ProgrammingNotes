# Red-Black Tree

A Red-Black Tree is a type of self-balancing binary search tree where each node has an extra bit for storing color (red or black). By constraining the way nodes are colored on any path from the root to a leaf, Red-Black Trees ensure that no path is more than twice as long as any other, which helps to keep the tree approximately balanced.

This balance ensures that the time complexity for search, insert, and delete operations remains **O(log N)**, even in the worst case.

---

## The Five Rules of Red-Black Trees

A binary search tree is a Red-Black Tree if it satisfies the following five properties:

1.  **Node Color**: Every node is either red or black.
2.  **Root Property**: The root of the tree is always black.
3.  **Leaf Property**: Every leaf node (typically `null` or a special `NIL` node) is black.
4.  **Red Node Property**: If a node is red, then both of its children must be black. (A red node cannot have a red child).
5.  **Black Height Property**: Every simple path from a given node to any of its descendant leaves contains the same number of black nodes.

---

## Rebalancing: Rotations and Color Flips

After a standard BST insertion, the new node is colored **red**. This may violate the Red-Black properties (specifically rules 2 and 4). The tree is then rebalanced through a series of **rotations** (the same as in AVL trees) and **color flips**.

The rebalancing logic depends on the color of the new node's **uncle** (the sibling of its parent).

1.  **Case 1: Uncle is Red**
    -   Change the color of the parent and uncle to black.
    -   Change the color of the grandparent to red.
    -   Move up to the grandparent and repeat the process if necessary.

2.  **Case 2: Uncle is Black (or null)**
    -   This case leads to rotations. There are four sub-cases depending on the structure (Left-Left, Left-Right, Right-Right, Right-Left), similar to AVL trees.
    -   Rotations and color changes are performed to restore the properties.

---

## Implementation in JavaScript

Implementing a Red-Black Tree is significantly more complex than a standard BST or even an AVL tree. The following code demonstrates the insertion logic.

```javascript
const RED = 'RED';
const BLACK = 'BLACK';

class Node {
    constructor(value, color = RED) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
        this.color = color;
    }
}

class RedBlackTree {
    constructor() {
        // The TNULL node is a sentinel black node for all leaves
        this.TNULL = new Node(null, BLACK);
        this.root = this.TNULL;
    }

    _leftRotate(x) {
        const y = x.right;
        x.right = y.left;
        if (y.left !== this.TNULL) {
            y.left.parent = x;
        }
        y.parent = x.parent;
        if (x.parent === null) {
            this.root = y;
        } else if (x === x.parent.left) {
            x.parent.left = y;
        } else {
            x.parent.right = y;
        }
        y.left = x;
        x.parent = y;
    }

    _rightRotate(x) {
        const y = x.left;
        x.left = y.right;
        if (y.right !== this.TNULL) {
            y.right.parent = x;
        }
        y.parent = x.parent;
        if (x.parent === null) {
            this.root = y;
        } else if (x === x.parent.right) {
            x.parent.right = y;
        } else {
            x.parent.left = y;
        }
        y.right = x;
        x.parent = y;
    }

    // Balances the tree after insertion
    _fixInsert(k) {
        let u; // uncle node
        while (k.parent.color === RED) {
            if (k.parent === k.parent.parent.right) {
                u = k.parent.parent.left; // uncle
                if (u.color === RED) {
                    u.color = BLACK;
                    k.parent.color = BLACK;
                    k.parent.parent.color = RED;
                    k = k.parent.parent;
                } else {
                    if (k === k.parent.left) {
                        k = k.parent;
                        this._rightRotate(k);
                    }
                    k.parent.color = BLACK;
                    k.parent.parent.color = RED;
                    this._leftRotate(k.parent.parent);
                }
            } else {
                u = k.parent.parent.right; // uncle
                if (u.color === RED) {
                    u.color = BLACK;
                    k.parent.color = BLACK;
                    k.parent.parent.color = RED;
                    k = k.parent.parent;
                } else {
                    if (k === k.parent.right) {
                        k = k.parent;
                        this._leftRotate(k);
                    }
                    k.parent.color = BLACK;
                    k.parent.parent.color = RED;
                    this._rightRotate(k.parent.parent);
                }
            }
            if (k === this.root) {
                break;
            }
        }
        this.root.color = BLACK;
    }

    insert(value) {
        const node = new Node(value);
        node.parent = null;
        node.left = this.TNULL;
        node.right = this.TNULL;

        let y = null;
        let x = this.root;

        while (x !== this.TNULL) {
            y = x;
            if (node.value < x.value) {
                x = x.left;
            } else {
                x = x.right;
            }
        }

        node.parent = y;
        if (y === null) {
            this.root = node;
        } else if (node.value < y.value) {
            y.left = node;
        } else {
            y.right = node;
        }

        if (node.parent === null) {
            node.color = BLACK;
            return;
        }

        if (node.parent.parent === null) {
            return;
        }

        this._fixInsert(node);
    }
    
    // Helper to print the tree
    prettyPrint(node = this.root, prefix = '', isLeft = true) {
        if (node === this.TNULL) {
            return;
        }
        if (node.right !== this.TNULL) {
            this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value} (${node.color})`);
        if (node.left !== this.TNULL) {
            this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
    }
}

// --- Usage Example ---
const rbt = new RedBlackTree();
rbt.insert(55);
rbt.insert(40);
rbt.insert(65);
rbt.insert(60);
rbt.insert(75);
rbt.insert(57); // This insertion will trigger rotations and color flips

console.log("Red-Black Tree after insertions:");
rbt.prettyPrint();
```

---

## AVL vs. Red-Black Tree

-   **Balance**: AVL trees are more strictly balanced than Red-Black trees.
-   **Rotations**: Red-Black trees require fewer rotations on average for insertions and deletions.
-   **Lookups**: Because they are more balanced, AVL trees are generally faster for lookups.
-   **Use Case**: If your application involves many frequent insertions/deletions (e.g., a database), a Red-Black tree is often preferred. If lookups are the dominant operation, an AVL tree might be better.

---

## Complexity

Red-Black Trees guarantee **O(log N)** time complexity for search, insert, and delete operations.

