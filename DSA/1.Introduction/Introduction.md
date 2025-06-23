# Introduction to Analysis of Algorithms

Algorithm analysis is the process of evaluating the resources (like time and space) an algorithm requires. It helps us predict its performance and choose the most efficient solution for a problem without having to run it first.

### Why is Algorithm Analysis Important?

*   **Predict Behavior:** Understand how an algorithm performs under different conditions.
*   **Compare Algorithms:** Objectively compare different approaches to find the most efficient one.
*   **Save Resources:** Avoid implementing and testing inefficient algorithms.
*   **Optimize Performance:** Identify bottlenecks to improve an algorithm's speed and memory usage.

### Key Factors in Analysis

We primarily focus on two types of complexity:

1.  **Time Complexity:** How much time an algorithm takes to run as a function of its input size `n`.
2.  **Space Complexity:** How much memory an algorithm uses as a function of its input size `n`.

## Asymptotic Analysis

Asymptotic analysis is a method of evaluating an algorithm's performance by focusing on its growth rate as the input size (`n`) becomes very large. It simplifies analysis by ignoring machine-dependent constants and focusing on the dominant factors.

## Asymptotic Notations

Asymptotic notations are the mathematical tools we use to describe an algorithm's complexity.

![Big O](https://raw.githubusercontent.com/aswanthnarayan/ProgrammingNotes/main/Daigrams/BigO.png)

### 1. Big-O Notation (O)

*   **Idea:** Represents the **upper bound** of the running time (worst-case scenario).
*   **Meaning:** Guarantees that the algorithm's runtime will not grow faster than a certain rate.
*   **When to Use:** This is the most common notation, as we are often most concerned with an algorithm's worst-case performance.

### 2. Omega Notation (Ω)

*   **Idea:** Represents the **lower bound** of the running time (best-case scenario).
*   **Meaning:** The algorithm will take at least this much time to run.
*   **When to Use:** Rarely used in practice, but useful for theoretical analysis to define the minimum effort required.

### 3. Theta Notation (Θ)

*   **Idea:** Represents the **tight bound** of the running time.
*   **Meaning:** The algorithm's runtime is bounded both from above and below. This happens when the best-case and worst-case scenarios have the same growth rate.
*   **When to Use:** When an algorithm's performance is consistent for all inputs of a given size.

## Examples

Let’s analyze algorithms for calculating the sum of the first `n` natural numbers.

### Method 1: Mathematical Formula - O(1)

```javascript
function sum(n) {
    return (n * (n + 1)) / 2;
}
```
*   **Explanation:** This method takes the same amount of time regardless of `n`.
*   **Time Complexity:** `O(1)` (Constant Time).

### Method 2: Single Loop - O(n)

```javascript
function sum(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
```
*   **Explanation:** The loop runs `n` times, so the time taken grows linearly with the input size.
*   **Time Complexity:** `O(n)` (Linear Time).

### Method 3: Nested Loops - O(n²)

```javascript
function sum(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            total++;
        }
    }
    return total;
}
```
*   **Explanation:** The inner loop's iterations depend on the outer loop, leading to a quadratic growth rate.
*   **Time Complexity:** `O(n²)` (Quadratic Time).

## Interview-Focused Topics

### Common Time Complexity Growth Rates

Here are some common time complexities, ordered from most to least efficient.

| Complexity | Name          | Example                               |
|------------|---------------|---------------------------------------|
| `O(1)`       | Constant      | Accessing an array element by index   |
| `O(log n)`   | Logarithmic   | Binary Search                         |
| `O(n)`       | Linear        | Iterating through an array            |
| `O(n log n)` | Linearithmic  | Efficient sorting (Merge Sort, Quick Sort) |
| `O(n²)`      | Quadratic     | Nested loops (Bubble Sort, Selection Sort) |
| `O(2^n)`     | Exponential   | Recursive Fibonacci calculation       |
| `O(n!)`      | Factorial     | Traveling Salesperson Problem (brute-force) |

### Space Complexity

Space complexity measures the total amount of memory an algorithm uses, including the space taken by the inputs. We often focus on **auxiliary space complexity**, which is the extra space used by the algorithm, not including the input.

*   **O(1) Space:** The algorithm uses a constant amount of extra memory. The `sum` examples above all have `O(1)` space complexity because they only use a few variables (`total`, `i`, `j`).
*   **O(n) Space:** The memory usage grows linearly with the input size. For example, creating a copy of an input array.

### Best, Average, and Worst-Case Analysis: Array Search

Let's analyze a simple linear search algorithm.

```javascript
function search(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
            return i; // Found it
        }
    }
    return -1; // Not found
}
```

*   **Best Case (Ω(1)):** The element `x` is the very first item in the array (`arr[0]`). The loop runs only once.
*   **Worst Case (O(n)):** The element `x` is the last item in the array, or it's not in the array at all. The loop runs `n` times.
*   **Average Case (Θ(n)):** On average, the element is found somewhere in the middle. The loop runs about `n/2` times. In asymptotic analysis, we drop the constant (`1/2`), so the average case is still described as `Θ(n)`.
