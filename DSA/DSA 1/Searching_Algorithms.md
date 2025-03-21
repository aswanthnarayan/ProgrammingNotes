# Searching Algorithms

## 1. Introduction
Searching is the process of finding a specific element within a data structure like an array, linked list, or database. It determines whether the element exists and, if so, returns its position.

### The Importance of Efficient Searching
- Speed: Faster searches lead to improved performance in applications.
- Optimized Resource Usage: Reduces unnecessary computations.
- Fundamental for Larger Applications: Used in databases, search engines, and AI systems.

## 2. Linear Search
Linear Search is a simple searching algorithm that scans each element of a list sequentially until a match is found or the list ends.

### Time Complexity
- Best Case (O(1)): When the element is found at the beginning.
- Worst Case (O(N)): When the element is at the end or absent.
- Average Case (O(N)): When the element is somewhere in the middle.

## Implementation in JavaScript

```js
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i; // Return index if found
  }
  return -1; // Return -1 if not found
}

let arr = [10, 20, 30, 40, 50];
console.log(linearSearch(arr, 30)); // Output: 2
console.log(linearSearch(arr, 100)); // Output: -1
```

## 3. Binary Search
Binary Search is a divide-and-conquer algorithm that finds an element in a sorted array by repeatedly dividing the search space in half.

### Prerequisites 
- The array must be sorted before applying Binary Search.
- It works efficiently only on static datasets (not dynamic lists).

### Implementation of Itreative Binary Search

```js
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) return mid; // Target found
    else if (arr[mid] < target) left = mid + 1; // Search in the right half
    else right = mid - 1; // Search in the left half
  }
  return -1; // Target not found
}

let arr = [10, 20, 30, 40, 50];
console.log(binarySearch(arr, 30)); // Output: 2
console.log(binarySearch(arr, 100)); // Output: -1
```

### Implementation of Recursive Binary Search

```js
function binarySearchRecursive(arr, target, left, right) {
  if (left > right) return -1; // Base case: element not found
  
  let mid = Math.floor((left + right) / 2);
  
  if (arr[mid] === target) return mid;
  else if (arr[mid] < target) return binarySearchRecursive(arr, target, mid + 1, right);
  else return binarySearchRecursive(arr, target, left, mid - 1);
}

let arr = [10, 20, 30, 40, 50];
console.log(binarySearchRecursive(arr, 30, 0, arr.length - 1)); // Output: 2
console.log(binarySearchRecursive(arr, 100, 0, arr.length - 1)); // Output: -1
```


---