# Introduction to Hashing

Hashing is a fundamental technique used to store and retrieve data efficiently. It maps keys of any size to a fixed-size table, called a **hash table**, by using a special function called a **hash function**. The goal is to achieve average-case time complexity of **O(1)** for insertions, deletions, and searches.

This makes it significantly faster than arrays or linked lists (O(n)) and balanced binary search trees (O(log n)) for these operations.

## Core Components

1.  **Hash Function:** A function that takes a key (e.g., a string or a large number) and converts it into a small, practical integer value, known as a **hash code**. This hash code is then mapped to an index in the hash table.
2.  **Hash Table:** An array-like data structure that stores the data. The index for each element is calculated from its key using the hash function.

### Properties of a Good Hash Function
-   **Efficiently Computable:** It should be fast to compute.
-   **Uniform Distribution:** It should distribute keys as evenly as possible across the hash table to minimize collisions.
-   **Deterministic:** For the same input key, it must always produce the same hash code.

---

## Collision Handling

A **collision** occurs when two different keys produce the same hash code, meaning they map to the same index in the hash table. Since this is almost inevitable, we must have strategies to handle it.

There are two primary methods for collision resolution:

### 1. Separate Chaining (Open Hashing)

The idea is to make each cell of the hash table point to a data structure (usually a **linked list**) that stores all the keys that hashed to that index. 

-   **Insertion:** Compute the index. If the bucket is empty, place the new key-value pair there. If not, add it to the linked list.
-   **Search:** Compute the index. Traverse the linked list at that bucket to find the key.

![Separate Chaining](https://media.geeksforgeeks.org/wp-content/uploads/20200722124355/Chaining-2.png)

**Pros:**
-   Simple to implement.
-   The hash table never fills up; you can always add more elements.
-   Less sensitive to the hash function or load factor.

**Cons:**
-   Can have poor cache performance due to scattered linked list nodes.
-   Requires extra memory for the pointers in the linked lists.

### 2. Open Addressing (Closed Hashing)

All elements are stored directly within the hash table itself. When a collision occurs, we **probe** for the next available slot in the table according to a fixed sequence.

-   **Insertion:** If the computed index is occupied, probe for the next empty slot and place the item there.
-   **Search:** Probe along the sequence until the item is found or an empty slot is encountered (which means the item is not in the table).

There are several probing strategies:

-   **a. Linear Probing:** If `hash(key)` is occupied, try `hash(key) + 1`, then `hash(key) + 2`, and so on. This is simple but suffers from **primary clustering**, where long runs of occupied slots build up, degrading performance.

-   **b. Quadratic Probing:** If `hash(key)` is occupied, try `hash(key) + 1^2`, then `hash(key) + 2^2`, `hash(key) + 3^2`, etc. This helps alleviate primary clustering.

-   **c. Double Hashing:** Use a second hash function to determine the step size for the probing sequence. This is the most effective method at avoiding clustering but requires more computation.

**Pros:**
-   Better cache performance since all data is stored contiguously in the array.
-   No extra memory required for pointers.

**Cons:**
-   More complex to implement, especially deletion (deleted slots must be marked specially).
-   Performance degrades significantly as the table fills up (i.e., as the load factor gets high).
-   The table size must be greater than the number of elements.