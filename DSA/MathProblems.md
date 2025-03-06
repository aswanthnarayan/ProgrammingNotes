# Math Problems

## 1.Fibonacci Sequence

### Problem Statement
Given a number `n`, find the first `n` numbers in the Fibonacci sequence.

### What is Fibonacci Sequence?
The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.

For example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

### Solution

```js
let n = 7;  // We want first 7 numbers
let fib = [0, 1];  // Initialize with first two numbers

for (let i = 2; i < n; i++) {
    fib[i] = fib[i-1] + fib[i-2];
}

console.log(fib);  // Output: [0, 1, 1, 2, 3, 5, 8]

```

### Time Complexity
- The time complexity of the above code is O(n), where `n` is the number of numbers in the Fibonacci sequence.
- The loop runs `n-1` times, where `n` is the number of numbers in the Fibonacci sequence.
- Each iteration of the loop takes constant time to calculate the next number in the sequence.
- Therefore, the overall time complexity is O(n).

### Space Complexity
- The space complexity of the above code is O(n), where `n` is the number of numbers in the Fibonacci sequence.
- The `fib` array stores the first `n` numbers in the Fibonacci sequence.
- Therefore, the overall space complexity is O(n).

## 2.Factorial

### Problem Statement
Given a number `n`, find its factorial.

### What is Factorial?
The factorial of a number `n` is the product of all positive integers less than or equal to `n`. It is denoted by `n!` and is often written as `n` factorial.

For example: 5! = 5 * 4 * 3 * 2 * 1 = 120

### Solution

```js
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));  // Output: 120

```

### Time Complexity
- The time complexity of the above code is O(n), where `n` is the number to calculate its factorial.
- The loop runs `n` times, where `n` is the number to calculate its factorial.
- Each iteration of the loop takes constant time to calculate the next number in the sequence.
- Therefore, the overall time complexity is O(n).

### Space Complexity
- The space complexity of the above code is O(1), as we only use a constant amount of space to store the result.
- The `result` variable stores the result of the factorial calculation.
- Therefore, the overall space complexity is O(1).          


## 3.Prime Number

### Problem Statement
Given a number `n`, determine if it is a prime number.

### What is Prime Number?
A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. It is also known as a prime.   

### Solution

```js
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(7));  // Output: true

```

### Time Complexity
- The time complexity of the above code is O(n), where `n` is the number to check if it is a prime number.
- The loop runs `n/2` times, where `n` is the number to check if it is a prime number.
- Each iteration of the loop takes constant time to calculate the next number in the sequence.
- Therefore, the overall time complexity is O(n).

### Space Complexity
- The space complexity of the above code is O(1), as we only use a constant amount of space to store the result.
- The `result` variable stores the result of the prime number check.
- Therefore, the overall space complexity is O(1).

## 4.Power of Two

### Problem Statement
Given a number `n`, determine if it is a power of two.

### What is Power of Two?
A power of two is a number that can be expressed as `2^x`, where `x` is an integer. It is also known as a power of two.

### Solution

```js
function isPowerOfTwo(n) {
    if (n <= 0) {
        return false;
    }
    while (n % 2 === 0) {
        n /= 2;
    }
    return n === 1;
}

console.log(isPowerOfTwo(16));  // Output: true

```

### Time Complexity
- The time complexity of the above code is O(log n), where `n` is the number to check if it is a power of two.
- The loop runs log n times, where `n` is the number to check if it is a power of two.
- Each iteration of the loop takes constant time to calculate the next number in the sequence.
- Therefore, the overall time complexity is O(log n).   

### Space Complexity
- The space complexity of the above code is O(1), as we only use a constant amount of space to store the result.
- The `result` variable stores the result of the power of two check.
- Therefore, the overall space complexity is O(1).
 