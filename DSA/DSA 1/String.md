# String
A string is a sequence of characters used to represent text. In JavaScript, strings are immutable, meaning once created, they cannot be modified. However, you can create new strings based on existing ones.

- A string is a sequence of characters enclosed in single ('), double ("), or backticks (`) quotes.
- Strings are widely used for storing and manipulating textual data in applications (e.g., user input, database queries, file names).

*Example:*

```js
let str1 = "Hello, World!";   // Double quotes
let str2 = 'JavaScript';      // Single quotes
let str3 = `Template Literal`; // Backticks (used for string interpolation)
```

## Memory Representation in JavaScript

- Strings in JavaScript are stored as UTF-16 encoded values.
- Since strings are immutable, modifying them creates a new string in memory instead of modifying the original

*Example (Immutability)*

```js
let str = "Hello";
str[0] = "h";  // This won’t change the string
console.log(str); // "Hello" (unchanged)
```

##  String Operations

### Creating & Modifying Strings
```js
let text = "Hello";
text = text + " World!"; // Creates a new string
console.log(text); // "Hello World!"
```
### Accessing Characters
You can access string characters using indexing or the .charAt() method.
```js
let name = "JavaScript";
console.log(name[0]);       // "J"
console.log(name.charAt(3)); // "a"
```

### Concatenation & Splitting
Concatenation:
```js
let first = "Hello";
let second = "World";
let result = first + " " + second;
console.log(result); // "Hello World"
```
Splitting:
```js
let sentence = "This is JavaScript";
let words = sentence.split(" ");
console.log(words); // ["This", "is", "JavaScript"]
```
## String Methods in JavaScript

|        **Method**        |                    **Description**                   |               **Example**               |
|:------------------------:|:----------------------------------------------------:|:---------------------------------------:|
| `.length`                | Returns the length of a string                       | `"Hello".length // 5`                   |
| `.charAt(index)`         | Returns the character at a given index               | `"Java".charAt(2) // "v"`               |
| `.slice(start, end)`     | Extracts part of the string (excluding end)          | `"JavaScript".slice(0, 4) // "Java"`    |
| `.substring(start, end)` | Similar to slice() but start can be greater than end | `"Hello".substring(1, 4) // "ell"`      |
| `.replace(old, new)`     | Replaces the first occurrence of a substring         | `"apple".replace("a", "A") // "Apple"`  |
| `.toUpperCase()`         | Converts the string to uppercase                     | `"hello".toUpperCase() // "HELLO"`      |
| `.toLowerCase()`         | Converts the string to lowercase                     | `"WORLD".toLowerCase() // "world"`      |
| `.trim()`                | Removes whitespace from both ends                    | `"  JS  ".trim() // "JS"`               |
| `.split(separator)`      | Splits the string into an array                      | `"a,b,c".split(",") // ["a", "b", "c"]` |


## 4. Time Complexity of String Operations
### Time Complexity
| **Operation**                     | **Time Complexity** |
|-----------------------------------|:-------------------:|
| Accessing character               |         O(1)        |
| Concatenation (small strings)     |         O(1)        |
| Concatenation (large strings)     |         O(N)        |
| Searching (indexOf(), includes()) |         O(N)        |
| Slicing (slice(), substring())    |         O(N)        |
| Splitting (split())               |         O(N)        |
| Replacing (replace())             |         O(N)        |

### Space Complexity

| **Operation**                     | **Space Complexity** |
|-----------------------------------|:--------------------:|
| Accessing character               |         O(1)         |
| Concatenation (+ Operands)        |         O(N)         |
| Searching (indexOf(), includes()) |         O(1)         |
| Slicing (slice(), substring())    |         O(N)         |
| Splitting (split())               |         O(N)         |
| Replacing (replace())             |         O(N)         |

## 5. Important Algorithms and Questions

### Easy Level
1. Reverse a String
2. Check if a String is Palindrome
3. Find Duplicate Characters in a String
4. Count Words in a Sentence
5. Remove Whitespace from a String

### Medium Level
1. Find First Non-Repeating Character
2. Check if Two Strings are Anagrams
3. Find the Most Frequent Character in a String
4. Longest Common Prefix Among Strings

### Hard Level
1. Longest Palindromic Substring
2. Find the Longest Repeating Substring
3. Word Break Problem (Dynamic Programming)
4. Implement Regular Expression Matching
