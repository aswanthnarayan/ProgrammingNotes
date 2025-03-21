# Recursion
Recursion is a programming technique where a function calls itself to solve a smaller instance of the same problem. It is useful for solving problems that can be broken down into smaller, repetitive sub problems.

- It is widely used in problems involving trees, graphs, and backtracking.

## How Recursion Works (Call Stack)

- Each recursive call is pushed onto the call stack.
- When a base case is reached, the stack starts unwinding, resolving each function call.
- Excessive recursion without a base case can lead to stack overflow errors.

```js
function countdown(n) {
  if (n <= 0) return; // Base case
  console.log(n);
  countdown(n - 1);  // Recursive call
}

countdown(5);
// Output: 5, 4, 3, 2, 1
```
- Every recursive function must have a base case to stop recursion; otherwise, it leads to infinite calls and a stack overflow.

*Example:*

```js
function infiniteRecursion() {
  console.log("This will never stop!");
  infiniteRecursion(); // No base case → Stack overflow error
}
```

## Types of Recursion

### Direct Recursion
A function calls itself directly.

*Example (Direct Recursion):*

```js
function directRecursion(n) {
  if (n <= 0) return;
  directRecursion(n - 1);
}
```
### Indirect Recursion
A function calls another function, which then calls the original function.

*Example (Indirect Recursion):*

```js
function A(n) {
  if (n <= 0) return;
  console.log(n);
  B(n - 1);
}

function B(n) {
  if (n <= 0) return;
  console.log(n);
  A(n - 2);
}

A(5); 
```

### Tail Recursion
The recursive call is the last operation in the function.

*Example (Tail Recursion):*

```js
function tailRecursion(n, acc = 1) {
  if (n === 0) return acc;
  return tailRecursion(n - 1, acc * n);
}
console.log(tailRecursion(5)); // 120
```

### Non-Tail Recursion
The function performs additional operations after the recursive call.

*Example (Non-Tail Recursion):*

```js
function nonTailRecursion(n) {
  if (n === 0) return 1;
  return n * nonTailRecursion(n - 1);
}
console.log(nonTailRecursion(5)); // 120
```

## 4. Recursion vs Iteration

| **Feature**  | **Recursion**                          | **Iteration**                        |
|--------------|----------------------------------------|--------------------------------------|
| Memory Usage | Higher (stack calls)                   | Lower (loop variables)               |
| Performance  | Slower (due to function calls)         | Faster (less overhead)               |
| Readability  | More readable for tree-based problems  | More readable for loops              |
| Complexity   | Suitable for divide & conquer problems | Suitable for simple repetitive tasks |

## 5. Optimizing Recursion

### Memoization (Top-Down Approach)

- Storing results of previous calculations to avoid redundant recursive calls.
- Helps optimize problems like Fibonacci series.

*Example (Fibonacci with Memoization):*

```js
function fibonacciMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  return memo[n];
}
console.log(fibonacciMemo(50)); // Optimized result

```

### Dynamic Programming Approach (Bottom-Up Approach)

- Solves problems by building solutions from smaller sub problems iteratively.
- Uses arrays or variables to store intermediate results.

*Example (Fibonacci Using Dynamic Programming):*

```js
function fibonacciDP(n) {
  let dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
console.log(fibonacciDP(50)); // Optimized result
```


## Common Recursive Problems

### Easy Level

1. Print numbers from 1 to N using recursion.
2. Print numbers from N to 1 using recursion.
3. Find the sum of first N natural numbers.
4. Find the factorial of a number.
5. Reverse a string using recursion.
6. Check if a string is a palindrome.
7. Calculate the Nth Fibonacci number.
8. Find the sum of digits of a number.
9. Count the number of digits in a number.
10. Find the greatest common divisor (GCD) of two numbers.

### Medium Level

1. Generate all subsets of a string (Power Set).
2. Print all permutations of a given string/array.
3. Tower of Hanoi problem.
4. Find all unique subsets of a given array.
5. Solve the Josephus problem.
6. Find the nth Catalan number.
7. Implement binary search using recursion.
8. Print all possible balanced parentheses for given n.
9. Find all paths in a maze (rat in a maze problem).
10. Count ways to climb N stairs (Staircase Problem).

### Hard Level

1. Find the longest palindromic substring using recursion.
2. Solve the N-Queens problem.
3. Sudoku Solver using backtracking.
4. Word Break Problem using recursion.
5. Implement Regular Expression Matching using recursion.
6. Find the longest common subsequence (LCS).
7. Find the longest increasing subsequence (LIS).
8. Solve the Knight’s Tour problem.
9. Solve the Word Search problem in a grid.
10. Solve the Traveling Salesman Problem using recursion.

