# Searching Algorithms

Searching algorithms are used to find a specific element (the "target") within a data structure. The choice of algorithm depends on whether the data is sorted.

## 1. Linear Search

Linear search is the most straightforward searching algorithm. It sequentially checks each element of the list until a match is found or the whole list has been searched.

*   **Idea:** Check every element one by one from the beginning.
*   **When to Use:** Works on any list, sorted or unsorted. It's simple but can be slow for large datasets.
*   **Time Complexity:** `O(n)` - In the worst case, we have to look at every single element.
*   **Space Complexity:** `O(1)` - It requires no extra memory.

### JavaScript Implementation

```javascript
function linearSearch(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return i; // Element found, return its index
        }
    }
    return -1; // Element not found
}
```

## 2. Binary Search

Binary search is a highly efficient algorithm for finding an item from a **sorted** list of items. It works by repeatedly dividing the search interval in half.

*   **Prerequisite:** The array **must be sorted**.
*   **Idea:** Compare the target value to the middle element of the array. If they are not equal, the half in which the target cannot lie is eliminated, and the search continues on the remaining half.
*   **Time Complexity:** `O(log n)` - With each comparison, the search area is halved.

### a. Iterative Binary Search

This approach uses a `while` loop to manage the search interval, making it slightly more space-efficient than the recursive version.

*   **Space Complexity:** `O(1)` - It only needs a few variables to store indices.

#### JavaScript Implementation

```javascript
function binarySearchIterative(arr, x) {
    let low = 0;
    let high = arr.length - 1;

    while (high >= low) {
        let mid = low + Math.floor((high - low) / 2);

        // If the element is present at the middle
        if (arr[mid] === x) {
            return mid;
        }

        // If element is smaller than mid, search the left half
        if (arr[mid] > x) {
            high = mid - 1;
        } else { // Otherwise, search the right half
            low = mid + 1;
        }
    }

    return -1; // Element not found
}
```

### b. Recursive Binary Search

This approach uses a function that calls itself, following the "divide and conquer" paradigm. Each recursive call operates on a smaller segment of the array.

*   **Space Complexity:** `O(log n)` - Due to the memory used by the recursion call stack.

#### JavaScript Implementation

```javascript
function binarySearchRecursive(arr, low, high, x) {
    if (high >= low) {
        let mid = low + Math.floor((high - low) / 2);

        // If the element is present at the middle
        if (arr[mid] === x) {
            return mid;
        }

        // If element is smaller than mid, recur for the left subarray
        if (arr[mid] > x) {
            return binarySearchRecursive(arr, low, mid - 1, x);
        }

        // Else, recur for the right subarray
        return binarySearchRecursive(arr, mid + 1, high, x);
    }

    return -1; // Element not found
}
```

## Comparison and Practical Advice

### Quick Comparison

| Feature              | Linear Search          | Binary Search          |
|----------------------|------------------------|------------------------|
| **Data Requirement** | Works on any list      | **Must be sorted**     |
| **Time Complexity**  | `O(n)` (Worst/Average) | `O(log n)` (Worst/Average) |
| **Best Case Time**   | `O(1)`                 | `O(1)`                 |
| **Space Complexity** | `O(1)`                 | `O(1)` (Iterative), `O(log n)` (Recursive) |

### When to Use Which?

*   **Use Linear Search if:**
    *   The list is **unsorted**.
    *   The list is **small**, as the simplicity of linear search might be faster than the overhead of sorting and then searching.

*   **Use Binary Search if:**
    *   The list is **sorted** and **large**.
    *   You need to perform many searches on the same list (the one-time cost of sorting is worth it).


