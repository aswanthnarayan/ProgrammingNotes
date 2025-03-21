# Arrays
An array is a data structure that stores multiple values in a single variable. In JavaScript, arrays are dynamic, meaning they can grow or shrink in size. Arrays provide an efficient way to store and access elements using an index.

*Example:*

```js
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Apple
```
- Arrays are zero-based, meaning the first element is at index 0

## Memory Allocation 
In JavaScript arrays are not contiguous like in lower-level languages (C, C++). Instead, they behave like dynamic objects, which means they can hold mixed data types and are optimized internally by the JavaScript engine.

*Example (Mixed Types in Array):*

```js
let mixedArray = [10, "Hello", true, { name: "John" }];
console.log(mixedArray[3].name); // John
```

## Use Cases
- Storing a collection of items (e.g., list of users, products, scores)
- Efficient searching and sorting
- Processing large datasets
- Implementing data structures (stacks, queues, graphs)


## Core Concepts

### Creating Arrays
There are two ways to create an array in JavaScript:

```js
let arr1 = [1, 2, 3, 4, 5]; // Using square brackets
let arr2 = new Array(5); // Creates an empty array with 5 slots
console.log(arr1, arr2);
```
### Accessing Elements
Elements are accessed using their index (starting from 0).

```js
let numbers = [10, 20, 30, 40];
console.log(numbers[1]); // 20
console.log(numbers[numbers.length - 1]); // Last element (40)
```
### Modifying Elements
Change the value of an element at a specific index:

```js
let colors = ["Red", "Green", "Blue"];
colors[1] = "Yellow";
console.log(colors); // ["Red", "Yellow", "Blue"]
```
### Deleting Elements
Use splice() or delete (not recommended):

```js
let items = ["Pen", "Notebook", "Eraser"];
items.splice(1, 1); // Removes "Notebook"
console.log(items); // ["Pen", "Eraser"]

delete items[0]; // Not recommended, leaves an empty slot
console.log(items); // [empty, "Eraser"]
```

## 3. Array Methods in JavaScript
1. ## Mutating Methods (Modify the original array)
### push()
push() - Adds an element to the end of the array.
```js
let nums = [1, 2, 3];
nums.push(4);
console.log(nums); // [1, 2, 3, 4]
```
### pop()
Removes the last element
```js
let nums = [1, 2, 3];
nums.pop();
console.log(nums); // [1, 2]
```
### shift()
Removes the first element
```js
let nums = [1, 2, 3];
nums.shift();
console.log(nums); // [2, 3]
```
### unshift()
Adds an element to the beginning of the array
```js
let nums = [2, 3];
nums.unshift(1);
console.log(nums); // [1, 2, 3]
```
### splice()
Adds or removes elements from the array
```js
let arr = [10, 20, 30, 40];
arr.splice(1, 2, 50, 60); // Remove 2 elements from index 1, add 50 & 60
console.log(arr); // [10, 50, 60, 40]
```
2. ## Non-Mutating Methods (Return a new array, do not modify the original)
### map() - Transforms each element
```js
let nums = [1, 2, 3];
let squared = nums.map(num => num * num);
console.log(squared); // [1, 4, 9]
```
### filter() - Filters elements based on a condition
```js
let nums = [10, 20, 30, 40];
let filtered = nums.filter(num => num > 20);
console.log(filtered); // [30, 40]
```
### reduce() - Accumulates values into a single result
```js
let nums = [1, 2, 3, 4];
let sum = nums.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10
```
### slice() - Extracts a portion of an array (does not modify original)
```js
let nums = [10, 20, 30, 40, 50];
let subArray = nums.slice(1, 4); // Extracts from index 1 to 3 (4 is excluded)
console.log(subArray); // [20, 30, 40]
```
### concat() - Combines arrays
```js
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4]
```
3. ## Iteration Methods 
We can use normal `for`, `while`, and `do-while` loops to iterate over arrays. also there is `forEach` loop and `for of` loop specific to arrays in javascript

### forEach() - Loops through the array
```js
let fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(fruit => console.log(fruit));
```
### for...of - Another way to loop
```js
for (let fruit of fruits) {
  console.log(fruit);
}
```
## 4. Time & Space Complexity Analysis
### Time Complexity
|               **Operation**              | **Average Time Complexity** |
|:----------------------------------------:|:---------------------------:|
| Access                                   |             O(1)            |
| Insert at end (push())                   |             O(1)            |
| Insert at beginning (unshift())          |             O(N)            |
| Delete at end (pop())                    |             O(1)            |
| Delete at beginning (shift())            |             O(N)            |
| Searching (Linear Search)                |             O(N)            |
| Searching (Binary Search - sorted array) |           O(log N)          |

### Space Complexity
O(N) (Depends on the number of elements in the array)

## 5. Important Algorithms / Questions You Should Know

### Easy Level

1. Reverse an Array (Two-pointer approach)
2. Find Maximum & Minimum Element
3. Remove Duplicates from an Array
4. Move Zeroes to End
5. Left Rotate an Array by 1
6. Right Rotate an Array by 1
7. Find Second Largest Element
8. Check if Array is Sorted
9. Find Missing Number in an Array (1 to N)
10. Find Union & Intersection of Two Arrays

### Medium Level

1. Find the Majority Element (> N/2 times) (Boyer-Moore Voting Algorithm)
2. Find the First Non-Repeating Element
3. Find All Pairs with a Given Sum
4. Find Subarray with Given Sum (Sliding Window)
5. Sort an Array of 0s, 1s, and 2s (Dutch National Flag Algorithm)
6. Kadane’s Algorithm (Maximum Subarray Sum)
7. Stock Buy and Sell Problem (Max Profit in One Transaction)
8. Find Two Elements that Sum to a Target (Two Pointer Approach)
9. Rearrange Array (Negative & Positive Separately)

### Hard Level

1. Find the Smallest Subarray with Sum Greater than X
2. Find the Longest Consecutive Subsequence
3. Trapping Rainwater Problem (Two Pointer Approach)
4. Merge Two Sorted Arrays Without Extra Space (Gap Method)
5. Find a Subarray with 0 Sum (Using Hashing)
6. Find the Missing and Repeating Number in Array
7. Find the Next Permutation of an Array
8. Find the Median of Two Sorted Arrays (Binary Search Approach)
9. Find the Maximum Product Subarray
10. Longest Subarray with Equal 0s and 1s
