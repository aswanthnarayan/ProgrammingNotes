# Heap Data Structure

A Heap is a specialized tree-based data structure that satisfies the heap property. It is a **complete binary tree**, which means all levels of the tree are fully filled, except possibly the last level, which is filled from left to right.

---

## Heap Properties

1.  **Shape Property**: A heap must be a complete binary tree.
2.  **Heap Property**: All nodes must satisfy the heap property. There are two kinds of heaps:
    -   **Max Heap**: The value of each parent node is greater than or equal to the value of its children. The largest element is at the root.
    -   **Min Heap**: The value of each parent node is less than or equal to the value of its children. The smallest element is at the root.

### Array Representation

Because heaps are complete binary trees, they can be stored efficiently in an array without using explicit pointers. For any node at index `i`:
-   **Parent**: `Math.floor((i - 1) / 2)`
-   **Left Child**: `2 * i + 1`
-   **Right Child**: `2 * i + 2`

---

## Core Operations & Complexity

-   **`insert(value)`**: Adds a new value to the heap. **Time Complexity: O(log N)**
-   **`extractMax()` / `extractMin()`**: Removes and returns the root element. **Time Complexity: O(log N)**
-   **`peek()`**: Returns the root element without removing it. **Time Complexity: O(1)**

---

## 1. Max Heap Implementation

In a Max Heap, the parent nodes are always greater than or equal to their children.

### Implementation in JavaScript

```javascript
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Helper Methods
    _getParentIndex(i) { return Math.floor((i - 1) / 2); }
    _getLeftChildIndex(i) { return 2 * i + 1; }
    _getRightChildIndex(i) { return 2 * i + 2; }
    _swap(i1, i2) { [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]]; }

    // Insert a new value into the heap
    insert(value) {
        this.heap.push(value);
        this._heapifyUp();
    }

    // Maintain the heap property by bubbling up from the last element
    _heapifyUp() {
        let index = this.heap.length - 1;
        const lastInserted = this.heap[index];

        while (index > 0) {
            const parentIndex = this._getParentIndex(index);
            if (this.heap[parentIndex] < lastInserted) {
                this._swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    // Remove and return the maximum element (the root)
    extractMax() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop(); // Move the last element to the root
        this._heapifyDown();
        return max;
    }

    // Maintain the heap property by bubbling down from the root
    _heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        const root = this.heap[0];

        while (true) {
            let leftChildIndex = this._getLeftChildIndex(index);
            let rightChildIndex = this._getRightChildIndex(index);
            let leftChild, rightChild;
            let swapIndex = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild > root) {
                    swapIndex = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swapIndex === null && rightChild > root) ||
                    (swapIndex !== null && rightChild > leftChild)
                ) {
                    swapIndex = rightChildIndex;
                }
            }

            if (swapIndex === null) break;
            this._swap(index, swapIndex);
            index = swapIndex;
        }
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }
}

// --- Usage Example ---
console.log("--- Max Heap ---");
const maxHeap = new MaxHeap();
maxHeap.insert(41);
maxHeap.insert(39);
maxHeap.insert(33);
maxHeap.insert(18);
maxHeap.insert(27);
maxHeap.insert(12);
maxHeap.insert(55); // This will bubble up to the root
console.log(maxHeap.heap); // [55, 39, 41, 18, 27, 12, 33]
console.log("Peek:", maxHeap.peek()); // 55
console.log("Extracted Max:", maxHeap.extractMax()); // 55
console.log(maxHeap.heap); // [41, 39, 33, 18, 27, 12]
```

---

## 2. Min Heap Implementation

In a Min Heap, the parent nodes are always less than or equal to their children.

### Implementation in JavaScript

The implementation is nearly identical to the Max Heap, with the comparison logic reversed.

```javascript
class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Helper Methods (same as MaxHeap)
    _getParentIndex(i) { return Math.floor((i - 1) / 2); }
    _getLeftChildIndex(i) { return 2 * i + 1; }
    _getRightChildIndex(i) { return 2 * i + 2; }
    _swap(i1, i2) { [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]]; }

    insert(value) {
        this.heap.push(value);
        this._heapifyUp();
    }

    _heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = this._getParentIndex(index);
            // The only change is here: < instead of >
            if (this.heap[index] < this.heap[parentIndex]) {
                this._swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return min;
    }

    _heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        const root = this.heap[0];

        while (true) {
            let leftChildIndex = this._getLeftChildIndex(index);
            let rightChildIndex = this._getRightChildIndex(index);
            let leftChild, rightChild;
            let swapIndex = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                // The change is here: < instead of >
                if (leftChild < root) {
                    swapIndex = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                // And here
                if (
                    (swapIndex === null && rightChild < root) ||
                    (swapIndex !== null && rightChild < leftChild)
                ) {
                    swapIndex = rightChildIndex;
                }
            }

            if (swapIndex === null) break;
            this._swap(index, swapIndex);
            index = swapIndex;
        }
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }
}

// --- Usage Example ---
console.log("\n--- Min Heap ---");
const minHeap = new MinHeap();
minHeap.insert(41);
minHeap.insert(39);
minHeap.insert(33);
minHeap.insert(18);
minHeap.insert(27);
minHeap.insert(12); // This will bubble up to the root
console.log(minHeap.heap); // [12, 27, 18, 41, 39, 33]
console.log("Peek:", minHeap.peek()); // 12
console.log("Extracted Min:", minHeap.extractMin()); // 12
console.log(minHeap.heap); // [18, 27, 33, 41, 39]
```