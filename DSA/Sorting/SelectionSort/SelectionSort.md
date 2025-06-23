# Selection Sort

Selection Sort is a simple, in-place comparison sorting algorithm. It divides the input list into two parts: a sorted sublist of items which is built up from left to right at the front (left) of the list, and a sublist of the remaining unsorted items that occupy the rest of the list.

## How it Works

The algorithm repeatedly selects the smallest (or largest, in descending order) element from the unsorted sublist and swaps it with the first element of the unsorted part. This process is repeated for the remaining unsorted sublist until the entire list is sorted.

**Example with `arr[] = {64, 25, 12, 22, 11}`:**

1.  **Pass 1:** Find the minimum element in `[64, 25, 12, 22, 11]`. The minimum is `11`.
    *   Swap `64` with `11`. -> `{11, 25, 12, 22, 64}`

2.  **Pass 2:** Find the minimum element in the unsorted part `[25, 12, 22, 64]`. The minimum is `12`.
    *   Swap `25` with `12`. -> `{11, 12, 25, 22, 64}`

3.  **Pass 3:** Find the minimum in `[25, 22, 64]`. The minimum is `22`.
    *   Swap `25` with `22`. -> `{11, 12, 22, 25, 64}`

4.  **Pass 4:** Find the minimum in `[25, 64]`. The minimum is `25`. It's already in the correct position, so no change is needed.
    *   The array is now sorted: `{11, 12, 22, 25, 64}`

## Complexity

*   **Time Complexity:** `O(n²)` in all cases (best, average, and worst). The algorithm always performs the same number of comparisons, regardless of the input data's initial order.
*   **Space Complexity:** `O(1)`. It is an in-place algorithm as it does not require any extra space.

## JavaScript Implementation

```javascript
function selectionSort(arr) {
    const n = arr.length;

    // One by one, move the boundary of the unsorted subarray
    for (let i = 0; i < n - 1; i++) {
        // Find the minimum element in the unsorted array
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element of the unsorted part
        // A temporary variable or destructuring assignment can be used for the swap.
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

let arr = [5, 3, 4, 2, 6, 10, -2, 0, 1, 44];
console.log("Unsorted array:", arr);
console.log("Sorted array:  ", selectionSort([...arr]));
```

console.log(SelectionSort(arr))