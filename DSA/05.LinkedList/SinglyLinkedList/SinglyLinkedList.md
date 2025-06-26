# Singly Linked List

A Linked List is a linear data structure where elements, called **nodes**, are not stored in contiguous memory locations. Instead, each node contains a **data** field and a reference (**pointer**) to the next node in the sequence.

-   **Head:** The entry point to the linked list. It's a pointer to the first node.
-   **Tail:** The last node in the list, which points to `null`.

![Linked List Diagram](https://techvidvan.com/tutorials/wp-content/uploads/sites/2/2021/06/TechVidvan-Linked-list-normal-image01.jpg)

## Advantages Over Arrays

1.  **Dynamic Size:** Linked lists can grow and shrink during runtime without needing to be reallocated.
2.  **Efficient Insertions/Deletions:** Adding or removing nodes is very efficient (O(1)) if the position of the node is known, as it only requires updating a few pointers, unlike arrays where elements must be shifted.

## Disadvantages

1.  **No Random Access:** You cannot access an element by its index in O(1) time. You must traverse the list from the `head`, which takes O(n) time.
2.  **Extra Memory:** Each node requires extra memory to store the `next` pointer.
3.  **Poor Cache Locality:** Nodes are scattered in memory, which can be less cache-friendly than the contiguous memory of an array, potentially leading to slower performance in practice.

---

## Implementation in JavaScript

First, we define a `Node` class, which is the building block of our list.

```javascript
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
```

Now, we create the `SinglyLinkedList` class itself, which will manage the nodes.

```javascript
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Method to check if the list is empty
    isEmpty() {
        return this.size === 0;
    }

    // ### append(value)
    // Adds a new node with the given value to the end of the list.
    // Time Complexity: O(1)
    // Space Complexity: O(1)
    append(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    // ### prepend(value)
    // Adds a new node with the given value to the beginning of the list.
    // Time Complexity: O(1)
    // Space Complexity: O(1)
    prepend(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    // ### search(value)
    // Searches for a node with the given value.
    // Returns the node if found, otherwise null.
    // Time Complexity: O(n)
    // Space Complexity: O(1)
    search(value) {
        if (this.isEmpty()) {
            return null;
        }
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
    // Space Complexity: O(1)
    delete(value) {
        if (this.isEmpty()) {
            return null;
        }

        // If the head needs to be removed
        if (this.head.value === value) {
            const deletedHead = this.head;
            this.head = this.head.next;
            this.size--;
            if (this.isEmpty()) {
                this.tail = null;
            }
            return deletedHead;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.value === value) {
                const deletedNode = current.next;
                current.next = current.next.next;
                // If we are deleting the tail, update the tail
                if (!current.next) {
                    this.tail = current;
                }
                this.size--;
                return deletedNode;
            }
            current = current.next;
        }
        return null; // Value not found
    }
    
    // ### deleteFromIndex(index)
    // Deletes a node at a specific index.
    // Time Complexity: O(n)
    // Space Complexity: O(1)
    deleteFromIndex(index) {
        if (index < 0 || index >= this.size) {
            return null; // Index out of bounds
        }
        let removedNode;
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
            if (this.size === 1) {
                this.tail = null;
            }
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = removedNode.next;
            // If the tail is removed, update the tail
            if (!prev.next) {
                this.tail = prev;
            }
        }
        this.size--;
        return removedNode;
    }

    // ### findMiddle()
    // Finds the middle node of the list using the fast-slow pointer technique.
    // Time Complexity: O(n)
    // Space Complexity: O(1)
    findMiddle() {
        if (this.isEmpty()) {
            return null;
        }
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
    // Space Complexity: O(1)
    deleteMiddle() {
        if (this.isEmpty() || !this.head.next) {
            this.head = null;
            this.tail = null;
            this.size = 0;
            return;
        }
        let slow = this.head;
        let fast = this.head;
        let prev = null;
        while (fast && fast.next) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        prev.next = slow.next;
        if (!prev.next) { // If the middle was the tail
            this.tail = prev;
        }
        this.size--;
    }

    // ### reverse()
    // Reverses the linked list in-place.
    // Time Complexity: O(n)
    // Space Complexity: O(1)
    reverse() {
        let prev = null;
        let current = this.head;
        this.tail = this.head; // The old head becomes the new tail
        while (current) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev; // The old last node becomes the new head
    }

    // ### removeDuplicates()
    // Removes duplicate values from the list. Assumes an unsorted list.
    // Time Complexity: O(n)
    // Space Complexity: O(n) due to the Set
    removeDuplicates() {
        if (this.size < 2) {
            return;
        }
        const seen = new Set();
        let current = this.head;
        let prev = null;
        seen.add(current.value);

        while (current.next) {
            prev = current;
            current = current.next;
            if (seen.has(current.value)) {
                prev.next = current.next;
                if (!prev.next) { // If the duplicate was the tail
                    this.tail = prev;
                }
                this.size--;
            } else {
                seen.add(current.value);
            }
        }
    }

    // Helper method to print the list values
    print() {
        if (this.isEmpty()) {
            console.log("List is empty");
            return;
        }
        let current = this.head;
        let result = 'HEAD -> ';
        while (current) {
            result += `${current.value} -> `;
            current = current.next;
        }
        console.log(result + 'NULL');
    }
}

// --- Usage Example ---
const list = new SinglyLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
list.print(); // HEAD -> 5 -> 10 -> 20 -> 30 -> NULL

console.log('Middle node:', list.findMiddle().value); // 20

list.reverse();
list.print(); // HEAD -> 30 -> 20 -> 10 -> 5 -> NULL

list.delete(10);
list.print(); // HEAD -> 30 -> 20 -> 5 -> NULL

list.append(20);
list.append(40);
list.print(); // HEAD -> 30 -> 20 -> 5 -> 20 -> 40 -> NULL
list.removeDuplicates();
list.print(); // HEAD -> 30 -> 20 -> 5 -> 40 -> NULL
```