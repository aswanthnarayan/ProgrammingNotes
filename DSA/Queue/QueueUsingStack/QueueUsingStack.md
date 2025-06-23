# Implementing a Queue using Two Stacks

This is a classic computer science problem that demonstrates a deep understanding of data structures. The goal is to simulate the FIFO (First-In, First-Out) behavior of a queue using only the LIFO (Last-In, First-Out) behavior of two stacks.

---

## The Concept

We use two stacks, let's call them `stack1` (the "inbox") and `stack2` (the "outbox").

1.  **Enqueue Operation**: To add a new element to the queue, we simply `push` it onto `stack1`. This is always an O(1) operation.

2.  **Dequeue Operation**: This is the clever part. The element we want to dequeue is at the very bottom of `stack1`. To get to it, we use `stack2` as a temporary holding area to reverse the order.
    -   **If `stack2` is empty**: We pop every element from `stack1` and push it onto `stack2`. This effectively reverses the order of the elements. The oldest element in `stack1` is now at the top of `stack2`.
    -   **After the transfer (or if `stack2` was not empty)**: We simply `pop` from `stack2`. This will be the oldest element, correctly simulating FIFO behavior.

### Amortized Time Complexity

-   **`enqueue`**: O(1)
-   **`dequeue`**: This is interesting. In the worst case, a single `dequeue` operation can take O(N) time if it needs to move N elements from `stack1` to `stack2`. However, each element is only moved from `stack1` to `stack2` once. Over a series of many operations, the total cost of these transfers is spread out, so the **amortized time complexity** of `dequeue` is O(1).

---

## Implementation in JavaScript

Here is a JavaScript class that implements a Queue using two stacks (represented by arrays).

```javascript
class QueueUsingStacks {
    constructor() {
        this.inStack = [];  // Used for enqueue operations
        this.outStack = []; // Used for dequeue operations
    }

    // enqueue(value): Add an item to the queue
    // Time Complexity: O(1)
    enqueue(value) {
        this.inStack.push(value);
    }

    // _transfer(): A private helper to move items from inStack to outStack
    _transfer() {
        // This check is crucial. Only transfer if the outStack is empty.
        if (this.outStack.length === 0) {
            // While there are items in the inStack, move them to the outStack
            while (this.inStack.length > 0) {
                this.outStack.push(this.inStack.pop());
            }
        }
    }

    // dequeue(): Remove and return the front item of the queue
    // Time Complexity: Amortized O(1)
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }

        // Ensure the outStack has the oldest elements at its top
        this._transfer();
        
        return this.outStack.pop();
    }

    // peek(): Return the front item without removing it
    // Time Complexity: Amortized O(1)
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }

        // Ensure the outStack has the oldest elements at its top
        this._transfer();

        // The front element is the last one in the outStack array
        return this.outStack[this.outStack.length - 1];
    }

    // isEmpty(): Check if both stacks are empty
    // Time Complexity: O(1)
    isEmpty() {
        return this.inStack.length === 0 && this.outStack.length === 0;
    }

    // size(): Get the total number of items
    // Time Complexity: O(1)
    size() {
        return this.inStack.length + this.outStack.length;
    }
}

// --- Usage Example ---
console.log("--- Queue implemented with Two Stacks ---");
const q = new QueueUsingStacks();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log("Size:", q.size()); // 3
console.log("Peek:", q.peek()); // 1 (After transfer, 1 is at the top of outStack)

console.log("Dequeued:", q.dequeue()); // 1
console.log("Dequeued:", q.dequeue()); // 2

console.log("Peek:", q.peek()); // 3

q.enqueue(4);
console.log("Dequeued:", q.dequeue()); // 3
console.log("Dequeued:", q.dequeue()); // 4

console.log("Is empty?", q.isEmpty()); // true
```