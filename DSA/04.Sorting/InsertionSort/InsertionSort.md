# Insertion Sort

Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. It works similarly to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.

## How it Works

Insertion sort iterates through the input elements, and for each element, it finds its correct position in the sorted part of the array and inserts it there. This is done by shifting all the larger elements one position to the right.

**Example with `arr[] = {12, 11, 13, 5, 6}`:**

1.  **Pass 1 (i=1):** `key = 11`. Compare `11` with `12`. Since `12 > 11`, shift `12` to the right.
    *   `{12, 12, 13, 5, 6}` -> Insert `11`. -> `{11, 12, 13, 5, 6}`

2.  **Pass 2 (i=2):** `key = 13`. Compare `13` with `12`. Since `12 < 13`, no shift is needed. `13` is in its correct place.
    *   `{11, 12, 13, 5, 6}`

3.  **Pass 3 (i=3):** `key = 5`. Compare `5` with `13`, `12`, and `11`. All are greater, so shift them all to the right.
    *   `{11, 12, 13, 13, 6}` -> `{11, 12, 12, 13, 6}` -> `{11, 11, 12, 13, 6}` -> Insert `5`. -> `{5, 11, 12, 13, 6}`

4.  **Pass 4 (i=4):** `key = 6`. Compare `6` with `13`, `12`, and `11`. Shift them to the right.
    *   ... -> Insert `6`. -> `{5, 6, 11, 12, 13}`

Finally, the array is sorted.

## Complexity

*   **Time Complexity:**
    *   **Worst and Average Case:** `O(n²)` - Occurs when the array is sorted in reverse order.
    *   **Best Case:** `O(n)` - Occurs when the array is already sorted. The inner loop is never entered.
*   **Space Complexity:** `O(1)` - It's an in-place sorting algorithm.

## JavaScript Implementation

```javascript
function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        // Choose the first element in the unsorted part as the key.
        let key = arr[i];
        let j = i - 1;

        // Move elements of the sorted part (arr[0..i-1]) that are greater than the key
        // to one position ahead of their current position.
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

let arr = [5, 3, 4, 2, 6, 10, -2, 0, 1, 44];
console.log("Unsorted array:", arr);
console.log("Sorted array:  ", insertionSort([...arr]));
```