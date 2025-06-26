# Doubly Linked List

A Doubly Linked List (DLL) is a variation of a linked list where each node has three fields: a **data** field, a pointer to the **next** node, and a pointer to the **previous** node. This additional `prev` pointer allows for traversal in both forward and backward directions.

-   **Head:** The first node in the list. Its `prev` pointer is `null`.
-   **Tail:** The last node in the list. Its `next` pointer is `null`.

![Doubly Linked List Diagram](https://techvidvan.com/tutorials/wp-content/uploads/sites/2/2021/06/TechVidvan-Doubly-linked-list-normla-image.jpg)

## Advantages Over Singly Linked Lists

1.  **Bidirectional Traversal:** You can traverse the list from head to tail or from tail to head.
2.  **Easier Deletion:** Deleting a node is easier if you have a pointer to the node itself, as you don't need to find the previous node first. You can access it directly with the `prev` pointer.

## Disadvantages

1.  **Extra Memory:** Each node requires more memory to store the `prev` pointer.
2.  **More Complex Operations:** Insertions and deletions require updating more pointers (`prev` and `next`), which can make the implementation slightly more complex and prone to errors.

---

## Implementation in JavaScript

First, the `Node` class is updated to include a `prev` property.

```javascript
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
```

Now, we create the `DoublyLinkedList` class.

```javascript
class DoublyLinkedList {
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
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
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
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    // ### search(value)
    // Searches for a node with the given value.
    // Time Complexity: O(n)
    search(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    // ### delete(value)
    // Deletes the first node that matches the given value.
    // Time Complexity: O(n)
    delete(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                if (current === this.head) {
                    this.head = current.next;
                    if (this.head) this.head.prev = null;
                    else this.tail = null; // List became empty
                } else if (current === this.tail) {
                    this.tail = current.prev;
                    this.tail.next = null;
                } else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
                this.size--;
                return current;
            }
            current = current.next;
        }
        return null; // Not found
    }

    // ### deleteFromIndex(index)
    // Deletes a node at a specific index.
    // Time Complexity: O(n)
    deleteFromIndex(index) {
        if (index < 0 || index >= this.size) return null;
        if (index === 0) return this.delete(this.head.value);
        if (index === this.size - 1) return this.delete(this.tail.value);

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return this.delete(current.value);
    }

    // ### findMiddle()
    // Finds the middle node using the fast-slow pointer technique.
    // Time Complexity: O(n)
    findMiddle() {
        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    // ### deleteMiddle()
    // Deletes the middle node of the list.
    // Time Complexity: O(n)
    deleteMiddle() {
        if (this.isEmpty()) return;
        const middleNode = this.findMiddle();
        this.delete(middleNode.value);
    }

    // ### reverse()
    // Reverses the linked list in-place.
    // Time Complexity: O(n)
    reverse() {
        if (this.isEmpty() || this.size === 1) return;

        let current = this.head;
        let temp = null;
        while (current) {
            // Swap prev and next pointers
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            // Move to the next node (which is now in current.prev)
            current = current.prev;
        }

        // Swap head and tail
        temp = this.head;
        this.head = this.tail;
        this.tail = temp;
    }

    // ### removeDuplicates()
    // Removes duplicate values from the list.
    // Time Complexity: O(n), Space Complexity: O(n)
    removeDuplicates() {
        if (this.size < 2) return;
        const seen = new Set();
        let current = this.head;
        while (current) {
            if (seen.has(current.value)) {
                const nextNode = current.next;
                this.delete(current.value); // Use our delete method
                current = nextNode;
            } else {
                seen.add(current.value);
                current = current.next;
            }
        }
    }

    // Helper method to print the list
    print() {
        let values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log('HEAD -> ' + values.join(' <-> ') + ' <- TAIL');
    }
}

// --- Usage Example ---
const dll = new DoublyLinkedList();
dll.append(10);
dll.append(20);
dll.append(30);
dll.prepend(5);
dll.print(); // HEAD -> 5 <-> 10 <-> 20 <-> 30 <- TAIL

console.log('Middle node:', dll.findMiddle().value); // 20

dll.reverse();
dll.print(); // HEAD -> 30 <-> 20 <-> 10 <-> 5 <- TAIL

dll.delete(10);
dll.print(); // HEAD -> 30 <-> 20 <-> 5 <- TAIL

dll.append(20);
dll.append(40);
dll.print(); // HEAD -> 30 <-> 20 <-> 5 <-> 20 <-> 40 <- TAIL
dll.removeDuplicates();
dll.print(); // HEAD -> 30 <-> 20 <-> 5 <-> 40 <- TAIL
```