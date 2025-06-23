# HashTable Implementation (with Separate Chaining)

This document provides a practical implementation of a `HashTable` class in JavaScript. It uses the **Separate Chaining** method for collision resolution, where each array index (or "bucket") holds a linked list of all key-value pairs that hash to that index.

---

## Implementation in JavaScript

```javascript
class HashTable {
    constructor(size = 53) {
        // Initialize the hash table with an array of a prime size
        this.keyMap = new Array(size);
    }

    // _hash(key)
    // A private helper method to generate a hash code for a given key.
    _hash(key) {
        let total = 0;
        const WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96; // Map 'a' to 1, 'b' to 2, etc.
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    // ### set(key, value)
    // Inserts or updates a key-value pair in the hash table.
    // Time Complexity: O(1) on average, O(N) in the worst case (due to collisions).
    set(key, value) {
        let index = this._hash(key);
        // If the bucket at this index doesn't exist, create it (as an empty array).
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        // Check if the key already exists to update it.
        for (let i = 0; i < this.keyMap[index].length; i++) {
            if (this.keyMap[index][i][0] === key) {
                this.keyMap[index][i][1] = value; // Update existing value
                return;
            }
        }
        // Otherwise, push the new key-value pair into the bucket.
        this.keyMap[index].push([key, value]);
    }

    // ### get(key)
    // Retrieves the value associated with a given key.
    // Time Complexity: O(1) on average, O(N) in the worst case.
    get(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            // Search through the bucket (the nested array)
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1]; // Return the found value
                }
            }
        }
        return undefined; // Key not found
    }

    // ### remove(key)
    // Deletes a key-value pair from the hash table.
    // Time Complexity: O(1) on average, O(N) in the worst case.
    remove(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    let removed = this.keyMap[index].splice(i, 1);
                    return removed[0];
                }
            }
        }
        return undefined;
    }

    // ### keys()
    // Returns an array of all keys in the hash table.
    keys() {
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
    }

    // ### values()
    // Returns an array of all values in the hash table.
    values() {
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }

    // Helper to display the structure
    display() {
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                console.log(`${i}: `, this.keyMap[i]);
            }
        }
    }
}

// --- Usage Example ---
const ht = new HashTable(17);
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD"); // Collision with 'salmon'

console.log("--- Hash Table Structure ---");
ht.display();

console.log("\n--- Get Values ---");
console.log('Get plum:', ht.get("plum")); // #DDA0DD
console.log('Get salmon:', ht.get("salmon")); // #FA8072
console.log('Get non-existent key:', ht.get("grape")); // undefined

console.log("\n--- Remove a Key ---");
ht.remove("salmon");
ht.display();

console.log("\n--- Keys and Values ---");
console.log('Keys:', ht.keys());
console.log('Values:', ht.values());

console.log("\n\n--- Linear Probing Example ---");
class HashTableLinearProbing {
    constructor(size = 13) {
        this.keyMap = new Array(size).fill(null);
        this.size = 0;
        this.capacity = size;
    }

    _hash(key) {
        let total = 0;
        const WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.capacity;
        }
        return total;
    }

    set(key, value) {
        if (this.size >= this.capacity / 2) {
            console.log("Load factor threshold reached. Resizing needed.");
            return;
        }

        let index = this._hash(key);

        while (this.keyMap[index] !== null && this.keyMap[index][0] !== key) {
            index = (index + 1) % this.capacity;
        }

        if (this.keyMap[index] === null) {
            this.size++;
        }
        
        this.keyMap[index] = [key, value];
    }

    get(key) {
        let index = this._hash(key);

        while (this.keyMap[index] !== null) {
            if (this.keyMap[index][0] === key) {
                return this.keyMap[index][1];
            }
            index = (index + 1) % this.capacity;
        }

        return undefined;
    }

    display() {
        for (let i = 0; i < this.capacity; i++) {
            if (this.keyMap[i]) {
                console.log(`${i}: [${this.keyMap[i][0]}, ${this.keyMap[i][1]}]`);
            } else {
                console.log(`${i}: null`);
            }
        }
    }
}

const lpht = new HashTableLinearProbing(7);
lpht.set("apple", 1);
lpht.set("banana", 2); // Assume hash("banana") collides with "apple"
lpht.set("cherry", 3); // Assume hash("cherry") also collides
lpht.set("date", 4);

lpht.display();
console.log("\nGet 'banana':", lpht.get("banana")); // 2
console.log("Get 'grape':", lpht.get("grape")); // undefined

console.log("\n\n--- Double Hashing Example ---");
class HashTableDoubleHashing {
    constructor(size = 13) {
        this.keyMap = new Array(size).fill(null);
        this.size = 0;
        this.capacity = size;
        this.PRIME = this._getPrime(Math.floor(size * 0.8)); 
    }

    _getPrime(n) {
        for (let i = n; i > 1; i--) {
            let isPrime = true;
            for (let j = 2; j * j <= i; j++) {
                if (i % j === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) return i;
        }
        return 3; 
    }

    _hash1(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total = (total + key.charCodeAt(i)) % this.capacity;
        }
        return total;
    }

    _hash2(key) {
        const hash = this._hash1(key); 
        return this.PRIME - (hash % this.PRIME);
    }

    set(key, value) {
        if (this.size >= this.capacity / 2) {
            console.log("Load factor threshold reached. Resizing needed.");
            return;
        }

        let index = this._hash1(key);
        let step = this._hash2(key);
        
        while (this.keyMap[index] !== null && this.keyMap[index][0] !== key) {
            index = (index + step) % this.capacity;
        }

        if (this.keyMap[index] === null) {
            this.size++;
        }
        
        this.keyMap[index] = [key, value];
    }

    get(key) {
        let index = this._hash1(key);
        let step = this._hash2(key);

        while (this.keyMap[index] !== null) {
            if (this.keyMap[index][0] === key) {
                return this.keyMap[index][1];
            }
            index = (index + step) % this.capacity;
        }

        return undefined;
    }

    display() {
        for (let i = 0; i < this.capacity; i++) {
            if (this.keyMap[i]) {
                console.log(`${i}: [${this.keyMap[i][0]}, ${this.keyMap[i][1]}]`);
            } else {
                console.log(`${i}: null`);
            }
        }
    }
}

const dhht = new HashTableDoubleHashing(13);
dhht.set("spain", 1);
dhht.set("france", 2);
dhht.set("germany", 3); 
dhht.set("italy", 4);   

dhht.display();
console.log("\nGet 'germany':", dhht.get("germany")); // 3
console.log("Get 'italy':", dhht.get("italy"));     // 4
