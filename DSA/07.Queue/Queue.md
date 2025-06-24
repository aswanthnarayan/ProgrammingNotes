# Queue Data Structure

A queue is a linear data structure that follows the **First-In, First-Out (FIFO)** principle. This means the first element added to the queue will be the first one to be removed. A real-world analogy is a line of people waiting for a service; the first person to join the line is the first person to be served.

---

## Basic Operations

-   **`enqueue(item)`**: Adds an item to the end (rear) of the queue. If the queue is full in a fixed-size implementation, this is an **Overflow** condition.
-   **`dequeue()`**: Removes and returns the item from the front of the queue. If the queue is empty, this is an **Underflow** condition.
-   **`front()`** or **`peek()`**: Returns the front item without removing it.
-   **`rear()`**: Returns the last item without removing it.
-   **`isEmpty()`**: Returns `true` if the queue is empty.
-   **`size()`**: Returns the number of items in the queue.

---

## Types of Queues

1.  **Simple Queue**: A standard linear queue where insertion happens at the rear and deletion at the front.
2.  **Circular Queue**: An improvement on the simple queue where the last position is connected back to the first, making it a circle. This allows for more efficient use of array space.
3.  **Priority Queue**: A special type of queue where each element has a "priority" associated with it. Elements with higher priority are dequeued before elements with lower priority.
4.  **Dequeue (Double-Ended Queue)**: A queue where elements can be added or removed from either the front or the rear.

---

## Applications of Queue

-   **CPU and Disk Scheduling**: Managing processes or jobs waiting for a resource.
-   **Asynchronous Data Transfer**: Used in IO buffers, pipes, and file I/O where data is not transferred at the same rate.
-   **Graph Algorithms**: Essential for Breadth-First Search (BFS) to keep track of nodes to visit.
-   **Resource Sharing**: Handling requests for a shared resource, like a printer queue.

---

## 1. Linked List Implementation (Recommended)

This is the most common and efficient way to implement a queue. It's dynamic and all core operations are O(1).

### Implementation in JavaScript

```javascript
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class QueueLinkedList {
    constructor() {
        this.front = null; // Corresponds to the 'head'
        this.rear = null;  // Corresponds to the 'tail'
        this.size = 0;
    }

    // enqueue(value): Add an item to the rear of the queue
    // Time Complexity: O(1)
    enqueue(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }

    // dequeue(): Remove and return the front item
    // Time Complexity: O(1)
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue Underflow: Cannot dequeue, queue is empty.");
            return null;
        }
        const dequeuedNode = this.front;
        this.front = this.front.next;
        // If the queue becomes empty after dequeue, reset rear as well
        if (this.front === null) {
            this.rear = null;
        }
        this.size--;
        return dequeuedNode.value;
    }

    // peek(): Return the front item without removing it
    // Time Complexity: O(1)
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty.";
        }
        return this.front.value;
    }

    // isEmpty(): Check if the queue is empty
    // Time Complexity: O(1)
    isEmpty() {
        return this.size === 0;
    }

    // size(): Get the number of items
    // Time Complexity: O(1)
    size() {
        return this.size;
    }

    // Helper to print the queue
    print() {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
            return;
        }
        let curr = this.front;
        let str = "Front -> ";
        while (curr) {
            str += curr.value + " -> ";
            curr = curr.next;
        }
        console.log(str + "Rear");
    }
}

// --- Usage Example ---
console.log("--- Linked List-based Queue ---");
const queueLL = new QueueLinkedList();
queueLL.enqueue(10);
queueLL.enqueue(20);
queueLL.enqueue(30);
console.log("Current queue:");
queueLL.print(); // Front -> 10 -> 20 -> 30 -> Rear
console.log("Size:", queueLL.size()); // 3
console.log("Front element:", queueLL.peek()); // 10
console.log("Dequeued:", queueLL.dequeue()); // 10
console.log("Current queue:");
queueLL.print(); // Front -> 20 -> 30 -> Rear
console.log("Is empty?", queueLL.isEmpty()); // false
```

---

## 2. Array Implementation (Circular Queue)

A circular queue is an efficient way to implement a queue using a fixed-size array. It avoids the wasted space of a simple array by wrapping around from the end to the start.

### Implementation in JavaScript

```javascript
class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.front = -1;
        this.rear = -1;
    }

    isFull() {
        return this.currentLength === this.capacity;
    }

    isEmpty() {
        return this.currentLength === 0;
    }

    // enqueue(item): Add an item to the rear
    // Time Complexity: O(1)
    enqueue(item) {
        if (this.isFull()) {
            console.log("Queue Overflow: Cannot enqueue, queue is full.");
            return;
        }
        // Calculate the new rear position
        this.rear = (this.rear + 1) % this.capacity;
        this.items[this.rear] = item;
        this.currentLength++;
        // If it's the first item, set the front pointer
        if (this.front === -1) {
            this.front = this.rear;
        }
    }

    // dequeue(): Remove and return the front item
    // Time Complexity: O(1)
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue Underflow: Cannot dequeue, queue is empty.");
            return null;
        }
        const item = this.items[this.front];
        this.items[this.front] = null; // Clear the space
        this.front = (this.front + 1) % this.capacity;
        this.currentLength--;
        if (this.isEmpty()) {
            // Reset pointers if queue becomes empty
            this.front = -1;
            this.rear = -1;
        }
        return item;
    }

    // peek(): Return the front item
    // Time Complexity: O(1)
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty.";
        }
        return this.items[this.front];
    }
    
    print() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
        } else {
            let i;
            let str = "";
            for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
                str += this.items[i] + " <- ";
            }
            str += this.items[i];
            console.log(str);
        }
    }
}

// --- Usage Example ---
console.log("\n--- Circular Array-based Queue ---");
const cQueue = new CircularQueue(5);
cQueue.enqueue(10);
cQueue.enqueue(20);
cQueue.enqueue(30);
cQueue.enqueue(40);
cQueue.enqueue(50);
console.log("Is full?", cQueue.isFull()); // true
cQueue.print(); // 10 <- 20 <- 30 <- 40 <- 50
console.log("Dequeued:", cQueue.dequeue()); // 10
console.log("Peek:", cQueue.peek()); // 20
cQueue.enqueue(60); // Wraps around
cQueue.print(); // 20 <- 30 <- 40 <- 50 <- 60
```

---

## 3. Simple Array Implementation (Inefficient)

A queue can be implemented with a simple array using `push` to enqueue and `shift` to dequeue. While easy to write, this is **inefficient** because the `shift()` operation has a time complexity of O(N), as it requires re-indexing all subsequent elements.

### Implementation in JavaScript

```javascript
class SimpleQueue {
    constructor() {
        this.items = [];
    }

    // enqueue(item): O(1)
    enqueue(item) {
        this.items.push(item);
    }

    // dequeue(): O(N) - Inefficient!
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    // peek(): O(1)
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}
```

---

## 4. Dequeue (Double-Ended Queue)

A Dequeue, or Double-Ended Queue, is a versatile data structure that allows adding and removing elements from both the front and the rear. It combines the functionalities of both a stack and a queue.

### Core Operations
-   `addFront(item)`: Adds an item to the front of the dequeue.
-   `addRear(item)`: Adds an item to the rear of the dequeue.
-   `removeFront()`: Removes and returns the item from the front.
-   `removeRear()`: Removes and returns the item from the rear.

### Implementation in JavaScript (Using an Array)
This implementation uses a simple array. While easy to understand, `addFront` (`unshift`) and `removeFront` (`shift`) operations are O(N), making it less efficient for large datasets compared to a doubly-linked list implementation.

```javascript
class Dequeue {
    constructor() {
        this.items = [];
    }

    // Add to the front of the queue
    // Time Complexity: O(N)
    addFront(element) {
        this.items.unshift(element);
    }

    // Add to the rear of the queue
    // Time Complexity: O(1)
    addRear(element) {
        this.items.push(element);
    }

    // Remove from the front
    // Time Complexity: O(N)
    removeFront() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    // Remove from the rear
    // Time Complexity: O(1)
    removeRear() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    peekFront() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    peekRear() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

// --- Usage Example ---
console.log("\n--- Dequeue Example ---");
const dequeue = new Dequeue();
dequeue.addRear(10);
dequeue.addRear(20);
dequeue.addFront(5);
console.log("Items:", dequeue.items); // [5, 10, 20]
console.log("Removed from rear:", dequeue.removeRear()); // 20
console.log("Removed from front:", dequeue.removeFront()); // 5
console.log("Items:", dequeue.items); // [10]
```

---

## 5. Priority Queue

A Priority Queue is an abstract data type where each element has an associated "priority." Elements with higher priority are served before elements with lower priority. If two elements have the same priority, they are served based on their order in the queue.

### Implementation in JavaScript (Simple Priority Queue)
This implementation uses an array and keeps it sorted by priority upon insertion. While it clearly demonstrates the concept, the `enqueue` operation is O(N). A more efficient implementation would use a **Heap**, which provides O(log N) for both enqueue and dequeue operations.

```javascript
// Helper class for queue elements
class QElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.items = [];
    }

    // enqueue(element, priority): Add an element based on priority
    // Time Complexity: O(N) due to finding the correct insertion point
    enqueue(element, priority) {
        const qElement = new QElement(element, priority);
        let contain = false;

        // Iterate through the entire array to find the correct spot
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > qElement.priority) {
                // Once the right spot is found, insert the element
                this.items.splice(i, 0, qElement);
                contain = true;
                break;
            }
        }

        // If the element has the lowest priority, add it to the end
        if (!contain) {
            this.items.push(qElement);
        }
    }

    // dequeue(): Remove the element with the highest priority (lowest number)
    // Time Complexity: O(1)
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift(); // The highest priority is always at the front
    }

    front() {
        if (this.isEmpty()) {
            return "No elements in Queue";
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }
    
    printPQueue() {
        let str = "";
        for (let i = 0; i < this.items.length; i++)
            str += this.items[i].element + "(p:" + this.items[i].priority + ") ";
        return str;
    }
}

// --- Usage Example ---
console.log("\n--- Priority Queue Example ---");
const priorityQueue = new PriorityQueue();

// Lower number = higher priority
priorityQueue.enqueue("Task A", 2);
priorityQueue.enqueue("Task C", 3);
priorityQueue.enqueue("Task B", 1); // Highest priority
priorityQueue.enqueue("Task D", 2);

console.log("Queue state:", priorityQueue.printPQueue()); // Task B(p:1) Task A(p:2) Task D(p:2) Task C(p:3)

console.log("Dequeued:", priorityQueue.dequeue().element); // Task B
console.log("Front element:", priorityQueue.front().element); // Task A
```
