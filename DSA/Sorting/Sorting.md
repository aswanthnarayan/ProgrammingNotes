# Sorting Algorithms

Sorting is a fundamental operation in computer science that involves arranging elements of a list or array in a specific order (e.g., ascending or descending). Efficient sorting is crucial for optimizing the performance of other algorithms, such as search and merge operations, and for presenting data in a human-readable format.

There are numerous sorting algorithms, each with its own advantages and trade-offs in terms of time complexity, space complexity, and stability.

## Key Sorting Concepts

When evaluating sorting algorithms, two important characteristics are whether they are **in-place** and **stable**.

### In-Place Sorting

An **in-place** sorting algorithm is one that sorts the elements directly within the original array, without requiring significant extra memory. 

-   **Memory Usage**: It uses a very small, constant amount of extra space (O(1) space complexity) for temporary variables.
-   **Examples**: `Quick Sort`, `Heap Sort`, `Bubble Sort`, `Selection Sort`, and `Insertion Sort` are all in-place.
-   **Contrast (Out-of-Place)**: `Merge Sort` is a classic example of an out-of-place algorithm because it requires O(N) extra space to merge the sorted halves.

### Stable Sorting

A sorting algorithm is **stable** if it preserves the original relative order of equal elements.

-   **What it means**: If you sort a list of students by grade, and two students have the same grade, a stable sort ensures their original order (e.g., alphabetical) is maintained.
-   **Examples of Stable Sorts**: `Merge Sort`, `Insertion Sort`, `Bubble Sort`.
-   **Examples of Unstable Sorts**: `Quick Sort`, `Heap Sort`, `Selection Sort`.

### Summary Table

| Algorithm      | In-Place? | Stable? | Time Complexity (Avg) |
| :------------- | :-------: | :-----: | :-------------------: |
| Bubble Sort    |    Yes    |   Yes   |        O(n²)        |
| Insertion Sort |    Yes    |   Yes   |        O(n²)        |
| Selection Sort |    Yes    |   No    |        O(n²)        |
| Merge Sort     |    No     |   Yes   |      O(n log n)       |
| Quick Sort     |    Yes    |   No    |      O(n log n)       |
| Heap Sort      |    Yes    |   No    |      O(n log n)       |

---


## Common Sorting Algorithms

Here you can find detailed explanations and implementations for various sorting algorithms:

*   **[Bubble Sort](./BubbleSort/BubbleSort.md)**: A simple comparison-based algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.

*   **[Insertion Sort](./InsertionSort/InsertionSort.md)**: Builds the final sorted array one item at a time, similar to how one might sort a hand of playing cards.

*   **[Merge Sort](./MergeSort/MergeSort.md)**: A highly efficient, stable, divide-and-conquer algorithm that guarantees O(n log n) performance.

*   **[Quick Sort](./QuickSort/QuickSort.md)**: An efficient in-place sorting algorithm that uses a divide-and-conquer strategy based on a pivot element. It's often faster in practice than other O(n log n) algorithms.

*   **[Selection Sort](./SelectionSort/SelectionSort.md)**: An in-place comparison sort that repeatedly finds the minimum element from the unsorted part and puts it at the beginning.
