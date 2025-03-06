# JAVASCRIPT

JavaScript is a Dynamic,Single-threaded ,Interpreted (code executed line by line by an interpreters) Programming language with First class Functions ,It is most well known scripting language for Web pages ,also many non-browser environment also use it like Node.js .

**JavaScript is a dynamically typed Language** ie, variable types are determined at runtime so we don't want to specify data type

**First class Functions :** Functions that are treated like any other variables in a programming language called first class functions.

## JavaScript Engines

JavaScript engines are the programs or interpreters that execute JavaScript code.
examples:

1. **V8** (Chrome,Node.js,Opera)
2. **SpiderMonkey** (Firefox)
3. **JavaScriptCore** (Safari,Webkit)
4. **Chakra** (Microsoft Edge)

# FOUNDATIONS

## VARIABLES

Variables are containers for storing data values.You can declare a variable with **var**, **let** or **const** keywords.

- Variable names include letters,digits, underscores, and dollar signs
- Variable names can't start with letters.
- JS is case-sensitive language , so `myVar` and `myvar` are different variable.
- Always prefer `let`,and `const` over `var` for avoiding scoping and hoisting issues

```js
let myVariable;
```

## SCOPE

In JavaScript Scope refers to the context in which variables and functions are accessible.

JS has two main type of scope , `Global Scope` and `Local Scope`

### Global Scope

Variable declared outside any function or block are in the global scope.They can be accessed from anywhere in the code.

```js
var globalVariable = "Iam Global Variable";

function accessGlobal() {
  console.log(globalVariable); // Accessible
}
accessGlobal();
console.log(globalVariable); // Accessible
```

### Local Scope

Local scope refers to variables that are accessible only with in specific part of the code , such as function or block;

**Function Scope**

Variables declared inside a function using `var`, `let`, or `const` are in function scope. They are not accessible outside the function.

```js
function myFunction() {
  var functionScoped = "I'm inside a function";
  console.log(functionScoped); // Accessible
}

myFunction();
console.log(functionScoped); // Not accessible, ReferenceError
```

**Block Scope**

Variables declared inside a block (e.g., inside `{}`) using `let` or `const` are block-scoped. They are accessible only within that block.

```js
if (true) {
  let blockScoped = "I'm inside a block";
  console.log(blockScoped); // Accessible
}

console.log(blockScoped); // Not accessible, ReferenceError
```

### Lexical Scope

Lexical scope refers to the ability of a function to access variables from its outer (enclosing) functions. The scope of a variable is determined by its position in the code, not by where it is used..

```js
function outerFunction() {
  var outerVariable = "I'm outside!";

  function innerFunction() {
    console.log(outerVariable); // Accessible due to lexical scope
  }

  innerFunction();
}

outerFunction();
```

**LEXICAL ENVIRONMENT**

A lexical environment in JavaScript refers to the structure that holds variables, function declarations, and the scope in which they exist..

### Scope Chain

When a variable is referenced, JavaScript looks up the variable name in the current scope. If it's not found, it moves to the outer scope, and so on, until it reaches the global scope. This chain of scopes is called the scope chain.

### Shadowing

When a variable in a local scope has the same name as a variable in an outer scope, the local variable "shadows" the outer one. The inner variable takes precedence within its scope.

```js
var shadowVar = "Global";

function shadowTest() {
  var shadowVar = "Local";
  console.log(shadowVar); // Logs "Local"
}

shadowTest();
console.log(shadowVar); // Logs "Global"
```
### Illegal Shadowing

If you create a variable in a global scope with the let keyword and another variable with the var keyword in a block scope but the exact same name, it will throw an error. This is called illegal shadowing

```js
let name = "Prabir";

if (true) {
  var name = "kumar";
  console.log(name);
}

console.log(name);

//uncaught syntax error
//it will give error
```


## HOISTING IN JS

In JavaScript, hoisting is a behavior in which variable and function declarations are moved, or "hoisted," to the top of their containing scope (either global or function scope) during the compile phase, before the code is executed. This means that you can use functions and variables before you declare them in the code

```js
console.log(myVariable); // Output: undefined

var myVariable = "Hello, world!";
```

### VARIABLE HOISTING

When variables are hoisted, only the declarations are hoisted to the top, not the initializations. If you try to access a variable before it is initialized, it will be `undefined`.

**Example with var:**

```js
console.log(hoistedVar); // Output: undefined
var hoistedVar = "I am hoisted";
console.log(hoistedVar); // Output: "I am hoisted"
```

Internally, this code is interpreted as:

```js
var hoistedVar;
console.log(hoistedVar); // Output: undefined
hoistedVar = "I am hoisted";
console.log(hoistedVar); // Output: "I am hoisted"
```

**Example with let and const:**

Variables declared with `let` and `const` are also hoisted, but they are not initialized. Accessing them before the declaration results in a `ReferenceError`.

```js
console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
let hoistedLet = "I am hoisted";

console.log(hoistedConst); // ReferenceError: Cannot access 'hoistedConst' before initialization
const hoistedConst = "I am hoisted";
```


### FUNCTION HOISTING 

**Learn functions in JavaScript first for a better understanding, then come back.**

Function declaration are fully hoisted meaning name and it's body are moved to the top of their containing scope. This allow you to call function before its declaration

**Example with Function Declarations:**

```js
hoistedFunction(); // Output: "I am hoisted"

function hoistedFunction() {
  console.log("I am hoisted");
}
```

Internally, this code is interpreted as:

```js
function hoistedFunction() {
  console.log("I am hoisted");
}

hoistedFunction(); // Output: "I am hoisted"
```

**Example with Function Expressions:**

Function expressions, including those created with `var`, `let`, or `const`, are not hoisted in the same way. Only the variable declaration is hoisted, not the function assignment.

```js
hoistedExpression(); // TypeError: hoistedExpression is not a function
var hoistedExpression = function () {
  console.log("I am not hoisted");
};
```

Internally, this code is interpreted as:

```js
var hoistedExpression;
hoistedExpression(); // TypeError: hoistedExpression is not a function
hoistedExpression = function () {
  console.log("I am not hoisted");
};
```

## LET VAR CONST

In JS `let` , `var` , `const` used to declare variables. but they have different behaviors and scopes

### VAR

- var is is function-scoped, meaning it is accessible within the function it is declared in. If declared outside any function, it is globally scoped
- Variables declared with var are hoisted to the top of their scope and initialized with undefined
  \*Variables declared with var can be re-declared within the same scope.

### LET

- let is block-scoped, meaning it is only accessible within the block it is declared in (e.g., within {}).
- Variables declared with let are hoisted but not initialized, leading to a Temporal Dead Zone (TDZ) until the declaration is encountered
- Variables declared with let cannot be re-declared within the same scope.

### CONST

- const is block-scoped, similar to let.
- Variables declared with const are hoisted but not initialized, leading to a Temporal Dead Zone (TDZ) until the declaration is encountered.
- Variables declared with const cannot be re-declared within the same scope.
- const requires an initial value at the time of declaration, and the variable reference cannot be reassigned. However, the contents of objects and arrays declared with const can be modified.

## Temporal Dead Zone (TDZ)

The Temporal Dead Zone (TDZ) in JavaScript is a behavior that occurs with variables declared using let and const before they are initialized. The TDZ refers to the period of time from entering a scope to the point where the variable is declared and initialized. During this period, accessing the variable results in a ReferenceError.

## DATA TYPES IN JS

### PRIMITIVE DATA TYPES

Primitive data types are most basic data types, They are immutable meaning cant change values after they are created

1. **Number:** Represent integer and float numbers
2. **String:** Represent sequence of characters
3. **Boolean:** Represent logical values ie `true` or `false`
4. **Null:** Represent intentional absence
5. **Undefined:** Represent a variable that has been declared but not assigned a value;
6. **Symbol:** Represents a unique and immutable identifier.

### NON-PRIMITIVE DATA TYPES

Non primitive data types are objects. Unlike primitive data types , they can hold collections of values and more complex entities

1. **Object**
   Represent a collection of `key-value` pair

```js
let person = {
  name: "John",
  age: 30,
};
```

2. **Array**
   Represents an ordered collection of values (indexed).
   Example: `let numbers = [1, 2, 3, 4, 5];`

3. **Function**
   Represents a block of code designed to perform a particular task.

```js
function greet() {
  return "Hello";
}
```

4. **Date**
   Represents a single moment in time.
   Example: `let now = new Date();`

5. **RegExp**
   Represents regular expressions, used for pattern matching within strings
   Example: `let pattern = /ab+c/;`

6. **Error**
   Represents runtime errors.

```js
try {
  throw new Error("Something went wrong");
} catch (e) {
  console.log(e.message); // 'Something went wrong'
}
```

## UNDEFINED VS NOT DEFINED

A variable is said to be `undefined` if it has been declared but not yet assigned a value. This means the variable exists in the current scope but does not have an initialized values

`notdefined` means The variable has not been declared in the current scoped
this leads into reference errors

## Nan

In JS Nan stands for "Not a Number" , and means by computational results cant be expressed as a meaningful Number

**isNan function** -- this function convert the value to a number and checks if it is a `Nan`

```js
console.log(isNaN(NaN)); // Output: true
console.log(isNaN("hello")); // Output: true (because Number("hello") is NaN)
console.log(isNaN(123)); // Output: false
```

## Strict mode

Strict mode is introduced in es5 in JS it is a way to opt into a restricted variant of JS , which help you to catch common coding mistakes and "unsafe" actions such as defining a global variable unintentionally.

In strict mode, defining a variable without using the var, let, or const keywords will throw an error, preventing accidental creation of global variables.

```js

"use strict";

a=10;
console.log(a);
console.log('hello');

// gives a reference error

```

without `strict` mode the above code will print `10` following `hello`

## OPERATORS

### ARITHMETIC OPERATORS

Arithmetic operators are used to perform mathematical operations.

- **Addition (+):** Adds two numbers.
- **Subtraction (-):** Subtracts one number from another.
- **Multiplication (\*):** Multiplies two numbers.
- **Division (/):** Divides one number by another.
- **Modulus (%):** Returns the remainder of a division.
- **Exponentiation ()\*\***: Raises the first operand to the power of the second operand.
- **Increment (++):** Increases a variable's value by one.
- **Decrement (--):** Decreases a variable's value by one.

### ASSIGNMENT OPERATORS

Assignment operators are used to assign values to variables.

- **Assignment (=):** Assigns a value to a variable.
- **Addition Assignment (+=):** Adds and assigns a value.
  example:

```js
let x = 5;
x += 3; // 8
```

- **Subtraction Assignment (-=):** Subtracts and assigns a value.
- **Multiplication Assignment (\*=):** Multiplies and assigns a value.
- **Division Assignment (/=):** Divides and assigns a value
- **Modulus Assignment (%=):** Takes modulus and assigns a value.
- **Exponentiation Assignment (=)\*\***: Raises to a power and assigns a value.

### COMPARISON OPERATORS

Comparison operators are used to compare two values and return a boolean result.

- **Equal (==):** Compares values for equality (type conversion allowed).
- **Strict Equal (===):** Compares values and types for equality.
- **Not Equal (!=):** Compares values for inequality (type conversion allowed).
- **Strict Not Equal (!==):** Compares values and types for inequality.
- **Greater Than (>):** Checks if the left operand is greater than the right operand.
- **Less Than (<):** Checks if the left operand is less than the right operand.
- **Less Than or Equal (<=):** Checks if the left operand is less than or equal to the right operand.

### LOGICAL OPERATORS

Logical operators are used to combine or invert boolean values

- **Logical AND (&&):** Returns true if both operands are true.

- **Logical OR (||):** Returns true if at least one operand is true.

- **Logical NOT (!):** Inverts the boolean value.

- **Nullish Coalescing (??):**  returns the right-hand side operand when the left-hand side operand is null or undefined

ex: 
```js
const userDefinedValue = null;
const defaultValue = 'Default Value';

const result = userDefinedValue ?? defaultValue;
console.log(result); // Output: 'Default Value'
```

### BITWISE OPERATORS

Bitwise operators perform operations on the binary representation of numbers

- **AND (&):** Performs a bitwise AND.

```js
5 & 1; // 1 (0101 & 0001)
```

- **OR (|):** Performs a bitwise OR.

```js
5 | 1; // 5 (0101 | 0001)
```

- **XOR (^):** Performs a bitwise XOR.

```js
5 ^ 1; // 4 (0101 ^ 0001)
```

- **NOT (~):** Performs a bitwise NOT.

```js
~5; // -6 (~0101 = 1010)
```

- **Left Shift (<<):** Shifts bits to the left.

```js
5 << 1; // 10 (0101 << 1 = 1010)
```

- **Right Shift (>>):** Shifts bits to the right.

```js
5 >> 1; // 2 (0101 >> 1 = 0010)
```

- **Unsigned Right Shift (>>>):** Shifts bits to the right, filling with zeros.

```js
5 >>> 1; // 2 (0101 >>> 1 = 0010)
```

### STRING OPERATORS

In addition to the arithmetic addition operator, +, which concatenates strings, JavaScript also provides other string-related operations.

```js
let greeting = "Hello" + " " + "World!"; // "Hello World!"
```

### CONDITIONAL (TERNARY) OPERATOR

The conditional operator assigns a value based on a condition.

```js
let age = 18;
let canVote = age >= 18 ? "Yes" : "No"; // "Yes"
```

### TYPE OPERATORS

**typeof:** Returns the type of a variable.

```js
typeof 5; // "number"
```

## CONDITIONAL STATEMENTS

Conditional statements allow you to perform different actions based on different conditions.

1. ### IF ELSE Statements

   The `if...else` statement allows you to execute code based on a condition. You can chain multiple conditions using `else if`

```js
let num = 5;

if (num > 10) {
  console.log("Number is greater than 10");
} else if (num > 5) {
  console.log("Number is greater than 5 but less than or equal to 10");
} else if (num > 0) {
  console.log("Number is greater than 0 but less than or equal to 5");
} else {
  console.log("Number is 0 or less");
}
```

2. ### SWITCH Statements

   The `switch` statement is another way to handle multiple conditions. It's useful when you have many conditions based on the same variable.

```js
let fruit = "apple";

switch (fruit) {
  case "banana":
    console.log("Banana is yellow");
    break;
  case "apple":
    console.log("Apple is red or green");
    break;
  case "orange":
    console.log("Orange is orange");
    break;
  default:
    console.log("Unknown fruit");
}
```

## LOOPS

Loops allow you to repeat a block of code multiple times.

1. ### FOR Loop
   The `for` loop is the most common type of loop in JavaScript

```js
for (let i = 0; i < 5; i++) {
  console.log("Iteration number " + i);
}
```

2. ### WHILE LOOP

   The `while` loop executes a block of code as long as a specified condition is true.

```js
let i = 0;
while (i < 5) {
  console.log("Iteration number " + i);
  i++;
}
```

3. ### DO WHILE LOOP

   The `do...while` loop is similar to the while loop, but it guarantees that the block of code is executed at least once, even if the condition is false.

```js
let j = 0;
do {
  console.log("Iteration number " + j);
  j++;
} while (j < 5);
```

4. ### FOR IN LOOP
   The `for...in` loop is used to iterate over the properties of an object.

```js
let person = { name: "John", age: 30, city: "New York" };

for (let key in person) {
  console.log(key + ": " + person[key]);
}

//output will be
// name: John
// age: 30
// city: New York
```

in case of `array` , **for in** loop will iterate through the index of the array ,

ex:

```js

let array = [1,2,3,4];


for (let x in array){
    console.log(x);
}

// output will be 0,1,2,3

```

5. ### FOR OF LOOP
   The `for...of` loop is used to iterate over iterable objects like arrays, strings, and Node Lists.

```js
let numbers = [1, 2, 3, 4, 5];

for (let num of numbers) {
  console.log(num);
}
//output will be 1,2,3,4,5
```

## ERRORS in JS

In errors are categorized into different types , each represent specific kind of problems occurring during the execution of the code
The main Types are

- **Syntax Errors** - Occur when code does not conform to the syntax of the language
- **Reference Errors** - Occur when try to reference a variable that does not exist or initialized in the current scope
- **Type Error** -Occur when the value is not a expected type
- **Range Error** Occur when a value is not with in the set or range of allowed values , ex: passing an invalid length to array like -1

## CLOSURE in JS

Closure is the combination of function bundled together with references to its lexical environment . 

 This means that the function has access to variables and functions defined in its outer scope, even after the outer scope has finished executing

**ex:**

```js
function x() {
  var a = 7;
  
  function y() {
    console.log(a);
  }
  
  return y;
}

var z = x();
z(); // This will output 7

```

# STRINGS

JavaScript are sequences of characters enclosed within quotation marks. They can be defined using either single quotes (') or double quotes (").

```js
let name = 'Alice';
```

## STRING METHODS

1. ### charAt(index)
   Returns the character at the specified index

```js
let str = "Hello, World!";
console.log(str.charAt(0)); // "H"
```

2. ### includes(searchString, position)
   Checks if a string contains another string.

```js
console.log(str.includes("World")); // true
```

3. ### indexOf(searchValue, fromIndex)
   Returns the index of the first occurrence of a specified value.

```js
console.log(str.indexOf("o")); // 4
```

4. ### replace(searchValue, newValue)
   Replaces a specified value with another value in a string.

```js
console.log(str.replace("World", "JavaScript")); // "Hello, JavaScript!"
```

5. ### trim()
Removes whitespace from both ends of a string.

```js
let strWithSpaces = "   Hello, World!   ";
console.log(strWithSpaces.trim()); // "Hello, World!"
```

6. ### toUpperCase()
   Converts a string to uppercase.

```js
console.log(str.toUpperCase()); // "HELLO, WORLD!"
```

7. ### toLowerCase()
   Converts a string to lowercase.

```js
console.log(str.toLowerCase()); // "hello, world!"
```
8. ### split()
Splits a string into an array of substrings based on a specified separator.
```js
let str = "apple,banana,orange";
let fruits = str.split(",");
console.log(fruits); // ["apple", "banana", "orange"]
```
9. ### slice()
Extracts a part of a string and returns a new string.

```js
let str = "hello world";
let substring = str.slice(6);
console.log(substring); // "world"
```
10. ### substring()
Similar to `slice()`, but handles negative indices differently.

```js
let str = "hello world";

// Using slice()
let substring1 = str.slice(6, 11); // "world"
let substring2 = str.slice(-5, -1); // "world"

// Using substring()
let substring3 = str.substring(6, 11); // "world"
let substring4 = str.substring(-5, -1); // "world" (same as substring3)

```

# FUNCTIONS IN JS

A JavaScript function is a block of code designed to perform a particular task.It encapsulates a set of instructions that can be reused throughout a program. Functions can take parameters, execute statements, and return values, enabling code organization, modularity, and reusability in JavaScript programming.

## Function Declaration

A function declaration defines a named function in JavaScript

```js
function greet() {
  console.log("Hello!");
}
greet(); // "Hello!"
```

## Function Expressions

A function expression is when a function is assigned to a variable. This contrasts with function declarations, which are standalone functions

```js
const greet = function () {
  console.log("Hello!");
};
greet(); // "Hello!"
```

**Key Differences:**

- **Hoisting**: Function declarations are hoisted, meaning they can be called before they are defined in the code. Function expressions are not hoisted.

- **Naming:** Function declarations must have a name, whereas function expressions can be anonymous.

## ARROW FUNCTION

An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage

```js
const functionName = (parameter1, parameter2, ...) => {
    // function body
};
```

One of the most significant features of arrow functions is that they do not have their own this context. Instead, they inherit this from the parent scope at the time they are defined (Lexical scoping)

Arrow functions cannot be used as constructors. You cannot create new objects using the new keyword with an arrow function.

```js
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++;
    console.log(this.age);
  }, 1000);
}

const person = new Person();

```

## HIGHER ORDER FUNCTIONS

Higher order functions are functions that operate on other functions by taking them as arguments , returning them or both

- A Higher order function can take one or more function as arguments
- A Higher order function can also return a function as a result
- Higher-order functions are commonly used for callbacks in asynchronous programming

examples : `map` , `filter` , `reduce`

```js
function applyOperation(a, b, operation) {
    return operation(a, b);
}

// Define two simple functions: add and multiply
function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

// Using applyOperation with different functions
console.log(applyOperation(5, 3, add)); // Output: 8
console.log(applyOperation(5, 3, multiply)); // Output: 15
```

## Eval Functions

The Eval function in JS is able to read strings which must be an expression or formula . It basically reads and evaluate if tng might be a calculation
In strict mode, declaring a variable named eval or re-assigning eval is a SyntaxError
example:

```js
console.log(eval("2 + 2"));
// Expected output: 4
```

## Pure Functions

Its is a function that does not have side effects and a function that return exact same thing every time that function invoked with same input

```js
function numberToString(num) {
  return num.toString();
}
```

## IIFE (Immediately Invoked Function Expressions)

IIFE is a JS function that run as soon as the function declared

```js
(function () {
  var a = 3;
  console.log(3);
})();
```

## Generator Functions

Regular function only return only once ,Generator function can return multiple values , one after another on demand
To create generator function use special syntax `function*`

```js
function* generatorFunction(a,b){
    yield a+b;
    yield a-b ;
}

let gen = generatorFunction(6,5);

console.log(gen.next().value);
console.log(gen.next().value);

```

- The `yield` operator is used to pause and resume a generator function.
- `next()` is the main method for generate function , the result of next() is always object with 2 properties

1. `value` : the yielded (returned) value
2. `done` : if the function is completely completed it will be `true` else `false`

**COUNTER USING GENERATOR FUNCTION**

```js
function* countGenerator(){
    let count = 1;
   for(let i=0;i<3;i++){
    yield count++
   }
}


let count = countGenerator();

console.log(count.next());
console.log(count.next());
console.log(count.next());
console.log(count.next());

```
output will be

```js
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: undefined, done: true }
```


## Factory Function

Its just a function create an object and return that object , They offer a flexible way to create objects without using `class` or `new`. They can encapsulate private variables and functions.

```js
function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet: function () {
      console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old.`
      );
    },
  };
}

const person1 = createPerson("Alice", 30);
const person2 = createPerson("Bob", 25);

person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.
```

## CONSTRUCTOR FUNCTION

Constructor function in Java helps to create multiple instance of objects ,When you use the new keyword with a constructor function, it creates a new object, sets the this context to the new object, and allows you to add properties and methods to that object.

```js
// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.sayHello = function () {
    console.log("Hello, my name is " + this.name);
  };
}

// Creating instances
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

// Using the instances
person1.sayHello(); // Output: Hello, my name is Alice
person2.sayHello(); // Output: Hello, my name is Bob
```

## Default parameters
Default parameters in JavaScript allow you to specify default values for function parameters. If a caller does not provide a value for a parameter, the function uses the default value instead. This feature simplifies function definitions and helps avoid undefined or null values.

ex:

```js
function createUser(name = "Anonymous", age = 18) {
  return `Name: ${name}, Age: ${age}`;
}

console.log(createUser());                  // Output: "Name: Anonymous, Age: 18"
console.log(createUser("Bob"));             // Output: "Name: Bob, Age: 18"
console.log(createUser("Charlie", 25));    // Output: "Name: Charlie, Age: 25"
```


# Prototype

In JavaScript, the prototype property is used to add properties and methods to a constructor function's prototype. This allows all instances created by the constructor function to share the same methods, which is more memory-efficient and helps with code organization.

When you add methods to a constructor function's prototype, all instances of that constructor will have access to those methods, but the methods themselves are not duplicated for each instance. Instead, they are shared through the prototype chain.

example :

```js
// Constructor function

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the prototype
Person.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

// Creating instances
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

// Using the instances
person1.sayHello(); // Output: Hello, my name is Alice
person2.sayHello(); // Output: Hello, my name is Bob
```

# Inheritance In JS

Inheritance in JavaScript is a concept that allows one object to inherit properties and methods from another object.

## Prototype-Based Inheritance

In JavaScript, every `object` has a prototype property (except Object.prototype). When you access a property or method on an object, JavaScript will first look for it on that object. If it doesn't find it, it will look for it on the object's prototype. If it still doesn't find it, it will continue up the prototype chain until it reaches `Object.prototype`. If the property or method isn't found anywhere in the chain, undefined is returned.

```js
// Parent constructor function
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(this.name + " makes a sound.");
};

// Child constructor function
function Dog(name, breed) {
  Animal.call(this, name); // Inherit properties from Animal
  this.breed = breed;
}

// Inherit methods from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Add additional methods to Dog
Dog.prototype.bark = function () {
  console.log(this.name + " barks.");
};

// Create instances
const dog1 = new Dog("Buddy", "Golden Retriever");

dog1.speak(); // Output: Buddy makes a sound.
dog1.bark(); // Output: Buddy barks.
```

# OBJECTS

Objects is one of the data types in JS , it used to store values in **key:value** pairs , Objects are mutable in JS

example:

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
```

Objects can also create using `new` keyword.
We can access object properties in tow ways

1. objectName.propertyName
2. objectName["propertyName"]

The `delete` keyword delete property from an object in above case

`delete person.id ;`

## Object Methods

Object methods are actions that can performed on objects

There are several methods to convert an object into array, the main advantage of this , this process make an object iterable(ie we can loop through this)

consider below object as example

```js
const obj = {
  cat: "meow",
  dog: "bow bow",
  cow: "meh...",
};
```

1. **Object.keys**
   Using `Object.keys` and passing object will return a array with that object keys

example:

```js
console.log(Object.keys(obj));
// returns ["cat","dog","cow"]
```

2. **Object.values**
   Using `Object.values` and passing object will return a array with that object values

example :

```js
console.log(Object.values(obj);
//returns ["meow", "bow bow","meh.."]
)
```

3. **Object.entries**
   Using `Object.entries` and passing object will return an 2D Array with key and of that Object

example:

```js
console.log(Object.entries(obj))
//returns [["cat","meow"],
           ["dog","bow bow"],
           ["cow","meh..."]
          ]
```

4. **Object.freeze**
   Using `Object.freeze` makes an object immutable , ie you can't add, delete, or modify the properties of object . freezing is a one way operation , once a object is frozen cannot unfrozen

```js
const obj = {
  a: 1,
  b: 2,
  nested: {
    c: 3,
  },
};

Object.freeze(obj);

obj.a = 3; // No effect
delete obj.b; // No effect
obj.c = 4; // No effect

console.log(obj); // { a: 1, b: 2 }
console.log(Object.isFrozen(obj)); // true
```

freezing is shallow , it affects the object itself not nested objects
ie,

```js
obj.nested.b = 3; // This is allowed
console.log(obj.nested.b); // 3
```

5. **Object.seal**
   `Object.seal` is less restrictive than freezing it prevents adding or removing properties , but allows modifying existing property values

```js
const obj = {
  a: 1,
  b: 2,
  nested: {
    c: 3,
  },
};

Object.freeze(obj);

obj.a = 6; // Allowed
delete obj.b; // No effect
obj.c = 8; // No effect

console.log(obj); // { a: 6, b: 2 }
console.log(Object.isSealed(obj)); // true
```

Sealing is also shallow. It only affects the object itself, not nested objects.

```js
obj.nested.c = 0; // This is allowed
delete obj.nested; // No effect
console.log(obj.nested.c); // 0
```

## This Keyword

In JS `this` keyword is reference to something like object.
but this keyword work differently in different scenarios , like check in case of an object with normal function

```js
let user ={
name= 'Aswanth',
age:26,
function getName(){
    console.log(this.name)
}
}
user.getName() //print Aswanth in console
```

lets go into more complex object

```js
let user ={
name= 'Aswanth',
age:26,
childObj:{
    nickname:"Ash"
    function getName(){
    console.log(this.name ,"and",this.nickname)
}
}
}
user.childObj.getName() //print 'undefined and Ash' in console

```

in this case the `this` in referenced only to childObj , ie incase of normal function `this` only referenced its direct parent

Now Lets check the same with Arrow functions

```js
let user ={
name= 'Aswanth',
age:26,
getName:()=>{
    console.log(this.name)
}
}
user.getName() //print nothing

```

`this` keyword value in arrow function referenced its par parent function , in above case there is no parent function so it point to the window object
, to access name in this case need to use nested arrow function

```js
let user = {
  name: "Aswanth",
  age: 24,
  getName() {
    const nestedArrow = () => console.log(this.name); //Aswanth
    nestedArrow();
  },
};
```

# CALL APPLY BIND

These methods are powerful tools in JavaScript for function borrowing and ensuring that functions execute in the desired context.

1. ## CALL
   Using `call` method, we can borrow a function from one object and use it for another object.

Consider an object

```js
let name = {
  firstname: "Aswanth",
  lastname: "Ck",
  printFullname: function () {
    console.log(this.firstname + " " + this.lastname);
  },
};
```

Now, if we need to create a similar object with the same properties (`firstname`, `lastname`) and `printFullname` function, instead of repeatedly writing the function in the new object, we can borrow the `printFullname` function directly from the name object.

the syntax is

```js
let name2 = {
  firstname: "Yuvraj",
  lastname: "Singh",
};

name.printFullname.call(name2);
```

Usually, we don't store these types of functions inside objects. Instead, we make them global and use them accordingly:

```js
let printFullname = function () {
  console.log(this.firstname + " " + this.lastName);
};

printFullname.call(name);
```

You can add more parameters to this function. When doing so, always pass arguments after the object:

```js
let printFullname = function (hometown) {
  console.log(this.firstname + " " + this.lastName + "from " + hometown);
};

printFullname.call(name, "Kannur");
```

2. ## APPLY

The `apply` method works similarly to `call`. The only difference is that instead of passing arguments individually in the `apply` method, you pass them as an array.

```js
let printFullname = function (hometown, state, country) {
  console.log(
    this.firstname +
      " " +
      this.lastname +
      " from " +
      hometown +
      ", " +
      state +
      ", " +
      country
  );
};

printFullname.apply(name, ["Kannur", "Kerala", "India"]);
```

3. ## BIND
   The `bind` method creates a copy of the function and binds it with the object. It doesn't invoke the function directly; instead, it stores the function in a variable so you can call it later.

```js
let printFullname = function (hometown) {
  console.log(this.firstname + " " + this.lastname + " from " + hometown);
};

let printName = printFullname.bind(name, "Kannur");

printName(); // This will invoke the function
```

# CURRYING

Currying transforms a function that takes multiple arguments into a series of functions that each take a single argument.

Normal Function:

```js
function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 3)); // Outputs: 6
```

Curried Function:

```js
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

const multiplyBy2 = multiply(2); // This creates a new function that multiplies its argument by 2
console.log(multiplyBy2(3)); // Outputs: 6
```

Currying improves reusability, readability, and flexibility of the code.

# CLASSES

In JavaScript Classes are the blue print to create an object

A `class` is defined using the class keyword followed by the class name. The class body is enclosed in curly braces `{}`.
The `constructor` method in a JavaScript class is a special method used for creating and initializing objects created with a class. When you create a new instance of a class, the constructor method is automatically called.

```js
class Person {
  // Constructor method to initialize the object
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to display the person's details
  describe() {
    return `${this.name} is ${this.age} years old.`;
  }
}
```

You can create an instance of a class using the `new` keyword.

```js
const person1 = new Person("Alice", 30);
console.log(person1.describe()); // Output: Alice is 30 years old.
```

## Inheritance

Classes can inherit from other classes using the `extends` keyword. This allows a class to inherit properties and methods from another class.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent class constructor
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} barks.`);
  }
}

const dog1 = new Dog("Buddy", "Golden Retriever");

dog1.speak(); // Output: Buddy makes a sound.
dog1.bark(); // Output: Buddy barks.
```

## Getters and Setters

Getters and setters allow you to define methods that get and set the value of an object’s properties.

```js
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    if (newAge > 0) {
      this._age = newAge;
    } else {
      console.log("Age must be positive");
    }
  }
}

const person3 = new Person("Dave", 40);
console.log(person3.name); // Output: Dave
person3.age = 45;
console.log(person3.age); // Output: 45
```

## Private Fields and Methods

Private fields and methods are defined using the # prefix and can only be accessed within the class.

```js
class Person {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  get name() {
    return this.#name;
  }

  get age() {
    return this.#age;
  }
}

const person4 = new Person("Eve", 35);
console.log(person4.name); // Output: Eve
console.log(person4.age); // Output: 35
```

# ARRAYS

You can create an array in a few different ways:

1. Using square brackets `[]`:

```js
let fruits = ["Apple", "Banana", "Cherry"];
```

2. Using the Array constructor:

```js
let fruits = new Array("Apple", "Banana", "Cherry");
```

## COMMON ARRAY METHODS

1. ### push()
   Adds one or more elements to the end of an array and returns the new length of the array.

```js
fruits.push("Date");
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry", "Date"]
```

2. ### pop()
   Removes the last element from an array and returns that element.

```js
let lastFruit = fruits.pop();
console.log(lastFruit); // Output: Date
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry"]
```

3. ### unshift()
   Adds one or more elements to the beginning of an array and returns the new length of the array.

```js
fruits.unshift("Apricot");
console.log(fruits); // Output: ["Apricot", "Apple", "Blueberry", "Cherry"]
```

4. ### shift()
   Removes the first element from an array and returns that element.

```js
let firstFruit = fruits.shift();
console.log(firstFruit); // Output: Apricot
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry"]
```

5. ### length
   Returns the number of elements in an array.

```js
console.log(fruits.length); // Output: 3
```

6. ### forEach()
   Creates a new array with the results of calling a function for every array element.

```js
let upperCaseFruits = fruits.map(function (fruit) {
  return fruit.toUpperCase();
});
console.log(upperCaseFruits); // Output: ["APPLE", "BLUEBERRY", "CHERRY"]
```

7. ### join()
   Joins all elements of an array into a string, separated by a specified separator.

```js
let fruitString = fruits.join(", ");
console.log(fruitString);
// Output: "Apple, Banana, Cherry"
```

8. ### map()
   Creates a new array with the results of calling a function for every array element.

```js
let upperCaseFruits = fruits.map(function (fruit) {
  return fruit.toUpperCase();
});
console.log(upperCaseFruits); // Output: ["APPLE", "BLUEBERRY", "CHERRY"]
```

9. ### filter()
   Creates a new array with all elements that pass a test implemented by a function.

```js
let longNamedFruits = fruits.filter(function (fruit) {
  return fruit.length > 5;
});
console.log(longNamedFruits); // Output: ["Blueberry", "Cherry"]
```

10. ### reduce()
    Executes a reducer function on each element of the array, resulting in a single output value.

```js
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce(function (total, num) {
  return total + num;
}, 0);
console.log(sum); // Output: 10
```

11. ### sort()
    Sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings.

```js
fruits.sort();
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]
```

12. ### indexOf()
    Returns the first index at which a given element can be found in the array, or -1 if it is not present.

```js
let index = fruits.indexOf("Banana");
console.log(index); // Output: 1
```

13. ### reverse()
    Reverses the order of the elements in an array in place.

```js
fruits.reverse();
console.log(fruits); // Output: ["Cherry", "Banana", "Apple"]
```

14. ### slice()
    Returns a shallow copy of a portion of an array into a new array. It does not modify the original array
    `array.slice(start, end)`

```js
let fruits = ["Apple", "Banana", "Cherry", "Date"];
let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: ["Banana", "Cherry"]
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Date"]
```

14. ### splice()
    Changes the contents of an array by removing, replacing, or adding elements. It modifies the original array
    `array.splice(start, deleteCount, item1, item2, ...)`

```js
let fruits = ["Apple", "Banana", "Cherry", "Date"];
fruits.splice(1, 2, "Kiwi", "Mango"); // Removes "Banana" and "Cherry", adds "Kiwi" and "Mango"
console.log(fruits); // Output: ["Apple", "Kiwi", "Mango", "Date"]
```

# SPREAD AND REST OPERATORS

## SPREAD OPERATOR

The spread operator is used to expand an iterable (like an array or object) into individual elements. It's represented by three dots ( ... ).Spread operator expands elements.

## REST OPERATOR

The rest operator collects multiple elements into a single array. It's also represented by three dots ( ... ) but is used in function parameters.Rest operator collects elements into an array.

# DESTRUCTURING

## OBJECT DESTRUCTURING

Object destructuring is a syntax that allows you to extract properties from an object and assign them to variables with the same name. It's a convenient way to unpack values from objects.

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

const { firstName, lastName } = person;

console.log(firstName); // Output: John
console.log(lastName); // Output: Doe
```

## ARRAY DESTRUCTURING

Array destructuring is a syntax that allows you to unpack elements from an array into distinct variables. It provides a concise way to assign values from an array to variables.

```js
const numbers = [1, 2, 3];
const [first, second, third] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(third); // Output: 3
```

# SHALLOW COPY AND DEEP COPY

### SHALLOW COPY

Creates a new object but shares references to the original object's values. Changes to the copy affect the original.
Shallow copies are faster but can lead to unexpected behavior.
You can use `Object.assign()` and `spread operator` for performing shallow copy in JS objects/arrays

### DEEP COPY

Creates a completely independent copy of the original object, including all nested objects and arrays. Changes to the copy do not affect the original.
Deep copies are safer but more expensive in terms of performance

`JSON.parse(JSON.stringify())` used for perform deep copy

# SET

A `set` is a collection of unique values .It allows you to store any type of values primitive or object reference

- A `set` cannot contain duplicate values
- Values are ordered by insertion order

## Methods ad Properties of SET

- **new Set():** Create new set object
- **set.add(value):** Add values to the set . Returns the Set object.
- **set.delete(vale):** Remove value from set. Returns true if the value was in the set, otherwise false.
- **set.has(value):** Returns true if the value exists in the Set, otherwise false.
- **set.clear():** Removes all values from the Set.
- **set.size:** Returns the number of elements in the Set.

```js
const set = new Set();

set.add(1);
set.add(2);
set.add(2); // Duplicate value, will not be added

console.log(set); // Set { 1, 2 }

console.log(set.has(1)); // true
console.log(set.size); // 2

set.delete(1);
console.log(set); // Set { 2 }

set.clear();
console.log(set); // Set {}
```

# WEAK SET

A `WeakSet` is similar to a Set, but it can only contain objects, and the references to the objects are weak. This means that if there are no other references to an object stored in the `WeakSet`, it can be garbage collected.

- Can only store object references, not primitive values.
- Objects in a WeakSet can be garbage collected if there are no other references to them.

## Methods and properties of WEAK SET

- **new WeakSet([iterable]):** Creates a new WeakSet object. Optionally accepts an iterable object (e.g., array of objects) to initialize the set with.
- **weakSet.add(value):** Adds an object to the WeakSet. Returns the WeakSet object.
- **weakSet.delete(value):** Removes an object from the WeakSet. Returns true if the object was in the set, otherwise false.
- **weakSet.has(value):** Returns true if the object exists in the WeakSet, otherwise false.

```js
let obj1 = { name: "John" };
let obj2 = { name: "Jane" };

const weakSet = new WeakSet();

weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1)); // true
console.log(weakSet.has(obj2)); // true

weakSet.delete(obj1);
console.log(weakSet.has(obj1)); // false

obj2 = null; // Remove the reference to the object
// The object { name: 'Jane' } can now be garbage collected
```

# MAP

A `Map` is a collection of key-value pairs where keys can be of any type, including objects, functions, and primitives.

- Keys can be of any type.
- Keys are ordered by insertion order.

## Methods and Properties of MAP

- **new Map([iterable]):** Creates a new Map object. Optionally accepts an iterable object (e.g., an array of key-value pairs) to initialize the map.
- **map.set(key, value):** Adds or updates an element with the specified key and value. Returns the Map object.
- **map.get(key):** Returns the value associated with the key, or undefined if the key does not exist.
- **map.has(key):** Returns true if the key exists in the Map, otherwise false.
  map.delete(key): Removes the element with the specified key. Returns true if the element existed and was removed, otherwise false.
- **map.clear():** Removes all elements from the Map.
- **map.size:** Returns the number of key-value pairs in the Map.
- **map.keys():** Returns a new iterator object that contains the keys for each element.
- **map.values():** Returns a new iterator object that contains the values for each element.
- **map.entries():** Returns a new iterator object that contains an array of [key, value] for each element.
- **map.forEach(callback, [thisArg]):** Calls a function for each key-value pair in the Map.

```js
const map = new Map();

map.set("name", "Alice");
map.set("age", 25);

console.log(map.get("name")); // Alice
console.log(map.has("age")); // true
console.log(map.size); // 2

map.delete("age");
console.log(map.has("age")); // false

map.clear();
console.log(map.size); // 0
```

# WEAK MAP

A `WeakMap` is a collection of key-value pairs where the keys are weakly referenced, and must be objects.

- Keys must be objects.
- Keys are weakly referenced, meaning if there are no other references to the key object, it can be garbage collected.

## Methods and properties of WEAK MAP

- **new WeakMap([iterable]):** Creates a new WeakMap object. Optionally accepts an iterable object (e.g., an array of key-value pairs) to initialize the weak map.
- **weakMap.set(key, value):** Adds or updates an element with the specified key and value. Returns the WeakMap object.
- **weakMap.get(key):** Returns the value associated with the key, or undefined if the key does not exist.
- **weakMap.has(key):** Returns true if the key exists in the WeakMap, otherwise false.
- **weakMap.delete(key):** Removes the element with the specified key. Returns true if the element existed and was removed, otherwise false.

```js
let obj1 = { name: "Alice" };
let obj2 = { name: "Bob" };

const weakMap = new WeakMap();

weakMap.set(obj1, "Developer");
weakMap.set(obj2, "Designer");

console.log(weakMap.get(obj1)); // Developer
console.log(weakMap.has(obj2)); // true

weakMap.delete(obj1);
console.log(weakMap.has(obj1)); // false

obj2 = null; // Remove the reference to the object
// The object { name: 'Bob' } can now be garbage collected
```

# CALLBACK FUNCTION IN JAVASCRIPT

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

```js
// Simulating an asynchronous operation using setTimeout
function fetchData(callback) {
  console.log("Fetching data...");

  setTimeout(function () {
    let data = { name: "Alice", age: 30 };
    callback(data);
  }, 2000); // 2-second delay
}

// Callback function to process the fetched data
function processData(data) {
  console.log("Data received:");
  console.log(data);
}

// Calling the function and passing the callback
fetchData(processData);
```

Callback functions are commonly used in JavaScript for handling asynchronous operations, event handling, and more.

## CALLBACK HELL

Callback hell, also known as "pyramid of doom," occurs when you have multiple nested callbacks in asynchronous code, making it difficult to read and maintain. This situation often arises when dealing with asynchronous operations like file I/O, network requests, or timers.

```js
doSomething(function (result1) {
  doSomethingElse(result1, function (result2) {
    doAnotherThing(result2, function (result3) {
      doSomethingMore(result3, function (result4) {
        // This nesting can go on...
        console.log(result4);
      });
    });
  });
});
```

## INVERSION OF CONTROL

Inversion of control in JS is function or method does not control the flow of execution directly. Instead, it delegates control to another function that is passed as an argument. This is commonly seen in asynchronous programming and event handling.

# HOW JAVASCRIPT WORKS

## EXECUTION CONTEXT

Everything in Js happened inside a execution Context
Execution context have 2 phases

1. **Memory Allocation phase** (Variable environment)
   In this phase variable and functions stored as key value pairs

- in this phase for every variable Js allocate a special value `undifined`
- In case of function memory allocation phase whole function

2. **Code execution phase** (Thread of Execution)
   In this phase javascript run code by line by line

- in this phase JS allocate original value of variables to them
- Whenever a new function is invoked a brand new execution context is created

## CALL STACK

The call stack in JavaScript is a mechanism for managing the execution context of code. It keeps track of function calls, allowing the JavaScript engine to know what function is currently being executed and what function called it. When a function is called, a new execution context is created and pushed onto the stack. When the function completes, its execution context is popped off the stack.

## WEB API

Functions like `setTimeout`, `fetch`, `console`, and `event listeners` are provided by the browser and run in the background. These APIs are not part of the JavaScript runtime but are available in the environment (browser or Node.js).

## CALLBACK QUEUE

When an asynchronous operation completes, its callback function is placed in the callback queue.

## EVENT LOOP

This is a constantly running process that checks the call stack and the callback queue. If the call stack is empty, the event loop moves the first function from the callback queue to the call stack to be executed.

## MICRO TASK

Micro tasks are high priority tasks like `Promise Callback` , and `MutationObserver Callbacks`
Microtasks include:

1. **Promise callbacks:** The then, catch, and finally handlers of a Promise.
2. **MutationObserver callbacks:** These are triggered by changes to the DOM.
3. **queueMicrotask:** A function that explicitly adds a microtask to the queue.

## MICRO TASK QUEUE

The micro tasks are stored in micro task queue,the event loop checks the microtask queue before moving to the callback queue.

# PROMISES

A promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. It provides a cleaner and more manageable way to handle asynchronous tasks compared to traditional callbacks.
A Promise contain 3 states

1. **Pending:** The initial state. The operation is ongoing.
2. **Fulfilled:** The operation completed successfully.
3. **Rejected:** The operation failed.

Creating a Promise:

```js
const myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous task
  setTimeout(() => {
    const success = true; // Change to false to simulate a failure
    if (success) {
      resolve("Operation was successful!");
    } else {
      reject("Operation failed.");
    }
  }, 2000);
});
```

using a Promise

```js
myPromise
  .then((result) => {
    console.log(result); // Logs "Operation was successful!" if resolved
  })
  .catch((error) => {
    console.error(error); // Logs "Operation failed." if rejected
  });
```

Promises help manage asynchronous operations by providing `.then()` for success, `.catch()` for errors, and `.finally()` for cleanup.

## PROMISE CHAINING

Promise chaining is a technique in JavaScript where multiple promises are linked together in a sequence, with each promise starting after the previous one has been fulfilled. This is accomplished by returning a new promise from the .then() method, which allows subsequent .then() methods to handle the new promise's fulfillment or rejection. This makes handling a sequence of asynchronous operations more manageable and readable.

### How Promise Chaining Works

1. **Each .then() returns a new promise:**

   When you call .then() on a promise, it returns a new promise that resolves with the value returned from the .then() callback or rejects with an error thrown in the .then() callback. 2.**Next .then() waits for the previous promise:**
   The next .then() in the chain will wait for the previous promise to settle (either resolve or reject) before executing.

```js
// Simulating asynchronous operations using promises
function firstAsyncTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("First task completed");
      resolve("First result");
    }, 1000);
  });
}

function secondAsyncTask(firstResult) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Second task completed with:", firstResult);
      resolve("Second result");
    }, 1000);
  });
}

function thirdAsyncTask(secondResult) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Third task completed with:", secondResult);
      resolve("Third result");
    }, 1000);
  });
}

// Chaining promises
firstAsyncTask()
  .then((result) => {
    return secondAsyncTask(result);
  })
  .then((result) => {
    return thirdAsyncTask(result);
  })
  .then((result) => {
    console.log("All tasks completed with:", result);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
```

Explanation:

- **firstAsyncTask:** This function returns a promise that resolves after 1 second. When resolved, it logs a message and returns "First result".

- **secondAsyncTask:** This function takes the result of firstAsyncTask as an argument and returns a promise that resolves after another second. When resolved, it logs a message with the result from firstAsyncTask and returns "Second result".

- **thirdAsyncTask:** This function takes the result of secondAsyncTask as an argument and returns a promise that resolves after another second. When resolved, it logs a message with the result from secondAsyncTask and returns "Third result".

The promises are chained using `.then()` methods, ensuring each task is executed sequentially. The final `.then()` logs the final result after all tasks are completed. If any of the promises reject, the `.catch()` method will handle the error.

Promise chaining improve readability and error handling of code.

## PROMISE APIs

### Promise.all()

Promise.all() is used to handle multiple promises simultaneously. It takes an array (or any iterable) of promises and returns a single promise that resolves when all of the promises in the iterable have resolved or when the iterable contains no promises.
**in case of resolve():**
If all promises in the iterable are resolved, Promise.all() returns a single promise that resolves with an array of the resolved values, in the same order as the original promises.

```js
const promise1 = Promise.resolve(3);
const promise2 = Promise.resolve(42);
const promise3 = Promise.resolve("Hello");

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // Output: [3, 42, "Hello"]
});
```

**in case of Error () :**
If any promise in the iterable is rejected, Promise.all() returns a single promise that rejects with the reason of the first promise that was rejected.

```js
const promise1 = Promise.resolve(3);
const promise2 = Promise.reject("Error occurred");
const promise3 = Promise.resolve("Hello");

Promise.all([promise1, promise2, promise3]).catch((error) => {
  console.log(error); // Output: "Error occurred"
});
```

### Promise.allSettled()

Promise.allSettled() returns a promise that resolves after all of the given promises have either resolved or rejected, with an array of objects that each describe the outcome of each promise.

This API is useful when you want to know the result of each promise, whether it was fulfilled or rejected, without stopping at the first rejection.

```js
const promise1 = Promise.resolve(3);
const promise2 = Promise.reject("Error occurred");
const promise3 = Promise.resolve("Hello");

Promise.allSettled([promise1, promise2, promise3]).then((results) => {
  console.log(results);
  // Output:
  // [
  //   { status: "fulfilled", value: 3 },
  //   { status: "rejected", reason: "Error occurred" },
  //   { status: "fulfilled", value: "Hello" }
  // ]
});
```

### Promise.race()

Promise.race() returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects, with the value or reason from that promise.

This is useful when you want to proceed with the first settled promise and don't care about the rest.

```js
const promise1 = new Promise((resolve) => setTimeout(resolve, 500, "First"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "Second"));

Promise.race([promise1, promise2]).then((result) => {
  console.log(result); // Output: "Second"
});
```

### Promise.any()

Promise.any() takes an iterable of promises and returns a single promise that resolves as soon as any of the promises in the iterable fulfills, with the value of the fulfilled promise. If all the promises are rejected, it returns a promise that is rejected with an AggregateError, which is an array of all the rejection reasons.

This is useful when you need the first successfully resolved value, ignoring any rejections.

```js
const promise1 = Promise.reject("Error 1");
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "Second"));
const promise3 = Promise.reject("Error 2");

Promise.any([promise1, promise2, promise3])
  .then((result) => {
    console.log(result); // Output: "Second"
  })
  .catch((error) => {
    console.error(error);
  });
```

**In case all promises are rejected**

```js
const promise1 = Promise.reject("Error 1");
const promise2 = Promise.reject("Error 2");

Promise.any([promise1, promise2]).catch((error) => {
  console.log(error.errors);
  // Output: ["Error 1", "Error 2"]
});
```

# ASYNC AWAIT IN JAVASCRIPT

`async` and `await` are built-in keywords in JavaScript that provide a cleaner and more intuitive way to work with asynchronous code, especially promises. They allow you to write asynchronous code in a synchronous-like manner, making it easier to understand and maintain.

## async Functions

An async function is a function declared with the async keyword. This makes the function automatically return a promise, even if it doesn't explicitly return a promise. If the function returns a value, the promise resolves with that value. If the function throws an error, the promise is rejected with that error.

```js
async function fetchData() {
  return "Data received";
}

fetchData().then((result) => console.log(result)); // Output: "Data received"
```

## await Keyword

The `await` keyword can only be used inside an async function. It makes JavaScript wait until the promise it’s called on settles (either resolved or rejected). It pauses the execution of the async function and resumes when the promise resolves, returning the resolved value. If the promise is rejected, await throws the rejected value.

```js
async function fetchData() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data received"), 2000);
  });

  let result = await promise; // wait until the promise resolves
  console.log(result); // Output: "Data received" after 2 seconds
}

fetchData();
```

# Handling Errors with try/catch

Errors in asynchronous code handled with `async/await` can be caught using `try/catch` blocks, just like synchronous code. This makes error handling straightforward and consistent.

```js
async function fetchData() {
  try {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => reject("Failed to fetch data"), 2000);
    });

    let result = await promise;
    console.log(result);
  } catch (error) {
    console.error(error); // Output: "Failed to fetch data" after 2 seconds
  }
}

fetchData();
```

# POLYFILLS

A polyfill is a piece of code that provides a feature in older browsers or environments that do not natively support it.

In simpler terms, it's like a patch or workaround that lets you use modern JavaScript features in older browsers.

**Polyfill for filtering even numbers from an array**

```js

if (!Array.prototype.filterEvenNumbers) { // checking this function already exist in prototype of array
  Array.prototype.filterEvenNumbers = function () {
    const result = [];
    
    // Iterate over the array
    for (let i = 0; i < this.length; i++) {
      if (this[i] % 2 === 0) {
        result.push(this[i]);
      }
    }

    return result;
  };
}

// Usage of filterEvenNumbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter even numbers
const evenNumbers = numbers.filterEvenNumbers();

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
```

Now You can call filterEvenNumbers directly on any array to filter out only the even numbers . 

# JSON

JSON stands for JavaScript Object Notation. It's a lightweight data-interchange format that's easy for humans to read and write, and easy for machines to parse and generate
JSON is based on two structures:

**Object:** A collection of name/value pairs.
**Array:** An ordered list of values.

```js
{
  "name": "John Doe",
  "age": 30,
  "city": "New York",
  "hobbies": ["reading", "coding", "traveling"]
}
```

JavaScript provides built-in methods to convert between JSON and JavaScript objects:

1. **JSON.parse():** Converts a JSON string into a JavaScript object.
2. **JSON.stringify():** Converts a JavaScript object into a JSON string.

```js
// JSON string
const jsonString = '{ "name": "Alice", "age": 25 }';

// Parse JSON to JavaScript object
const person = JSON.parse(jsonString);
console.log(person.name); // Output: Alice

// Create a JavaScript object
const person2 = { name: "Bob", age: 30 };

// Convert JavaScript object to JSON string
const jsonString2 = JSON.stringify(person2);
console.log(jsonString2); // Output: {"name":"Bob","age":30}
```

# DOM MANIPULATION

The DOM is a hierarchical representation of a web page, where each element, such as headers, paragraphs, links, and images, is a node in this structure. By manipulating the DOM, you can dynamically change the content, structure, and style of a web page.

1. **Accessing DOM Elements:**

- `document.getElementById('id'):` Selects an element by its ID.
- `document.getElementsByClassName('class')`: Selects elements by their class name.
- `document.getElementsByTagName('tag'):` Selects elements by their tag name (e.g., div, p).
- `document.querySelector('selector'):` Selects the first element that matches a CSS selector.
- `document.querySelectorAll('selector'):` Selects all elements that match a CSS selector.

2. **Changing Content:**

- `element.innerHTML:` Sets or returns the HTML content of an element.
- `element.textContent:` Sets or returns the text content of an element, excluding HTML tags.

3. **Modifying Attributes:**

- `element.setAttribute('attribute', 'value'):` Sets a new attribute or changes the value of an existing attribute.
- `element.getAttribute('attribute'):` Gets the value of an attribute.
- `element.removeAttribute('attribute'):` Removes an attribute from an element.

4. **Changing Styles:**

- `element.style.property = 'value':` Directly modifies the inline CSS style of an element.
- `element.classList.add('class'):` Adds a class to an element.
- `element.classList.remove('class'):` Removes a class from an element.
- `element.classList.toggle('class'):` Toggles a class on or off.

5. **Creating and Inserting Elements:**

- `document.createElement('tag'):` Creates a new element node.
- `element.appendChild(childElement):` Appends a child element to the end of a parent element.
- `element.insertBefore(newElement, referenceElement):` Inserts a new element before a specified child of the parent element.

6. **Removing Elements:**

- `element.removeChild(childElement):` Removes a child element from a parent element.
- `element.remove():` Removes the element itself from the DOM.

# EVENTS

Events in JavaScript are actions or occurrences that happen in the browser, such as clicking a button, pressing a key, or loading a page. These events can trigger specific functions, allowing you to create interactive web experiences

## EVENT PROPAGATION

Event propagation is how events travel through the DOM tree. When an event is triggered on a particular element, it doesn't just stay on that element; it can move up or down the DOM tree. There are two main phases of event propagation:

1. **Capturing Phase (Event Capture):**
   The event starts from the root of the DOM tree and travels down to the target element. This phase is less commonly used but can be useful for intercepting events before they reach their target.

2. **Bubbling Phase (Event Bubble):**
   After the event reaches the target element, it starts bubbling back up to the root, triggering the same event on each ancestor element. Event bubbling is the more common phase in JavaScript event handling.

### Stopping Event Propagation

Sometimes, you may want to prevent an event from propagating up or down the DOM tree

- **event.stopPropagation():** Stops the event from bubbling up or capturing down the DOM tree.

```js
document.getElementById("child").addEventListener("click", function (event) {
  console.log("Button clicked");
  event.stopPropagation(); // Prevents the event from bubbling up to the parent
});
```

## Event Delegation

Event delegation is a technique where you attach a single event listener to a parent element instead of multiple listeners to each child element. This is useful when you have many elements, like a list of items, and want to handle events for all of them.


# Type Casting
Type casting in JavaScript refers to the process of converting a value from one data type to another.

## Implicit Type Casting (Type Coercion)
Implicit type casting, also known as type coercion, occurs automatically when JavaScript converts a value from one type to another as needed. This happens when performing operations between different types, and JavaScript tries to make sense of the operation by converting types automatically

ex:

```js
let result = '5' + 3;
console.log(result); // Output: '53'
```
Here number `3` is implicitly converted to a string and concatenated with `'5'`, resulting in `'53'`.

## Explicit Type Casting (Type Conversion)
Explicit type casting occurs when you manually convert a value from one type to another using JavaScript functions or methods. This gives you more control over how the conversion is performed.

ex:

```js
let str = '456';
let num = Number(str);
console.log(num); // Output: 456
```

Here string `'456'` explicitly converted to a number using `Number` method.


# MEMOIZATION
Memoization is an optimization technique used to improve the performance of functions by caching their results. It avoids redundant calculations by storing previously computed values and reusing them when the same inputs occur again.

## How Memoization Works

1. **Cache Results:** When a function is called with a particular set of arguments, the result is stored in a cache (e.g., an object or Map).

2. **Check Cache:** On subsequent calls with the same arguments, the function checks the cache for a stored result instead of recalculating it.
3. **Return Cached Value:** If a cached result is found, it is returned immediately. If not, the function computes the result, stores it in the cache, and then returns it.

## BENEFITS

* **Performance Improvement:** Reduces the time complexity of functions with repetitive calculations by avoiding redundant work

* **Efficiency:** Especially useful for functions with expensive or time-consuming operations, such as recursive algorithms or API calls

ex:

**Memoization for a function that calculates the Fibonacci sequence**

```js
function memoize(fn) {
  const cache = new Map();
  
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

// Fibonacci function without memoization
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Memoized Fibonacci function
const memoizedFibonacci = memoize(fibonacci);

console.log(memoizedFibonacci(10)); // Calculates and caches results
console.log(memoizedFibonacci(10)); // Returns cached result
```

# DEBOUNCING 

Debouncing is a way of delaying the execution of a function until a certain amount of time has passed since the last time it was called. This can be useful for scenarios where we want to avoid unnecessary or repeated function calls that might be expensive or time-consuming.

ex:

```js
const debounce = (mainFunction, delay) => {
  // Declare a variable called 'timer' to store the timer ID
  let timer;

  // Return an anonymous function that takes in any number of arguments
  return function (...args) {
    // Clear the previous timer to prevent the execution of 'mainFunction'
    clearTimeout(timer);

    // Set a new timer that will execute 'mainFunction' after the specified delay
    timer = setTimeout(() => {
      mainFunction(...args);
    }, delay);
  };
};
```

## Benefits of Debouncing

* **Performance Improvement:** Reduces the number of function executions by grouping multiple rapid triggers into a single execution.

* **Resource Efficiency:** Helps avoid unnecessary computations or API calls, improving overall application performance.

# THROTTLING
Throttling is a technique that limits how often a function can be called in a given period of time. It is useful for improving the performance and responsiveness of web pages that have event listeners that trigger heavy or expensive operations, such as animations, scrolling, resizing, fetching data, etc.

Throttling can improve the performance and user experience of web pages by reducing the number of unnecessary or redundant operations. It can also prevent some issues such as:

* Overloading the server or the browser with too many requests or calculations
* Exceeding the rate limits or quotas of APIs or services
* Wasting bandwidth or resources on operations that are not visible or relevant to the user
* Creating janky or laggy animations or interactions

ex:

```js
// Define a function that fetches some data from an API
function fetchData() {
  console.log("Fetching data...");
  // Simulate an API call with a random delay
  setTimeout(() => {
    console.log("Data fetched!");
  }, Math.random() * 1000);
}

// Throttle the fetchData function with a delay of 5000 ms
const throttledFetchData = throttle(fetchData, 5000);

// Add an event listener to the window scroll event that calls the throttledFetchData function
window.addEventListener("scroll", throttledFetchData);
```

Use Throttling when :

* Fetching data from an API or a database when the user scrolls, resizes, or types
* Updating or animating elements on the page when the user scrolls, resizes, or moves the mouse
* Logging or tracking user actions or events when they occur frequently

##Lazy loading

# 
**Please also refer to these topics to master JavaScript also practice practice more...** ,

*Composition*

*flat & flat-map* 

*Babel and Webpack*

*enum*

*Promisify*

*Progressive Web Apps (PWAs)*

*Circular References in JavaScript Objects*

*Decorators*

*Starvation in JavaScript*

*Memory Heap*

*Just-In-Time (JIT) Compilation*
