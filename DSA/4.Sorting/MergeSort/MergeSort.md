# Merge Sort

Merge Sort is a highly efficient, stable, comparison-based sorting algorithm. It is a classic example of the **Divide and Conquer** paradigm.

## How it Works: Divide and Conquer

Merge Sort follows a simple three-step process:

1.  **Divide:** The algorithm divides the input array into two equal halves.
2.  **Conquer:** It recursively calls itself for the two halves until the subarrays have only one element (which is inherently sorted).
3.  **Combine:** It merges the two sorted halves back into a single sorted array.

The key to the algorithm is the `merge()` function, which takes two sorted subarrays and combines them into one larger sorted array.

**Example with `arr[] = {38, 27, 43, 3, 9, 82, 10}`:**

*   The array is recursively split until each element is in its own subarray: `{38}, {27}, {43}, {3}, {9}, {82}, {10}`.
*   The `merge` process begins, combining pairs of single-element arrays into sorted two-element arrays: `{27, 38}, {3, 43}, {9, 82}, {10}`.
*   This continues until all elements are merged back into a single, fully sorted array: `{3, 9, 10, 27, 38, 43, 82}`.

## Complexity

*   **Time Complexity:** `O(n log n)` in all cases (best, average, and worst). The algorithm always divides the array into two halves and takes linear time to merge them.
*   **Space Complexity:** `O(n)`. Merge sort requires extra space to store the temporary arrays during the merge process, making it an out-of-place sorting algorithm.

## JavaScript Implementation

```javascript
// The main function that sorts arr[l..r] using merge()
function mergeSort(arr) {
    // Base case: An array with 0 or 1 element is already sorted.
    if (arr.length <= 1) {
        return arr;
    }

    // Find the middle point to divide the array into two halves.
    const mid = Math.floor(arr.length / 2);

    // Call mergeSort for the two halves.
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    // Merge the two sorted halves.
    return merge(left, right);
}

// Merges two sorted subarrays into one sorted array.
function merge(left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    // Concatenate values into the resultArray in order.
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++; // move left array cursor
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++; // move right array cursor
        }
    }

    // We need to concat the remaining elements from the subarray that hasn't been fully processed.
    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

let arr = [5, 3, 4, 2, 6, 10, -2, 0, 1, 44];
console.log("Unsorted array:", arr);
console.log("Sorted array:  ", mergeSort([...arr]));
```
