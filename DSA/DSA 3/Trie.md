# Trie
A Trie (pronounced as "try") is a tree-based data structure used for storing and searching words or strings efficiently. It is particularly useful for prefix-based searches, making it ideal for applications like autocomplete and dictionaries.

## Structure of a Trie Node
Each node in a Trie typically contains:

- **Children (object or array)** → References to the next characters in the word.
- **End of Word Flag (boolean)** → Marks whether the current node completes a word.

*Example of a Trie Node:*

```js
class TrieNode {
  constructor() {
    this.children = {};  // Object to store child nodes (characters)
    this.isEndOfWord = false;  // Marks the end of a word
  }
}
```

## Implementation

```js
class TrieNode {
  constructor() {
    this.children = {};  // Object to store child nodes (characters)
    this.isEndOfWord = false;  // Marks the end of a word
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;  // Mark the end of the word
  }

  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return node.isEndOfWord; // Ensure it's a complete word
  }
}

// Usage
let trie = new Trie();
trie.insert("app");
trie.insert("apple");

console.log(trie.search("app"));   // true
console.log(trie.search("apple")); // true
console.log(trie.search("appl"));  // false (it's only a prefix)
```

## Time Complexity
- Insertion: O(L), where L is the length of the word.
- Search: O(L), where L is the length of the word.

## Space Complexity
- Insertion: O(L), where L is the length of the word.
- Search: O(1)

## Auto-Complete Feature
The Trie can be used to implement an auto-complete feature, where you can suggest words based on a prefix.

```js
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  // Helper function to find the node where the prefix ends
  _findNode(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) return null;
      node = node.children[char];
    }
    return node;
  }

  // DFS to collect words from a given node
  _collectWords(node, prefix, words) {
    if (node.isEndOfWord) words.push(prefix);
    for (let char in node.children) {
      this._collectWords(node.children[char], prefix + char, words);
    }
  }

  // Main Autocomplete function
  autocomplete(prefix) {
    let node = this._findNode(prefix);
    if (!node) return []; // If prefix not found

    let words = [];
    this._collectWords(node, prefix, words);
    return words;
  }
}

// Usage
let trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("applet");
trie.insert("apricot");
trie.insert("banana");

console.log(trie.autocomplete("app")); // ["apple", "app", "applet"]
console.log(trie.autocomplete("ap")); // ["apple", "app", "applet", "apricot"]
console.log(trie.autocomplete("ban")); // ["banana"]
console.log(trie.autocomplete("car")); // []
```

## Longest Common Prefix

```js
longestCommonPrefix() {
  let node = this.root;
  let prefix = "";

  while (node && Object.keys(node.children).length === 1 && !node.isEndOfWord) {
    let char = Object.keys(node.children)[0]; // Get the only child
    prefix += char;
    node = node.children[char];
  }

  return prefix;
}

// Usage
console.log(trie.longestCommonPrefix()); // "ap"
```

