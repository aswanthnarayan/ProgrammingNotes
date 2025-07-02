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

---

## Key Concepts in Hashing

### Load Factor (α)

The **load factor** is a measure of how full the hash table is. It is crucial for understanding the efficiency of a hash table.

It is calculated as:
**α = n / k**

Where:
-   **n** is the number of elements stored in the hash table.
-   **k** is the number of slots (or buckets) in the hash table.

-   **For Separate Chaining:** The load factor can be 1 or even greater, as each bucket can store multiple elements in its chain. A higher load factor increases the average length of the chains, making lookups slower.
-   **For Open Addressing:** The load factor must be less than 1 (α < 1), as each slot can only hold one element. As the load factor approaches 1, performance degrades dramatically because probes become very long. It's common to resize the table when the load factor exceeds a certain threshold (e.g., 0.5 or 0.7).

### Clustering

Clustering is a phenomenon in **open addressing** where keys start to form groups or "clusters" in the hash table. This leads to longer probe sequences for new insertions and lookups, which degrades the hash table's performance from O(1) towards O(n).

There are two main types of clustering:

1.  **Primary Clustering:**
    -   This occurs with **linear probing**. When a collision happens, the algorithm checks the next consecutive slot. If that is also occupied, it checks the next, and so on.
    -   As more keys hash to the same general area, they create a long, continuous block of occupied slots. Any new key that hashes into this block will have to traverse a long way to find an empty slot, and it will also extend the cluster, making the problem worse.

2.  **Secondary Clustering:**
    -   This is a more subtle form of clustering that can occur with **quadratic probing**.
    -   While quadratic probing avoids the long runs of primary clustering, keys that hash to the same initial index will follow the exact same probe sequence. This creates its own "cluster" along a specific path, increasing search times for those keys.
    -   **Double hashing** is effective at mitigating secondary clustering because it uses a second hash function to generate a unique probe sequence for each key, even if they initially collide.