# Stack Data Structure

A stack is a linear data structure that follows a particular order in which operations are performed. The order is **LIFO (Last In, First Out)**. This means the element that is inserted last will be removed first.

A real-life example is a pile of plates. The plate you put on top (the last one) is the first one you take off.

---

## Basic Operations

-   **`push()`**: Insert an element at the top of the stack. If the stack is full (in a fixed-size array implementation), it's an **Overflow** condition.
-   **`pop()`**: Remove the top element from the stack. If the stack is empty, it's an **Underflow** condition.
-   **`peek()`** or **`top()`**: Return the top element of the stack without removing it.
-   **`isEmpty()`**: Return `true` if the stack is empty, otherwise `false`.
-   **`size()`**: Return the number of elements in the stack.

### Complexity Analysis
All standard stack operations (`push`, `pop`, `peek`, `isEmpty`, `size`) have a time complexity of **O(1)**.

---

## Applications of Stack

-   **Function Calls**: Managing function calls and recursion (the "call stack").
-   **Expression Evaluation**: Converting infix expressions to postfix/prefix and evaluating them.
-   **Undo/Redo**: Implementing undo/redo functionality in text editors and other applications.
-   **Backtracking**: Used in algorithms that require backtracking, like solving mazes or in graph traversal (DFS).
-   **Browser History**: Managing the history of visited web pages.

---

## 1. Array Implementation

A stack can be implemented using a fixed-size array. This approach is simple but has the limitation of a static size.

### Implementation in JavaScript

```javascript
class StackArray {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = [];
        this.top = -1;
    }

    // push(item): Add an item to the top of the stack
    // Time Complexity: O(1)
    push(item) {
        if (this.top === this.capacity - 1) {
            console.log("Stack Overflow: Cannot add item, stack is full.");
            return;
        }
        this.top++;
        this.items[this.top] = item;
    }

    // pop(): Remove and return the top item
    // Time Complexity: O(1)
    pop() {
        if (this.isEmpty()) {
            console.log("Stack Underflow: Cannot pop, stack is empty.");
            return null;
        }
        const item = this.items[this.top];
        this.top--;
        // In a real scenario, you might want to also shrink the array
        this.items.length = this.top + 1; 
        return item;
    }

    // peek(): Return the top item without removing it
    // Time Complexity: O(1)
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty.";
        }
        return this.items[this.top];
    }

    // isEmpty(): Check if the stack is empty
    // Time Complexity: O(1)
    isEmpty() {
        return this.top === -1;
    }

    // size(): Get the number of items in the stack
    // Time Complexity: O(1)
    size() {
        return this.top + 1;
    }

    // Helper to print the stack
    print() {
        console.log(this.items.slice(0, this.top + 1).join(' <- '));
    }
}

// --- Usage Example ---
console.log("--- Array-based Stack ---");
const stackArr = new StackArray(5);
stackArr.push(10);
stackArr.push(20);
stackArr.push(30);
console.log("Current stack:");
stackArr.print(); // 10 <- 20 <- 30
console.log("Size:", stackArr.size()); // 3
console.log("Peek:", stackArr.peek()); // 30
console.log("Popped:", stackArr.pop()); // 30
console.log("Current stack:");
stackArr.print(); // 10 <- 20
console.log("Is empty?", stackArr.isEmpty()); // false
```

### Advantages & Disadvantages
-   **Pros**: Easy to implement, memory is saved as no pointers are involved.
-   **Cons**: Not dynamic. The size must be predefined and cannot be changed at runtime.

---

## 2. Linked List Implementation

Using a linked list to implement a stack overcomes the fixed-size limitation of arrays. The stack can grow and shrink as needed.

###  Implementation in JavaScript

```javascript
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class StackLinkedList {
    constructor() {
        this.top = null; // Corresponds to the 'head' of the list
        this.size = 0;
    }

    // push(item): Add an item to the top of the stack
    // Time Complexity: O(1)
    push(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.size++;
    }

    // pop(): Remove and return the top item
    // Time Complexity: O(1)
    pop() {
        if (this.isEmpty()) {
            console.log("Stack Underflow: Cannot pop, stack is empty.");
            return null;
        }
        const poppedNode = this.top;
        this.top = this.top.next;
        this.size--;
        return poppedNode.value;
    }

    // peek(): Return the top item without removing it
    // Time Complexity: O(1)
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty.";
        }
        return this.top.value;
    }

    // isEmpty(): Check if the stack is empty
    // Time Complexity: O(1)
    isEmpty() {
        return this.size === 0;
    }

    // size(): Get the number of items in the stack
    // Time Complexity: O(1)
    size() {
        return this.size;
    }

    // Helper to print the stack
    print() {
        let curr = this.top;
        let str = "";
        while (curr) {
            str += curr.value + " -> ";
            curr = curr.next;
        }
        console.log(str + "null");
    }
}

// --- Usage Example ---
console.log("\n--- Linked List-based Stack ---");
const stackLL = new StackLinkedList();
stackLL.push(100);
stackLL.push(200);
stackLL.push(300);
console.log("Current stack:");
stackLL.print(); // 300 -> 200 -> 100 -> null
console.log("Size:", stackLL.size()); // 3
console.log("Peek:", stackLL.peek()); // 300
console.log("Popped:", stackLL.pop()); // 300
console.log("Current stack:");
stackLL.print(); // 200 -> 100 -> null
console.log("Is empty?", stackLL.isEmpty()); // false
```

### Advantages & Disadvantages
-   **Pros**: Dynamic size. The stack can grow or shrink as needed at runtime.
-   **Cons**: Requires slightly more memory due to storing pointers.
