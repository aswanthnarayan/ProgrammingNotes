# Trie Data Structure (Prefix Tree)

A Trie, also known as a **digital tree** or **prefix tree**, is a tree-like data structure that specializes in storing and retrieving keys in a dataset of strings. Unlike a binary search tree, no node in the trie stores the key associated with that node; instead, its position in the tree defines the key with which it is associated.

All the descendants of a node have a common prefix of the string associated with that node, and the root is associated with the empty string. This structure makes Tries extremely efficient for prefix-based searches.

---

## Structure of a Trie Node

A Trie node typically contains two main components:

1.  **Children**: A map or an array that stores pointers to its child nodes. For the English alphabet, this can be an array of size 26 or a hash map where keys are characters and values are pointers to other nodes.
2.  **isEndOfWord Flag**: A boolean that indicates whether the path from the root to this node represents a complete word.

![Trie Structure](https://raw.githubusercontent.com/aswanthnarayan/ProgrammingNotes/main/Daigrams/Trie.png)

---

## Core Operations

### 1. Insertion
To insert a word, we traverse the Trie from the root, creating new nodes for characters that do not yet exist in the path. When we reach the end of the word, we mark the final node's `isEndOfWord` flag as `true`.

### 2. Search
To search for a complete word, we traverse the Trie from the root according to the characters in the word. If we can traverse the entire word and the final node's `isEndOfWord` flag is `true`, the word exists.

### 3. Starts With (Prefix Search)
To check if any word starts with a given prefix, we traverse the Trie according to the characters in the prefix. If we can successfully traverse the entire prefix, it means at least one word in the Trie has this prefix. We don't need to check the `isEndOfWord` flag.

---

## Implementation in JavaScript

Here is a class-based implementation of a Trie.

```javascript
// TrieNode class represents each node in the Trie
class TrieNode {
    constructor() {
        this.children = {}; // Using a map for children is flexible
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * Inserts a word into the trie.
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let currentNode = this.root;
        for (const char of word) {
            if (!currentNode.children[char]) {
                currentNode.children[char] = new TrieNode();
            }
            currentNode = currentNode.children[char];
        }
        currentNode.isEndOfWord = true;
    }

    /**
     * Returns if the word is in the trie.
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let currentNode = this.root;
        for (const char of word) {
            if (!currentNode.children[char]) {
                return false; // Path does not exist
            }
            currentNode = currentNode.children[char];
        }
        return currentNode.isEndOfWord; // Must be a complete word
    }

    /**
     * Returns if there is any word in the trie that starts with the given prefix.
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let currentNode = this.root;
        for (const char of prefix) {
            if (!currentNode.children[char]) {
                return false; // Prefix does not exist
            }
            currentNode = currentNode.children[char];
        }
        return true; // Prefix exists
    }
}

// --- Usage Example ---
const trie = new Trie();

trie.insert("apple");
console.log("Search 'apple':", trie.search("apple"));   // true
console.log("Search 'app':", trie.search("app"));       // false
console.log("Starts with 'app':", trie.startsWith("app")); // true

trie.insert("app");
console.log("Search 'app' after insertion:", trie.search("app")); // true
```

---

## Complexity Analysis

Let `L` be the length of the word/prefix and `N` be the number of words in the Trie.

| Operation      | Time Complexity | Space Complexity |
| :------------- | :-------------: | :--------------: |
| **Insert**     |     O(L)        |      O(L)        |
| **Search**     |     O(L)        |      O(1)        |
| **StartsWith** |     O(L)        |      O(1)        |

-   **Time Complexity**: The time taken for each operation depends only on the length of the word or prefix being processed, not on the total number of words in the Trie.
-   **Space Complexity**: The space required is proportional to the sum of the lengths of all inserted words.

---

## Applications of Tries

-   **Autocomplete / Type-ahead**: Suggesting words as a user types (e.g., in search engines).
-   **Spell Checkers**: Finding valid words and suggesting corrections.
-   **IP Routing**: Storing and searching routing tables for the longest prefix match.
-   **Dictionary Implementations**: Storing a dictionary of words for efficient lookup.

