# Heap
A Heap is a specialized tree-based data structure that satisfies the heap property:

- It is a complete binary tree (all levels are filled except the last, which is filled from left to right).
- Unlike a Binary Search Tree (BST), the heap does not enforce an ordering between left and right children—only between parents and children
- The parent node must follow a specific ordering rule.

## Types of Heaps

1. **Max Heap** → Parent nodes are greater than or equal to their children.

2. **Min Heap** → Parent nodes are less than or equal to their children.

*example of min heap*

```js
         10
       /    \
      20     15
     /  \   /  \
    30   40 50  45
```


## Heap Operations

1. ### Insert (Push)
- Insert the new element at the end of the heap.
- Heapify Up → Compare with its parent and swap if necessary (until heap property is restored).

2. ### Delete (Pop)
- Remove the root element (min/max depending on heap type).
- Move the last element to the root and heapify down.

3. ### Peek
- Returns the top element (min or max) without removing it.

## Implementation 

### Min Heap

```js
class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(i) { return Math.floor((i - 1) / 2); }
  getLeftChildIndex(i) { return 2 * i + 1; }
  getRightChildIndex(i) { return 2 * i + 2; }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0 && this.heap[index] < this.heap[this.getParentIndex(index)]) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }

  heapifyDown() {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.heap.length) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      let rightChildIndex = this.getRightChildIndex(index);
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallerChildIndex]) {
        smallerChildIndex = rightChildIndex;
      }

      if (this.heap[index] < this.heap[smallerChildIndex]) break;
      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }

  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }
}

// Usage Example
let heap = new MinHeap();
heap.insert(10);
heap.insert(20);
heap.insert(5);
heap.insert(30);

console.log(heap.peek()); // 5
console.log(heap.extractMin()); // 5
console.log(heap.extractMin()); // 10
```

### Heapify Up
- The heapifyUp function is used to restore the heap property after insertion. It compares the newly inserted element with its parent and swaps them if necessary.

### Heapify Down
- The heapifyDown function is used to restore the heap property after deletion. It compares the current node with its children and swaps them if necessary.


### Max Heap

```js
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(i) { return Math.floor((i - 1) / 2); }
  getLeftChildIndex(i) { return 2 * i + 1; }
  getRightChildIndex(i) { return 2 * i + 2; }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0 && this.heap[index] > this.heap[this.getParentIndex(index)]) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  extractMax() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    let max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return max;
  }

  heapifyDown() {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.heap.length) {
      let largerChildIndex = this.getLeftChildIndex(index);
      let rightChildIndex = this.getRightChildIndex(index);
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largerChildIndex]) {
        largerChildIndex = rightChildIndex;
      }

      if (this.heap[index] > this.heap[largerChildIndex]) break;
      this.swap(index, largerChildIndex);
      index = largerChildIndex;
    }
  }

  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }
}

// Usage Example
let maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(5);
maxHeap.insert(30);

console.log(maxHeap.peek()); // 30
console.log(maxHeap.extractMax()); // 30
console.log(maxHeap.extractMax()); // 20
console.log(maxHeap.extractMax()); // 10
```

## Heap Sort Algorithm
Heap Sort is a comparison-based sorting technique using a binary heap.

- Heap Sort is NOT a stable sorting algorithm (relative order of equal elements is not preserved).
- **Time Complexity:** O(N log N) (worst, average, and best case).
- **Space Complexity:** O(1) (since sorting is done in place).

### Working

- Build a Max Heap from the input array.
- Swap the root (max element) with the last element and reduce the heap size.
- Heapify Down to restore heap property.
- Repeat until the heap is empty.

### Implementation

```js
function heapSort(arr) {
  let n = arr.length;

  // Convert array into a max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Extract elements one by one
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]]; // Swap max to the end
    heapify(arr, i, 0);
  }
}

function heapify(arr, n, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) largest = left;
  if (right < n && arr[right] > arr[largest]) largest = right;

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}

// Usage Example
let arr = [3, 6, 8, 10, 1, 2, 1];
heapSort(arr);
console.log(arr); // [1, 1, 2, 3, 6, 8, 10]
```

## Applications

1. ### Priority Queue
- Used in Dijkstra’s Algorithm, A* Search, and Task Scheduling.
- Min-heap efficiently fetches the lowest priority element in O(1).

2. ### Scheduling Algorithms
- CPU scheduling (Shortest Job First, Priority Scheduling).
- Memory Management (Garbage Collection).

3. ### Graph Algorithms
- Dijkstra’s Shortest Path → Min Heap helps optimize it.

4. ### Heap Sort
- A great in-place sorting technique using Max Heap.

