# Trees
A tree is a hierarchical data structure consisting of nodes, where each node has a parent and may have multiple children. Trees are widely used in computer science for efficient searching, sorting, and organizing hierarchical data.

## Types of Trees 

- **General Tree:** No restriction on the number of children per node.

- **Binary Tree:** Each node has at most two children (left and right).

- **Binary Search Tree (BST):** A binary tree where the left subtree contains smaller values, and the right subtree contains larger values.

- **Balanced Trees (AVL, Red-Black Trees, B-Trees):** Trees that self-balance to optimize search operations.

- **Heap:** A specialized tree used in priority queues.

- **Trie:** A tree used for fast string searching.


# 2. Binary Search Tree (BST)
A Binary Search Tree (BST) is a binary tree with the following properties:

1. Left Subtree contains only nodes with values less than the parent node.

2. Right Subtree contains only nodes with values greater than the parent node.

3. Left and Right Subtrees are also BSTs

## Types of Binary Search Tree

1. **Complete Binary Tree:** All levels are completely filled except the last level.

2. **Full Binary Tree:** All nodes have either 0 or 2 children.

3. **Perfect Binary Tree:** All levels are completely filled.

4. **Balanced Binary Tree:** The difference in height of left and right subtrees is at most 1.

5. **Unbalanced Binary Tree:** The difference in height of left and right subtrees is more than 1.

6. **Self-Balancing Binary Search Tree (AVL, Red-Black Trees, B-Trees):** Trees that self-balance to optimize search operations.

7. **Skewed Binary Tree:** One subtree is much higher than the other will form a linked list of nodes. 

## Operations in BST

1. ## Insertion
- Compare the value with the root.
- If smaller, go to the left; if larger, go to the right.
- Insert the new node at the appropriate position.

```js
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }
}

let bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(15);
```

2. ## Search Operation
- Compare the target value with the current node.
- If the value matches, return the node.
- If smaller, search in the left subtree; if larger, search in the right subtree

```js
search(value) {
  let current = this.root;
  while (current) {
    if (value === current.value) return true;
    current = value < current.value ? current.left : current.right;
  }
  return false;
}
```

## 3. Deleting a Node

- **Case 1:** Node has no children → Simply remove the node.
- **Case 2:** Node has one child → Replace the node with its child.
- **Case 3:** Node has two children → Find the inorder successor (smallest in the right subtree), replace the node, and delete the successor.

```js
delete(value) {
  this.root = this._deleteNode(this.root, value);
}

_deleteNode(root, value) {
  if (!root) return null;

  if (value < root.value) {
    root.left = this._deleteNode(root.left, value);
  } else if (value > root.value) {
    root.right = this._deleteNode(root.right, value);
  } else {
    if (!root.left) return root.right;
    if (!root.right) return root.left;

    let successor = this._minValueNode(root.right);
    root.value = successor.value;
    root.right = this._deleteNode(root.right, successor.value);
  }
  return root;
}

_minValueNode(node) {
  while (node.left) node = node.left;
  return node;
}
```

## 4. Traversals
Traversal refers to visiting each node in a tree systematically.

1. ### Depth-First Search (DFS) Traversals
- **Inorder** (Left → Root → Right) → Retrieves elements in sorted order in a BST.
- **Preorder** (Root → Left → Right) → Used for copying trees.
- **Postorder** (Left → Right → Root) → Used for deleting trees.

```js
// Inorder Traversal (Left -> Root -> Right)
inorder(node) {
  if (!node) return;
  this.inorder(node.left);
  console.log(node.value);
  this.inorder(node.right);
}

// Preorder Traversal (Root -> Left -> Right)
preorder(node) {
  if (!node) return;
  console.log(node.value);
  this.preorder(node.left);
  this.preorder(node.right);
}

// Postorder Traversal (Left -> Right -> Root)
postorder(node) {
  if (!node) return;
  this.postorder(node.left);
  this.postorder(node.right);
  console.log(node.value);
}
```

2. ### Breadth-First Search (BFS) Traversals
- Also known as Level Order Traversal.
- Uses a queue to process nodes level by level.

```js
levelOrder() {
  if (!this.root) return;
  let queue = [this.root];

  while (queue.length) {
    let current = queue.shift();
    console.log(current.value);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
}
```

## 4. Applications
- **Binary Search Trees** → Fast searching (O(log N)) in databases.
- **Trie** → Used in autocomplete and dictionary implementations.
- **Heap** (Priority Queue) → Used in Dijkstra’s Algorithm for shortest path.
- **Segment Trees** → Used in range queries (e.g., sum or min in an interval).
- **Decision Trees** → Used in Machine Learning for classification problems.

## Important Questions

### BST Operations

- Implement Insert, Delete, and Search in a BST.
- Find the height of a BST.
- Find the kth smallest/largest element in a BST.

### Tree Traversals

- Write recursive and iterative versions of Inorder, Preorder, and Postorder traversal.
- Print the left view or right view of a tree.
- Find the level order traversal of a binary tree.

### Advanced Tree Problems

- Check if a tree is balanced (Height Balanced Tree).
- Convert a Binary Tree to a Doubly Linked List.
- Construct a tree from Inorder and Preorder/Postorder traversals.
- Find the Lowest Common Ancestor (LCA) of two nodes.
- Find the diameter of a binary tree.

