# Bubble Sort

Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping adjacent elements if they are in the wrong order. While simple to understand, it is not suitable for large datasets due to its high time complexity.

## How it Works

Bubble Sort steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The largest elements "bubble" up to the end of the list with each pass.

**Example with `arr[] = {5, 1, 4, 2, 8}`:**

1.  **First Pass:**
    *   `(5 1 4 2 8)` -> `(1 5 4 2 8)` (Swap 5 and 1)
    *   `(1 5 4 2 8)` -> `(1 4 5 2 8)` (Swap 5 and 4)
    *   `(1 4 5 2 8)` -> `(1 4 2 5 8)` (Swap 5 and 2)
    *   `(1 4 2 5 8)` -> `(1 4 2 5 8)` (No swap)
    *   *After this pass, the largest element (8) is in its correct position.*

2.  **Second Pass:**
    *   The process is repeated for the remaining unsorted part of the array.

The algorithm can be optimized to stop early if a full pass completes with no swaps, which means the array is already sorted.

## Complexity

*   **Time Complexity:**
    *   **Worst and Average Case:** `O(n²)` - This occurs when the array is in reverse order.
    *   **Best Case:** `O(n)` - This occurs when the array is already sorted, and we use the "swapped" flag optimization.
*   **Space Complexity:** `O(1)` - It's an in-place sorting algorithm.

## JavaScript Implementation

```javascript
// Optimized BubbleSort with a flag to stop early if the array is sorted
function bubbleSort(arr) {
    const n = arr.length;
    let swapped;
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        // Last i elements are already in place
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        // If no two elements were swapped by inner loop, then break
        if (swapped === false) {
            break;
        }
    }
    return arr;
}
```
