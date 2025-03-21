# Linked List
A Linked List is a linear data structure where elements are stored in nodes, and each node points to the next node. Unlike arrays, linked lists do not use contiguous memory, allowing efficient insertions and deletions.

## Why Use Linked Lists?
- **Efficient Insertions & Deletions:** Unlike arrays, linked lists don’t require shifting elements.
- **Dynamic Memory Allocation:** Grows and shrinks dynamically without wasting memory.
- Used in Queues, Graphs, and Hash Tables.

## Types of Linked Lists
1. Singly Linked List
2. Doubly Linked List
3. Circular Linked List

# Singly Linked List

A singly linked list is a linear data structure where each node contains a value and a reference (pointer) to the next node.

## Node Structure
A node is the building block of a linked list.

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
```
## Linked List Operations

## 1.Creating a Linked List
To create a linked list, you need to create a Node class and a LinkedList class.

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}
```

### 2.Insert at Head (prepend)
To insert a new node at the head of the linked list, you need to update the head reference to point to the new node. The Time Complexity is O(1)

```js
insertAtHead(value) {
  let newNode = new Node(value);
  newNode.next = this.head;
  this.head = newNode;
}
```

### 3.Insert at Tail (append)
To insert a new node at the tail of the linked list, you need to find the last node and update its next reference to point to the new node. The Time Complexity is O(n)

```js
insertAtTail(value) {
  let newNode = new Node(value);
  if (!this.head) {
    this.head = newNode;
    return;
  }
  let temp = this.head;
  while (temp.next) {
    temp = temp.next;
  }
  temp.next = newNode;
}
```
### 4.Insert at a Specific Position
To insert a new node at a specific position in the linked list, you need to find the node at the previous position and update its next reference to point to the new node. The Time Complexity is O(n)

```js
insertAfter(prevNode, value) {
  if (!prevNode) return;
  let newNode = new Node(value);
  newNode.next = prevNode.next;
  prevNode.next = newNode;
}
```

### 5.Delete from Head
To delete a node from the head of the linked list, you need to update the head reference to point to the next node. The Time Complexity is O(1)

```js
deleteFromHead() {
  if (!this.head) return;
  this.head = this.head.next;
}
```

### 6.Delete from Tail
To delete a node from the tail of the linked list, you need to find the second last node and update its next reference to null. The Time Complexity is O(n)

```js
deleteFromTail() {
  if (!this.head) return;
  if (!this.head.next) {
    this.head = null;
    return;
  }
  let temp = this.head;
  while (temp.next.next) {
    temp = temp.next;
  }
  temp.next = null;
}
```

### 7.Delete from a Specific Value
To delete a node from a specific value in the linked list, you need to find the node and update its next reference to point to the next node. The Time Complexity is O(n)

```js
deleteNode(value) {
  if (!this.head) return;
  if (this.head.value === value) {
    this.head = this.head.next;
    return;
  }
  let temp = this.head;
  while (temp.next && temp.next.value !== value) {
    temp = temp.next;
  }
  if (temp.next) {
    temp.next = temp.next.next;
  }
}
```
### Search in Linked List
To search for a value in the linked list, you need to traverse the list and check each node value. The Time Complexity is O(n)

```js
search(value) {
  let temp = this.head;
  while (temp) {
    if (temp.value === value) return true;
    temp = temp.next;
  }
  return false;
}
```
### Reverse a Linked List
To reverse a linked list, you need to swap the next and prev references of each node. The Time Complexity is O(n)

```js
reverse() {
  let prev = null;
  let curr = this.head;
  let next = null;
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  this.head = prev;
}
``` 

# Doubly Linked List
A doubly linked list is a linear data structure where each node contains a value and two references (pointers): one to the `next` node and one to the `previous` node.

- next → Points to the next node.
- prev → Points to the previous node.

## Node Structure

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
```
## Doubly Linked List Operations

## 1.Creating a Doubly Linked List
To create a doubly linked list, you need to initialize the head and tail references to null.

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}
```

### 2.Insert at Head (prepend)
To insert a new node at the head of the linked list, you need to update the head reference to point to the new node and update the prev reference of the new node to null. The Time Complexity is O(1)

```js
insertAtHead(value) {
  let newNode = new Node(value);
  if (!this.head) {
    this.head = newNode;
    return;
  }
  newNode.next = this.head;
  this.head.prev = newNode;
  this.head = newNode;
}
```

### 3.Insert at Tail (append)
To insert a new node at the tail of the linked list, you need to find the last node and update its next reference to point to the new node. The Time Complexity is O(n)

```js
insertAtTail(value) {
  let newNode = new Node(value);
  if (!this.head) {
    this.head = newNode;
    return;
  }
  let temp = this.head;
  while (temp.next) {
    temp = temp.next;
  }
  temp.next = newNode;
  newNode.prev = temp;
}
```

### 4.Insert at a Specific Position
To insert a new node at a specific position in the linked list, you need to find the node at the previous position and update its next reference to point to the new node. The Time Complexity is O(n)

```js
insertAfter(prevNode, value) {
  if (!prevNode) return;
  let newNode = new Node(value);
  newNode.next = prevNode.next;
  if (prevNode.next) prevNode.next.prev = newNode;
  prevNode.next = newNode;
  newNode.prev = prevNode;
}
```

### 5.Delete from Head
To delete a node from the head of the linked list, you need to update the head reference to point to the next node and update the prev reference of the next node to null. The Time Complexity is O(1)

```js
deleteFromHead() {
  if (!this.head) return;
  this.head = this.head.next;
  if (this.head) this.head.prev = null;
}
```

### 6.Delete from Tail
To delete a node from the tail of the linked list, you need to find the last node and update its prev reference to point to null. The Time Complexity is O(n)

```js
deleteFromTail() {
  if (!this.head) return;
  if (!this.head.next) {
    this.head = null;
    return;
  }
  let temp = this.head;
  while (temp.next) {
    temp = temp.next;
  }
  temp.prev.next = null;
}
```

### 7.Delete from a Specific Value
To delete a node from a specific value in the linked list, you need to find the node and update its prev and next references. The Time Complexity is O(n)

```js
deleteNode(value) {
  if (!this.head) return;
  let temp = this.head;
  while (temp && temp.value !== value) {
    temp = temp.next;
  }
  if (!temp) return; // Node not found
  if (temp.prev) temp.prev.next = temp.next;
  if (temp.next) temp.next.prev = temp.prev;
  if (temp === this.head) this.head = temp.next;
}
```
### Search in Doubly Linked List
To search for a specific value in the linked list, you need to traverse the list and check each node’s value. The Time Complexity is O(n)

```js
search(value) {
  let temp = this.head;
  while (temp) {
    if (temp.value === value) return true;
    temp = temp.next;
  }
  return false;
}
```

### Reverse a Doubly Linked List
To reverse a linked list, you need to swap the next and prev references of each node. The Time Complexity is O(n)

```js
reverse() {
  let temp = null;
  let current = this.head;
  while (current) {
    temp = current.prev;
    current.prev = current.next;
    current.next = temp;
    current = current.prev;
  }
  if (temp) this.head = temp.prev;
}
```   

## 4. Time Complexity Analysis

| **Operation**     | **Singly Linked List** | **Doubly Linked List** | **Circular Linked List** |
|-------------------|:----------------------:|:----------------------:|:------------------------:|
| **Insert (Head)** | O(1)                   | O(1)                   | O(1)                     |
| **Insert (Tail)** | O(N)                   | O(1)                   | O(N)                     |
| **Delete (Head)** | O(1)                   | O(1)                   | O(1)                     |
| **Delete (Tail)** | O(N)                   | O(1)                   | O(N)                     |
| **Search**        | O(N)                   | O(N)                   | O(N)                     |
| **Reverse**       | O(N)                   | O(N)                   | O(N)                     |

## 5. Important Algorithms
- Detect Cycle in a Linked List
- Merge Two Sorted Linked Lists
- Find the Middle Node
- Remove Nth Node from End

---