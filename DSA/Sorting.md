# Bubble Sorting

- Bubble sorting is a simple sorting algorithm that repeatedly swaps adjacent elements if they are in the wrong order.
- The algorithm compares each pair of adjacent elements and swaps them if they are in the wrong order. The process is repeated until the entire array is sorted.

## Pseudo Code

```js
function bubbleSor(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[i] > arr[j + 1]) {
        let temp = arr[i];
        arr[i] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
```
### Time Complexity

- Best case: O(n) when the array is already sorted
- Worst case: O(n^2) when the array is reverse sorted
- Average case: O(n^2) when the array is randomly sorted

### Space Complexity

- O(1) constant space

### Example

```js
const arr = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(arr);
console.log(arr); // Output: [11, 12, 22, 25, 34, 64, 90]
```

## Visualize Bubble Sort

![Bubble Sort](https://media.geeksforgeeks.org/wp-content/uploads/bubbleSort.gif)   


# Selection Sort

- Selection sort is a simple sorting algorithm that selects the smallest/largest element from an unsorted list in each iteration and places it at the beginning/ending of the sorted list

## Pseudo Code
```js
function selectionSort(arr){
    for (let i= 0;i<arr.length;i++){
        let min = i;
        for(let j = i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
}

```

## Time Complexity  
- Best case: O(n) when the array is already sorted`
- Worst case: O(n^2) when the array is reverse sorted
- Average case: O(n^2) when the array is randomly sorted

## Space Complexity
- O(1) constant space

## Example
```js
const arr = [64, 34, 25, 12, 22, 11, 90];
selectionSort(arr);
console.log(arr); // Output: [11, 12, 22, 25, 34, 64, 90]
```

## Visualize Selection Sort
![Selection Sort](https://media.geeksforgeeks.org/wp-content/uploads/selectionSort.gif)



function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) { // Optimize by reducing iterations
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}


function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i; // Find the index of the smallest element
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) { // Swap only if a smaller element is found
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}


function insertionSort(arr){
  for(let i=0;i<arr.length;i++){
    for(j=i;j>0;j--){
      if(arr[j]<arr[j-1]){
        [arr[j],arr[j-1]] = [arr[j-1],arr[j]];
      }
      else{
        break;
      }
    }
  }
  return arr
}

function mergeSort(arr){
  if(arr.length<=1) return arr;
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0,mid));
  let right = mergeSort(arr.slice(mid))
  return merge (left,right)
}

function merge (left ,right){
  let result =[]
  while(left.length&&right.length){
    if(left[0]<right[0]){
      result.push(left.shift())
    }
    else{
      result.push(right.shift())
    }
  }
  return [...result,...left,...right]
}

function quickSort(arr){
  if(arr.length<=1) return arr
  let random = Math.floor(Math.random()*arr.length)
  let pivot = arr[random]
  
  let left = [];
  let right =[];
  
  for(let i=0;i<arr.length;i++){
    if(i===random) continue;
    if(arr[i]<pivot){
      left.push(arr[i])
    }
    else{
      right.push(arr[i])
    }
  }
  return [...quickSort(left),pivot,...quickSort(right)]
  
}


let arr = [2, 5, 6, 7, -9, -5, 0, -2, 0, 4, 2, 33, 1];
console.log("Bubble Sort:", bubbleSort([...arr])); 
console.log("Selection Sort:", selectionSort([...arr]));
console.log("Insertion Sort:", insertionSort([...arr]));
console.log("Merge Sort:", mergeSort([...arr]));
console.log("Quick Sort:", quickSort([...arr]));