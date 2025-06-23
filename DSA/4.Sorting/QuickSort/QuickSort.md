# Quick Sort

Quick Sort is a highly efficient, in-place sorting algorithm that, like Merge Sort, uses the **Divide and Conquer** strategy. Despite a worst-case time complexity of O(n²), it is often faster in practice than other O(n log n) algorithms.

## How it Works: The Partition

The key to Quick Sort is the **partitioning** step. The goal is to pick an element from the array, called the **pivot**, and rearrange the array so that all elements smaller than the pivot are on its left, and all elements greater are on its right. This places the pivot in its final sorted position.

There are several ways to choose a pivot and partition the array. A common method is the **Lomuto Partition Scheme**:

1.  **Choose a Pivot:** The last element of the array is chosen as the pivot.
2.  **Partition:** Iterate through the array, keeping track of an index `i` for the position of the last element that was smaller than the pivot. If you find an element smaller than the pivot, increment `i` and swap the current element with the element at index `i`.
3.  **Place the Pivot:** After iterating through the array, swap the pivot (the last element) with the element at `i + 1`. This `i + 1` is the final position of the pivot.
4.  **Recurse:** Recursively apply the same process to the subarrays to the left and right of the pivot.

## Complexity

*   **Time Complexity:**
    *   **Best and Average Case:** `O(n log n)` - Occurs when the pivot choice consistently divides the array into roughly equal halves.
    *   **Worst Case:** `O(n²)` - Occurs when the pivot choice is consistently the smallest or largest element, leading to unbalanced partitions (e.g., sorting an already sorted array).
*   **Space Complexity:** `O(log n)` (average case) for the recursion stack. It's considered an in-place sort as it doesn't require auxiliary arrays.

## JavaScript Implementation (Lomuto Partition)

This implementation separates the logic into a `quickSort` function and a `partition` helper function for clarity.

```javascript
// The main function that implements QuickSort
function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        // pi is the partitioning index, arr[pi] is now at the right place
        let pi = partition(arr, low, high);

        // Separately sort elements before and after partition
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
    return arr;
}

// This function takes the last element as pivot, places the pivot element
// at its correct position in the sorted array, and places all smaller
// elements to the left of the pivot and all greater elements to the right.
function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1; // Index of smaller element

    for (let j = low; j < high; j++) {
        // If the current element is smaller than the pivot
        if (arr[j] < pivot) {
            i++;
            // Swap arr[i] and arr[j]
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    // Swap the pivot element with the element at i + 1
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1; // Return the partitioning index
}

let arr = [5, 3, 4, 2, 6, 10, -2, 0, 1, 44];
console.log("Unsorted array:", arr);
// Create a copy to sort, keeping the original array unchanged
const sortedArr = quickSort([...arr]);
console.log("Sorted array:  ", sortedArr);
```