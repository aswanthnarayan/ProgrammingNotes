# Hash Table
A Hash Table (or Hash Map) is a data structure that stores key-value pairs. It uses a hash function to compute an index (hash) where the value is stored.

## How Hashing Works
1. Key is given as input → e.g., "name".
2. A Hash Function is applied → Converts the key into an index.
3. Data is stored at the computed index.
4. Retrieval is done using the same hash function, ensuring fast access.

**Time Complexity:**

- Insertion, Deletion, and Search → O(1) (in the average case).
- Worst-case → O(n) (if many collisions occur).

## Hash Table Operations

### Insert (Put)
- Compute the hash index of the key.
- Store the key-value pair at that index.
- If a collision occurs, apply a collision handling technique.

### Search (Get)
- Compute the hash index using the hash function.
- Check if the key exists at that index.
- If found, return the value; otherwise, return null.

### Delete (Remove)
- Compute the hash index of the key.
- Remove the key-value pair from that index.

**Operations Time Complexity:**

- Insert, Search, Delete → O(1) (Best/Average case).
- O(n) (Worst case, due to collisions).

## Hash Table Implementation 
```js
class HashTable {
  constructor(size = 10) {
    this.table = new Array(size);
    this.size = size;
  }

  // Hash Function
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.size;
    }
    return hash;
  }

  // Insert (Put)
  set(key, value) {
    let index = this._hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push([key, value]);
  }

  // Search (Get)
  get(key) {
    let index = this._hash(key);
    if (this.table[index]) {
      for (let pair of this.table[index]) {
        if (pair[0] === key) {
          return pair[1];
        }
      }
    }
    return undefined;
  }

  // Delete (Remove)
  remove(key) {
    let index = this._hash(key);
    if (this.table[index]) {
      this.table[index] = this.table[index].filter(pair => pair[0] !== key);
    }
  }

  // Display Hash Table
  display() {
    for (let i = 0; i < this.size; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

// Example Usage
const myHashTable = new HashTable();
myHashTable.set("name", "Alice");
myHashTable.set("age", 25);
myHashTable.set("city", "New York");

console.log(myHashTable.get("name")); // Alice
myHashTable.remove("age");
myHashTable.display();
```
## 3. Hash Table Implementation in JavaScript

## 4. Applications
- Caching
- Data Indexing

---
