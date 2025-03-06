# Data Structures and Algorithms

## Introduction to Algorithms

An algorithm is a set of well-defined instructions to solve a particular problem.

### Characteristics of Algorithms

- Well-defined inputs and outputs
- Clear and unambiguous steps
- Language-independent
- Finite number of steps
- Feasible and practical

## Algorithm Analysis

The absolute running time of an algorithm cannot be predicted since it depends on several factors:

- Programming language used for implementation
- Computer hardware specifications
- Other concurrent programs
- Operating system efficiency

Therefore, we evaluate algorithm performance in terms of "Input size" using two main metrics:

### 1. Time Complexity

Function that defines the relationship between input size and execution time,

- So when we talk about time complexity we dont care about the actual execution time,because it depends on the hardware and other factors
- This is why when calculating time complexity we can ignore constant factors

### 2. Space Complexity

Amount of memory taken by an algorithm to run, as a function of input size

Space complexty of an algorithm is total space taken by an algorithm to run with respect to input size

- Space complxity both include `Auxiliary Space` and `Working Space`

**Auxiliary Space:**

- Space used by an algorithm to store temporary data structures
- It is not directly related to input size

**Working Space:**

- Space used by an algorithm to store input data
- It is directly related to input size

## Asymptotic Notations

Mathematical tools to represent time and space complexity:

### 1. Big-O Notation (O-notation)

- Represents worst-case complexity
- Most commonly used notation
- Describes upper bound of growth rate (ie it never exceeds the upper bound like O(n) or O(n^2) in an algorithm)

### 2. Omega Notation (Ω-notation)

- Represents best-case complexity
- Describes lower bound of growth rate (ie it always exceeds the lower bound like O(n) or O(n^2) in an algorithm)

### 3. Theta Notation (Θ-notation) 

- Represents average-case complexity
- Describes tight bound of growth rate (ie it lies between O(n) and O(n^2) in an algorithm)

## Common Time Complexities

### O(1) - Constant Time

- Execution time stays constant regardless of input size
- Example: Accessing an array element by index
- Best possible time complexity

### O(log n) - Logarithmic Time

- Execution time increases logarithmically with input size
- Example: Binary search
- Very efficient for large datasets

### O(n) - Linear Time

- Execution time grows linearly with input size
- Example: Linear search, traversing an array
- Common in single loop algorithms

### O(n log n) - Linearithmic Time

- Combination of linear and logarithmic time
- Example: Efficient sorting algorithms (Merge sort, Quick sort)
- Common in divide-and-conquer algorithms

### O(n²) - Quadratic Time

- Execution time grows quadratically with input size
- Example: Bubble sort, nested loops
- Less efficient for large datasets

### O(n³) - Cubic Time

- Execution time grows cubically with input size
- Example: Matrix multiplication (naive approach)
- Generally avoided for large datasets

## Space Complexity Types

### O(1) - Constant Space

- Memory usage remains constant
- Example: Variables, simple loops
- Most memory-efficient

### O(log n) - Logarithmic Space

- Memory usage grows logarithmically
- Example: Recursive binary search
- Efficient for large datasets

### O(n) - Linear Space

- Memory usage grows linearly with input size
- Example: Arrays, storing all input elements
- Common in many algorithms

## Best Practices

1. Always consider both time and space complexity
2. Choose algorithms based on specific use cases
3. Balance between performance and readability
4. Consider input size when selecting algorithms
5. Profile and measure actual performance when needed

## Recuesion

Recursion is a technique in which a function calls itself.
It is a common approach to solve a problem by breaking it down into smaller subproblems and solving them recursively.

- Every recursive function has a base case and a recursive case to avoid infinite recursion
- **Base case**: when the problem can be solved without recursion
- **Recursive case**: when the problem can be solved by breaking it down into smaller subproblems and solving them recursively

### Nth fibunacci number

```js
function fib(n) {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}
```

output:

```js
console.log(fib(7)); // Output: 13
console.log(fib(8)); // Output: 21
```

**time complexity**: `O(2^n)` (exponential)

### Factorial of a number

```js
function Factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  }
  return n * Factorial(n - 1); //ie n! = n*(n-1)!
}
```

output:

```js
console.log(Factorial(5)); // Output: 120
console.log(Factorial(6)); // Output: 720
```

**time complexity**: `O(n)` (linear)

## Search Algorithms

### Linear Search

- Linear search is a simple algorithm that searches an array for a specific value
- It works by comparing each element in the array with the target value
- If a match is found, the index of the element is returned

```js
function LinearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
```

**time complexity**: `O(n)` (linear)
**space complexity**: `O(1)` (constant)
**best case**: `O(1)` (constant)
**worst case**: `O(n)` (linear)

### Binary Search

- Binary search is a divide and conquer algorithm that searches a sorted array for a specific value
- It works by repeatedly dividing the search range in half until the target value is found
- It is more efficient than linear search for large datasets
- Binarysearch only works on sorted arrays

```js
function BinarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (target === arr[mid]) return mid;

    if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}
```

**time complexity**: `O(log n)` (logarithmic)
**space complexity**: `O(1)` (constant)
**best case**: `O(1)` (constant)
**worst case**: `O(log n)` (logarithmic)

### Recursive Binary Search

```js
function RecursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, left, right) {
  if (left > right) {
    return -1;
  }
  let mid = Math.floor((left + right) / 2);
  if (target === arr[mid]) {
    return mid; 
  } 
  else if (target < arr[mid]) {
    return search(arr, target, left, mid - 1);
  } else {
    return search(arr, target, mid + 1, right);
  }
}
```

**time complexity**: `O(log n)` (logarithmic)
**space complexity**: `O(log n)` (logarithmic)


## Linked List
Linked lists are a linear data structure that consists of nodes, each containing a value and a reference to the next node.
Linked lists are useful when you need to store a sequence of elements, but you don't know the number of elements in advance.
Linked lists are also useful when you need to insert or remove elements from the middle of the list.
Linked lists are also useful when you need to access elements in a random order.

```js
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    //prepend node ie add node in start of Linkedlist O(1)
    prepend(value){
        const node = new Node(value) // created a new node
        if(this.isEmpty()){
            this.head = node // set created node as head beacuse list is empty
        }
        else{
            node.next = this.head; // Add node infront of current head
            this.head = node //  switch head to newly added node
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log('List is empty')
        }
        else{
             let curr = this.head
             let listValues = ''
             while(curr){
                listValues += `${curr.value} → `;
                curr = curr.next
             }
             console.log(listValues.slice(0, -3))  // remove the last arrow
        }
    }

// append node ie add node in end of Linkedlist O(n)
    append(value){
      const node = new Node(value);
      if(this.isEmpty()){
        this.head =node;
        this.size++;
      }
      else{
        let prev = this.head;
        while(prev.next){
          prev = prev.next;
        }
        prev.next = node;
        this.size++;
      }
    }

// insert node at specific index O(n)
insert(value,index){
  if(index<0|| index>this.size){
    return 
  }
  else if(index===0){
    this.prepend(value);
  }
  else{
    const node = new Node(value);
    let prev = this.next;
    for(let i=0;i<index-1;i++){
      prev = prev.next;
    }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  remove(index){
    if(index<0||index>this.size){
      return
  }
  let removeNode;
  if(index===0){
    removeNode = this.head.next;
  }
  else{
    let prev = this.head;
    for(let i=0;i<index-1;i++){
      prev = prev.next;
    }
    removeNode = prev.next;
    prev.next = removeNode.next;
  }
  this.size--;
  return removeNode.value
}

// remove node by value ie check for value and remove O(n)
removeValue(value){
  if(this.isEmpty()){
    return null;
  }
  if(this.head.value === value){
    this.head = this.head.next;
    this.size--;
    return value;
  }
  else{
  
    let prev = this.head ;
    let removeNode;
    for(let i =0;i<this.size;i++){
      if(prev.next && prev.next.value === value){
        removeNode = prev.next;
        prev.next = removeNode.next;
        this.size--;
        return removeNode.value
      }
      else{
        return null
      }
  }
}
}

// Search node by value O(n)
search(value){
  if(this.isEmpty()){
    return -1;
  }
  let curr = this.head;
  let index = 0;
  while(curr){
    if(curr.value === value){
      return index;
    }
    curr = curr.next;
    index++;
  }
  return -1;
}

// reverse Linkedlist O(n)

reverse(){
  let prev = null;
  let curr = this.head;
  while(curr){
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  this.head = prev;
}

}


const list = new LinkedList();

console.log(list.isEmpty()); // true (list is empty)

list.prepend(10);
list.prepend(20);
list.prepend(30);

console.log("Size of the list:", list.getSize()); // 3
list.print();

```