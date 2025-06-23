# Implementing a Stack using Queues

This is the reverse of the classic "Queue using Stacks" problem. Here, the goal is to simulate the LIFO (Last-In, First-Out) behavior of a stack using only the FIFO (First-In, First-Out) behavior of one or more queues.

There are two main approaches:
1.  Making the `push` operation costly (using one or two queues).
2.  Making the `pop` operation costly (using two queues).

We will implement the first approach using a single queue, as it's a very elegant solution.

---

## The Concept (Using a Single Queue)

The core idea is to ensure that the most recently added element is always at the **front** of the queue. This way, a simple `dequeue` operation will behave exactly like a stack's `pop`.

1.  **Push Operation (Costly: O(N))**:
    -   When we want to push a new element `x`, we first get the current size of the queue, let's say `s`.
    -   We `enqueue` the new element `x` to the back of the queue.
    -   Now, we `dequeue` the first `s` elements from the front of the queue and immediately `enqueue` them back to the rear.
    -   This clever rotation moves the new element `x` to the front of the queue, while all the older elements are placed behind it in their original order.

2.  **Pop Operation (Cheap: O(1))**:
    -   Since the `push` operation guarantees the newest element is always at the front, we simply `dequeue` from the queue. This correctly retrieves and removes the last item that was added.

### Time Complexity
-   **`push`**: O(N), where N is the number of elements in the stack.
-   **`pop`**: O(1).
-   **`top` / `peek`**: O(1).

---

## Implementation in JavaScript

Here is a JavaScript class that implements a Stack using a single queue (represented by an array).

```javascript
class StackUsingQueue {
    constructor() {
        this.q = []; // Using an array to simulate a queue
    }

    // push(value): Add an item to the top of the stack
    // Time Complexity: O(N)
    push(value) {
        // Get the size of the queue before adding the new element
        const size = this.q.length;

        // Add the new element to the back of the queue
        this.q.push(value);

        // Rotate the queue 'size' times to move the new element to the front
        for (let i = 0; i < size; i++) {
            // Dequeue the front element and enqueue it to the back
            this.q.push(this.q.shift());
        }
    }

    // pop(): Remove and return the top item from the stack
    // Time Complexity: O(1)
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.q.shift(); // The newest item is always at the front
    }

    // top(): Return the top item without removing it
    // Time Complexity: O(1)
    top() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.q[0];
    }

    // isEmpty(): Check if the stack is empty
    // Time Complexity: O(1)
    isEmpty() {
        return this.q.length === 0;
    }

    // size(): Get the number of items
    // Time Complexity: O(1)
    size() {
        return this.q.length;
    }
}

// --- Usage Example ---
console.log("--- Stack implemented with a Queue ---");
const s = new StackUsingQueue();

s.push(10); // q becomes [10]
s.push(20); // q becomes [20, 10]
s.push(30); // q becomes [30, 20, 10]

console.log("Current top element:", s.top()); // 30
console.log("Size:", s.size()); // 3

console.log("Popped:", s.pop()); // 30
console.log("Popped:", s.pop()); // 20

console.log("Current top element:", s.top()); // 10

console.log("Is empty?", s.isEmpty()); // false
```
