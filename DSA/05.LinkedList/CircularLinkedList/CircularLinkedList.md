# Circular Linked List

A Circular Linked List is a variation of a linked list in which the last node points back to the first node, forming a circle. There is no `null` at the end of the list. This structure is useful for applications where you need to cycle through the elements continuously.

-   **Structure:** Can be either singly or doubly linked, but the defining feature is that the `tail` node's `next` pointer points to the `head` node.

![Circular Linked List Diagram](https://techvidvan.com/tutorials/wp-content/uploads/sites/2/2021/07/Linked-Lists-in-C-normal-image03.jpg)

## Use Cases & Advantages

1.  **Round-Robin Scheduling:** Useful in algorithms for CPU scheduling, where processes are given time slices in a loop.
2.  **Streaming/Playlists:** Applications like music players can use it to loop a playlist.
3.  **Full Traversal from Any Node:** You can start at any node and traverse the entire list.

## Disadvantages

1.  **Risk of Infinite Loops:** If traversal logic is not handled carefully, you can easily get stuck in an infinite loop. The termination condition must be managed precisely (e.g., stopping when you reach the head again).
2.  **Complexity:** Operations can be slightly more complex because there's no `null` to signify the end of the list. Special care must be taken when inserting or deleting the head or tail.

---

## Implementation in JavaScript

We'll implement a **Singly Circular Linked List**. The `Node` class is the same as for a standard Singly Linked List.

```javascript
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
```

Now, we create the `CircularLinkedList` class.

```javascript
class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    // ### append(value)
    // Adds a node to the end of the list.
    // Time Complexity: O(1)
    append(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            this.tail.next = this.head; // Points back to itself
        } else {
            newNode.next = this.head;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    // ### prepend(value)
    // Adds a node to the beginning of the list.
    // Time Complexity: O(1)
    prepend(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            this.tail.next = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.tail.next = this.head; // Update tail's next to new head
        }
        this.size++;
    }

    // ### delete(value)
    // Deletes the first node that matches the given value.
    // Time Complexity: O(n)
    delete(value) {
        if (this.isEmpty()) return null;

        let current = this.head;
        let prev = this.tail;
        let deletedNode = null;

        for (let i = 0; i < this.size; i++) {
            if (current.value === value) {
                deletedNode = current;
                if (this.size === 1) {
                    this.head = null;
                    this.tail = null;
                } else if (current === this.head) {
                    this.head = current.next;
                    this.tail.next = this.head;
                } else if (current === this.tail) {
                    this.tail = prev;
                    this.tail.next = this.head;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return deletedNode;
            }
            prev = current;
            current = current.next;
        }
        return null; // Not found
    }

    // ### search(value)
    // Searches for a node with the given value.
    // Time Complexity: O(n)
    search(value) {
        if (this.isEmpty()) return null;
        let current = this.head;
        do {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        } while (current !== this.head);
        return null;
    }

    // Helper method to print the list values
    print() {
        if (this.isEmpty()) {
            console.log("List is empty");
            return;
        }
        let current = this.head;
        let result = 'HEAD -> ';
        do {
            result += `${current.value} -> `;
            current = current.next;
        } while (current !== this.head);
        console.log(result + ' (to HEAD)');
    }
}

// --- Usage Example ---
const cll = new CircularLinkedList();
cll.append(10);
cll.append(20);
cll.append(30);
cll.prepend(5);
cll.print(); // HEAD -> 5 -> 10 -> 20 -> 30 ->  (to HEAD)

console.log('Search for 20:', cll.search(20).value); // 20

cll.delete(10);
cll.print(); // HEAD -> 5 -> 20 -> 30 ->  (to HEAD)

cll.delete(5); // Deleting head
cll.print(); // HEAD -> 20 -> 30 ->  (to HEAD)

cll.delete(30); // Deleting tail
cll.print(); // HEAD -> 20 ->  (to HEAD)
```