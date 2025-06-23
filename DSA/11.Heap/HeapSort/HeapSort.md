# Heap Sort

Heap Sort is an efficient, in-place, comparison-based sorting algorithm. It uses a binary heap data structure to sort elements. It is particularly appreciated for its worst-case O(N log N) time complexity, which is better than Quick Sort's O(N^2) worst case.

---

## The Algorithm

Heap Sort works in two main phases:

1.  **Build Max Heap (Heapify Phase)**: First, the algorithm converts the input array into a **Max Heap**. This rearrangement ensures that the largest element in the array is at the root (index 0).
    -   This can be done efficiently in O(N) time by starting from the last non-leaf node and calling a `heapifyDown` function on each node up to the root.

2.  **Sortdown Phase**: The algorithm then repeatedly extracts the maximum element from the heap and builds the sorted array.
    -   Swap the root element (the current maximum) with the last element in the heap.
    -   The largest element is now in its correct sorted position at the end of the array.
    -   "Disconnect" this last element from the heap by reducing the heap's size by one.
    -   Call `heapifyDown` on the new root (the element that was swapped from the end) to restore the max heap property among the remaining elements.
    -   Repeat this process until the heap is empty.

### Time and Space Complexity

-   **Time Complexity**: **O(N log N)** for all cases (best, average, and worst).
    -   Building the initial heap takes O(N).
    -   The sortdown phase involves N-1 `extractMax` operations, each taking O(log N) time.
-   **Space Complexity**: **O(1)**, as it is an in-place sorting algorithm that modifies the input array directly.

---

## Implementation in JavaScript

Here is a complete, in-place implementation of Heap Sort.

```javascript
function heapSort(arr) {
    const n = arr.length;

    // 1. Build Max Heap
    // Start from the last non-leaf node and heapify down to the root.
    // The last non-leaf node is at index Math.floor(n / 2) - 1.
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // 2. Sortdown Phase
    // Extract elements from the heap one by one.
    for (let i = n - 1; i > 0; i--) {
        // Move the current root (max element) to the end
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Call heapify on the reduced heap
        heapify(arr, i, 0);
    }

    return arr;
}

/**
 * Helper function to maintain the max heap property.
 * @param {number[]} arr - The array representing the heap.
 * @param {number} n - The size of the heap.
 * @param {number} i - The index of the root of the subtree to heapify.
 */
function heapify(arr, n, i) {
    let largest = i; // Initialize largest as root
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // If right child is larger than largest so far
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // If the largest element is not the root, swap them
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];

        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
    }
}

// --- Usage Example ---
const unsortedArray = [41, 39, 33, 18, 27, 12, 55];
console.log("Original array:", unsortedArray);

const sortedArray = heapSort(unsortedArray);
console.log("Sorted array:", sortedArray); // [12, 18, 27, 33, 39, 41, 55]

const anotherArray = [5, 13, 2, 25, 7, 17, 20, 8, 4];
console.log("\nOriginal array:", anotherArray);
console.log("Sorted array:", heapSort(anotherArray)); // [2, 4, 5, 7, 8, 13, 17, 20, 25]
```
