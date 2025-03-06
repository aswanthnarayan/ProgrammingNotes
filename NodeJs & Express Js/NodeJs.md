# Node.js

**Node.js** is a popular, open-source platform that enables developers to build scalable and efficient applications using JavaScript. Unlike traditional JavaScript, which is primarily used in web browsers, Node.js allows you to execute JavaScript code outside the browser environment.

## Key Features of Node.js

* **Cross-Platform Compatibility:** Node.js can run on various operating systems, including Windows, macOS, and Linux.

* **Event-Driven Architecture:** It employs an asynchronous, non-blocking I/O model, making it ideal for handling concurrent tasks efficiently.

* **Package Manager (npm):** Node.js comes with npm, a powerful package manager that simplifies the process of installing and managing third-party modules.

* **V8 Engine:** Leveraging the V8 JavaScript engine (also used by Google Chrome), Node.js delivers high performance and efficient code execution.

* **Lower-Level Capabilities:** Node.js provides access to lower-level system functionalities, such as file system operations and network communication, through C++ bindings.

## How Node.js Works:

* **JavaScript Code Execution:** When you run a Node.js application, the JavaScript code is parsed and executed by the V8 engine.

* **Asynchronous Operations:** Node.js uses an event-driven model to handle asynchronous operations efficiently. Instead of blocking the main thread, it schedules callbacks to be executed when the operation is complete.

* **C++ Bindings:** For tasks that require direct interaction with the operating system or hardware, Node.js utilizes C++ bindings to provide access to lower-level APIs.

## Benefits of Using Node.js:

**Scalability:** Node.js's event-driven architecture and non-blocking I/O make it well-suited for handling high-traffic applications.

* **Performance:** The V8 engine's efficient compilation and execution of JavaScript code contribute to Node.js's performance.

* **Large Ecosystem:** The extensive npm ecosystem offers a vast collection of reusable modules, saving developers time and effort.

* **Full-Stack Development:** Node.js can be used for both the front-end and back-end of web applications, enabling consistent development workflows.

![NodeJS Runtime](https://raw.githubusercontent.com/aswanthnarayan/Brocamp/main/Daigrams/NodeJS_Runtime.png)


## JavaScript Engine

A JavaScript engine converts JavaScript code into machine code, enabling the computer to perform specific tasks.

## JavaScript Runtime

A JavaScript runtime is an environment that provides all the necessary components to run a JavaScript program. Every browser has a JavaScript engine, So the browser acts as the runtime environment. However, with Node.js, developers can execute JavaScript outside the browser, allowing them to access resources and perform tasks typically reserved for server-side programming languages.

## Browser vs. Node.js

In the browser, most of the time, we interact with the DOM or other Web Platform APIs like Cookies. In contrast, Node.js provides APIs through its modules, such as filesystem access, which are not available in the browser.

# EVENT - DRIVEN - ARCHITECTURE

Event-Driven Architecture (EDA) is a software design pattern where applications react to events rather than following a predefined flow. 

## How it Works:

* **Event Occurs**: A system generates an event, such as a product purchase or a sensor reading change.   
* **Event Published**: The event producer sends the event to an event broker.   
* **Event Distributed**: The event broker routes the event to interested consumers based on predefined subscriptions.
* **Event Consumed**: Consumers process the event and perform actions accordingly.

## Benefits of EDA

* **Decoupling**: Systems become independent, improving scalability and resilience.
* **Real-time Processing**: Events can be processed immediately, enabling faster responses.   
* **Scalability**: EDA can handle high volumes of events efficiently.   
* **Flexibility**: New systems can be easily added or removed without affecting existing ones.
* **Improved Efficiency**: By focusing on events, systems can optimize resource utilization.

# MODULE VIEW CONTROLLER (MVC)

MVC is a software architecture pattern commonly used for developing user interfaces.
It divides the related program logic into three interconnected parts:

## Model

* Represents the data and business logic.
* Handles data access, validation, and business rules.   
* Independent of the user interface.   

## View

* Responsible for presenting the data to the user.   
* Defines the visual representation of the data.   
* Updates the display based on changes in the model.

## Controller

* Handles user interactions and updates the model accordingly.   
* Acts as an intermediary between the model and the view.   
* Manages user input and directs it to the appropriate model or view component.   

![mvc](https://raw.githubusercontent.com/aswanthnarayan/Brocamp/main/Daigrams/mvc.png)


# MODULES

A module is a encapsulated and reusable chunk of code that has its own context.
In Node Js each file is treated as a separate modules

* Modules help you avoid naming conflicts by creating a separate scope for your variables and functions.
* Make your code more modular and maintainable by breaking it down into smaller and simpler units
* Enable code reuse by allowing you to import and export functionality from other modules

## CommonJS

CommonJS is a module standard used in Node.js that defines how modules should be structured and shared. It allows developers to break down code into reusable components by exporting and importing functions, objects, or variables from one module to another.


## module.exports

`module.exports` is an in build object that allows to export functions , objects or variable from one module to another
we can export multiple thing as properties of object or a single item directly
other modules can access these export using `require` function

```js
// add.js

const add = (a, b) => {
  return a + b;
};

module.exports = add;  // Exports the `add` function

```

```js
//index.js

const add = require("./add")

console.log("Hello world")

const sum = add (1,2);

console.log(sum)

const sum2 = add (8,2);

console.log(sum2)


```

the output will be

```
Hello world
3
10

```

- when we access a module using `require` from `module.export` we don't need to use same name as export , the name can be any thing while requiring

in this case

```js

const addFunction = require("./add");

```

this also works fine . This type of export is known as a **default export**

You can Pass Multiple functions also using `module.exports`

```js
// math.js

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

//1
module.exports = {
  add: add,
  subtract: subtract,
};

//2 or using Object destructuring
module.exports = { add, subtract };
```

Now, in another file, you can import and use these functions:

```js
// app.js

const math = require("./math");

console.log(math.add(5, 3)); // Outputs: 8
console.log(math.subtract(5, 3)); // Outputs: 2
```

## exports

`exports` is a short hand or ails to `module.exports` . You can use it to add properties or methods to the `module.exports` object.

```js
// greetings.js

exports.sayHello = function (name) {
  return `Hello, ${name}!`;
};

exports.sayGoodbye = function (name) {
  return `Goodbye, ${name}!`;
};
```

```js
// app.js

const greetings = require("./greetings");
console.log(greetings.sayHello("Alice")); // Outputs: Hello, Alice!
console.log(greetings.sayGoodbye("Bob")); // Outputs: Goodbye, Bob!
```

- `exports` and `module.exports` both point to the same object

- The key deference is Assigning a new value to `exports` break connection to `module.exports`

- Assigning a New Value to exports breaks the link between exports and module.exports, so only the original module.exports object (which is likely empty) gets exported.

```js
// greetings.js

module.exports = function (name) {
  return `Hello, ${name}!`;
};
```

```js
// app.js

const greetings = require("./greetings");
console.log(greetings); // Outputs: {}
```

In the example above, exports is reassigned, so it no longer points to the same object as module.exports. As a result, the `module.exports` an empty object.

- So Always use `module.exports` if you want to replace the entire exported value with a new function, object, or class

## MODULE SCOPE

Each module in Node.js has its own scope. Before a module code is executed Node.js will wrap it inside a function Wrapper that provide a module scope

This method help to avoid conflicts while running code,
Also the proper encapsulation and reusability is guaranteed with it

To create the module scope, Node.js uses an **Immediately Invoked Function Expression (IIFE)** method internally.

**example:**

```js
//batman.js

const SuperHero = "Batman";

console.log(SuperHero);
```

```js
//superman.js

const SuperHero = "Superman";

console.log(SuperHero);
```

by export this in new file

```js
//index.js

require("./batman");
require("./superman");
```

the output will be

```
Batman
Superman

```

The same const variable naming conflict not affected in here because of module scoping

## MODULE WRAPPER

In Node.js each module is wrapped in a IIFE function before executed , this known as Module wrapper .
The purpose of Module wrapper is to provide a private scope for each module
It prevent variable and functions from leaking into global scope and conflicting with other modules

when we create a module and try to execute internally its wrapped like this

```js
(function (exports, require, module, __filename, __dirname) {
  // Our code
});
```

1. **exports:** A reference to `module.exports` that allow us to export functions,objects or variables

2. **require:** A function to import modules or JSON files into the current modules

3. **module:** A reference to the current module , enables to replace `module.export` with custom object or function

4. **\_\_filename:** The absolute path to the current module file.

5. **\_\_dirname:** The directory name of the current module file.

## MODULE CACHING

Module caching is an mechanism that help to improve performance by loaded modules in memory after they first required.

```js

//app.js

module.export = {
    number:10;
}

```

```js
//index.js

const exportedObj = require("./app");

console.log(exportedObj.number); // output 10

exportedObj.number += 1;

const exportedObj2 = require("./app");

console.log(exportedObj2.number); // output 11
```

although its a great thing for performance in certain cases we need to avoid module caching
for that we can return the `module.export` as a function so for each instance have separate memory

**example:**

```js

//app.js

module.exports = function(){
   return{
    number:10
}
}

```

```js
//index.js

const exportedObj = require("./app")(); // Call the function to get the object

console.log(exportedObj.number); // Output: 10

exportedObj.number += 1;

const exportedObj2 = require("./app")(); // Call the function again to get a new object

console.log(exportedObj2.number); // Output: 10



```

In this case, each instance has separate memory, so changes to `exportedObj` do not affect `exportedObj2`.

## ES MODULES

ES modules (ECMAScript modules) in Node.js represent a modern and standardized way to organize and manage code in JavaScript. They are designed to work seamlessly across browsers and server environments like Node.js

To use ES6 Module in your Node.js code you must set `"type":"module"` in your `package.json` or use `mjs` as your file extension 


## IMporting &  Exporting Using ES MODULES

ES modules use `import` to bring in dependencies and `export` to expose functions, objects, or values from a module.
This module system is supported natively in modern browsers and Node.js

### Basic Named Exports and Imports

With named exports, you can export multiple functions, objects, or variables from a module. When importing, you must use the same names as those used in the export.

**example:**

```mjs
// math.mjs
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

```js
// main.mjs
import { add, subtract } from "./math.js";

console.log(add(2, 3)); // Output: 5
console.log(subtract(5, 3)); // Output: 2
```

### Default Exports

Each module can have one default export. A default export can be imported without using curly braces and can be given any name.

```mjs
// calculator.mjs
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};

export default calculator;
```

```js
// main.mjs
import calculator from "./calculator.js";

console.log(calculator.add(2, 3)); // Output: 5
console.log(calculator.subtract(5, 3)); // Output: 2
```

### Named Exports

Named exports allow you to export multiple values from a module, which can be selectively imported using the exact name as in the export statement

```mjs
// utils.mjs
export const PI = 3.14159;
export function circleArea(radius) {
  return PI * radius * radius;
}
```

```js
// main.mjs
import { PI, circleArea } from "./utils.js";

console.log(PI); // Output: 3.14159
console.log(circleArea(5)); // Output: 78.53975
```

## IMPORTING JSON in NODE

While Exporting JSON (JavaScript Object Notation) file in Node.js Node automatically parse JSON file into javascript Object , so we can access this using object properties

```js
//data.json
{
   "name":"Aswanth",
    "age":26
}

```

```js
//index.json

const data = require("./data.json");

console.log(data);

// output will because

// {
//  name:"Aswanth",
//   age:26
// }
```

while importing json file always use `.json` notation , because if there a `js` file with same name in the folder the nod will give precedence to `.js` file .


# TYPES OF MODULES

1. **LOCAL MODULE:** Custom Modules that are created in our application
2. **BUILT-IN-MODULES** Modules that come with the Node.js installation
3. **THIRD PARTY MODULES:** These are modules that are developed by other developers and published on npm, the Node.js package manager

# LOCAL MODULES

These are custom modules that you create in your Node.js application. You can load them by using the **require()** function with the relative or absolute path to the module file as the argument.

1. 

```js
//index.js

console.log("Hello world");
```

2. 

```js
//add.js

const add = (a, b) => {
  return a + b;
};

const sum = add(1, 2);

console.log(sum);
```

Consider these two as a separate module , we can access the `add.js` inside the `index.js` using inbuilt `**require()**` function by Node.js.

3. 

```js
//index.js

require("./add.js"); //or require("./add")

console.log("Hello world");
```

the output of executing `index.js` will be

```js
//output
3
Hello world

```

# BUILT IN MODULES

Built-in Modules are modules Node.js ships with . It also referred as Core modules .
You need to import built-in modules before use

There are many Built-in modules but these are the 5 essential

1. path
2. events
3. fs
4. stream
5. http

## PATH MODULE

Path module provides utilities for working with fie and directory paths
To use the path module, you need to require item

```js
const path = require("node:path");
```

**node:Protocol**

Even though it is not necessary to use `node` specifier while import Built-in modules , but it considered as a good practice

### Methods of Path Modules

1. **path.basename(path):**
   Returns the last portion of a path (the file name or directory name).

   **Example:**

```js
const filePath = "/user/local/bin/file.txt";
console.log(path.basename(filePath)); // Output: 'file.txt'
```

2. **path.dirname(path)**
   Returns the directory name of a path, excluding the file name.

```js
const filePath = "/user/local/bin/file.txt";
console.log(path.dirname(filePath)); // Output: '/user/local/bin'
```

3. **path.extname(path):**
   Returns the extension of the file in the path (e.g.,` .txt`, `.js`).

```js
const filePath = "/user/local/bin/file.txt";
console.log(path.extname(filePath)); // Output: '.txt'
```

4. **path.join([...paths]):**
   Joins multiple path segments into one single path. It handles and removes unnecessary or redundant slashes.

```js
const fullPath = path.join("/user", "local", "bin", "file.txt");
console.log(fullPath); // Output: '/user/local/bin/file.txt'
```

5. **path.resolve([...paths]):**
   Resolves a sequence of paths into an absolute path. It works by processing the paths from right to left, appending each to the preceding ones until an absolute path is generated.

```js
const absolutePath = path.resolve("user", "local", "bin");
console.log(absolutePath); // Output: '/current/working/directory/user/local/bin'
```

6. **path.isAbsolute(path):**
   Returns `true` if the given path is an absolute path, and false if it's a relative path.

```js
console.log(path.isAbsolute("/user/local/bin")); // Output: true
console.log(path.isAbsolute("local/bin")); // Output: false
```

7. **path.parse(path):**
   Returns an object representing significant components of the path (`root`, `dir`, `base`, `ext`, and name).

```js
const parsedPath = path.parse("/user/local/bin/file.txt");
console.log(parsedPath);
/*
Output:
{
  root: '/',
  dir: '/user/local/bin',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}
*/
```

8. **path.format(pathObject):**
   Returns a path string from an object generated by path.parse().

```js
const pathObject = {
  root: "/",
  dir: "/user/local/bin",
  base: "file.txt",
  ext: ".txt",
  name: "file",
};
const formattedPath = path.format(pathObject);
console.log(formattedPath); // Output: '/user/local/bin/file.txt'
```

## EVENTS MODULE

The events modules allow us to work with events in Node.js
An event is an action or an occurrence that happened in our application that we can respond to
Using events module , we can dispatch our own custom events and respond to those custom events in a non blocking manner

### Event Emitter

Event module returns a class called EventEmitter which encapsulate functionality to emit events and respond to events Event emitter is an object

We can register event listeners to the `emitter` object using `on` method.

Using `emit` method in `emitter` object we can call the listeners with provided arguments.

there are many method we can attach to `emitter` object.

```js
const EventEmitter = require("node:events");

// Create an instance of EventEmitter
const emitter = new EventEmitter();

// Define an event listener for the 'greet' event
emitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit the 'greet' event
emitter.emit("greet", "Aswanth");

// Output: Hello, Aswanth!
```

### Major Methods of EventEmitter

1. **emitter.on(eventName, listener):**
   Adds a listener function that will be called whenever the specified event is emitted.

```js
emitter.on("data", (data) => {
  console.log(`Received data: ${data}`);
});
```

2. **emitter.emit(eventName, [...args]):**
   Emits an event, causing all listeners attached to that event to be called with the provided arguments.

```js
emitter.emit("data", "This is some data");
```

3. **emitter.once(eventName, listener):**
   Adds a one-time listener function for the specified event. The listener is invoked the first time the event is emitted and then removed.

```js
emitter.once("connection", () => {
  console.log("This will be logged only once.");
});
```

4. **emitter.removeListener(eventName, listener):**
   Removes a listener that was previously registered for the specified event.

```js
const callback = () => console.log("This should not be called");
emitter.on("removeTest", callback);
emitter.removeListener("removeTest", callback);
emitter.emit("removeTest"); // No output, as the listener was removed
```

5. **emitter.removeAllListeners([eventName]):**
   Removes all listeners, or those of the specified event.

```js
emitter.removeAllListeners("data");
```

6. **emitter.setMaxListeners(n):**
   By default, EventEmitter will print a warning if more than 10 listeners are added for a particular event. This method can be used to increase or decrease this limit.

```js
emitter.setMaxListeners(20);
```

7. **emitter.getMaxListeners():**
   Returns the current maximum listener limit.

```js
console.log(emitter.getMaxListeners()); // Output: 20 (after using setMaxListeners(20))
```

8. **emitter.listenerCount(eventName):**
   Returns the number of listeners listening to the specified event.

```js
console.log(emitter.listenerCount("greet")); // Output: 1 (as one listener was added)
```

### Extending from EventEmitter

In Node.js, we can extend the EventEmitter class to create custom classes that can emit and listen to events. This allows you to define your own event-driven logic while inheriting the capabilities of `EventEmitter`.

```js
//pizzashop.js

const EventEmitter = require("node:events");

class PizzaShop extends EventEmitter {
  constructor() {
    super();
    this.orderNumber = 0;
  }

  order(size, topping) {
    this.orderNumber++;
    this.emit("order", size, topping);
  }

  displayOrderNumber() {
    console.log(`Current order number = ${this.orderNumber}`);
  }
}

module.exports = PizzaShop;
```

```js
//index.js

const PizzaShop = require("./pizzashop");

const pizzashop = new PizzaShop();

pizzashop.on("order", (size, topping) => {
  console.log(`Order received, baking a ${size} pizza with ${topping} topping`);
});

pizzashop.order("large", "onions");
pizzashop.displayOrderNumber();
```

the output will be

```
Order received , baking a large pizza with onions topping
Current order Number = 1

```


## FS MODULE

The File System (`fs`) module allows you to work with the file system on your computer. The fs module has methods that perform both synchronously and asynchronously. Synchronous methods will block (wait) until the file operation is completed before moving to the next line. That's why you should always consider asynchronous methods.


**CHARACTER SET**

Character sets are predefined lists of characters represented by numbers
Popular characters sets are UNICODE and ASCII

**CHARACTER ENCODING**

Character encoding dictates how to represent a number in a character set as binary data before it can be stored in a computer. It also determines how many bits are used to represent these numbers.
Example: UTF-8

### METHODS OF FS MODULE

1. **Read (`readFileSync / ) :**
   Used to read the contents of a file.

```txt
//Example.txt

Hello World

```

```js
/// index.js

const fs = require("node:fs");

console.log("First");

// Synchronous method
const data = fs.readFileSync("Example.txt", "utf8");
console.log(data);

console.log("Second");

// Asynchronous method
fs.readFile("Example.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

console.log("Third");
```

The out put is

```
First
Hello World
Second
Third
Hello World

```

2. **Write (writeFileSync / writeFile)**

Used to write data to a file. If the file doesn’t exist, it creates the file; otherwise, it overwrites the file.

```js
// index.js

const fs = require("node:fs");

// Synchronous method
fs.writeFileSync("Example.txt", "This is a synchronous write operation.");
console.log("File written successfully (synchronous).");

// Asynchronous method
fs.writeFile(
  "Example.txt",
  "This is an asynchronous write operation.",
  (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log("File written successfully (asynchronous).");
  }
);
```

The output is:

```
File written successfully (synchronous).
File written successfully (asynchronous).

```

3. **Append (appendFileSync / appendFile)**
   Used to append data to a file. If the file doesn’t exist, it creates a new file.

```js
// index.js

const fs = require("node:fs");

// Synchronous method
fs.appendFileSync("Example.txt", " This is appended text (sync).");
console.log("Text appended successfully (synchronous).");

// Asynchronous method
fs.appendFile("Example.txt", " This is appended text (async).", (err) => {
  if (err) {
    console.error("Error appending to file:", err);
    return;
  }
  console.log("Text appended successfully (asynchronous).");
});
```

The output is:

```
Text appended successfully (synchronous).
Text appended successfully (asynchronous).

```

4. **Rename (renameSync / rename)**
   Used to rename or move a file.

```js
// index.js

const fs = require("node:fs");

// Synchronous method
fs.renameSync("Example.txt", "RenamedExample.txt");
console.log("File renamed successfully (synchronous).");

// Asynchronous method
fs.rename("RenamedExample.txt", "Example.txt", (err) => {
  if (err) {
    console.error("Error renaming file:", err);
    return;
  }
  console.log("File renamed successfully (asynchronous).");
});
```

The output is:

```
File renamed successfully (synchronous).
File renamed successfully (asynchronous).

```

5. **Delete (unlinkSync / unlink)**
   Used to delete a file.

```js
// index.js

const fs = require("node:fs");

// Synchronous method
fs.unlinkSync("Example.txt");
console.log("File deleted successfully (synchronous).");

// Asynchronous method
fs.unlink("Example.txt", (err) => {
  if (err) {
    console.error("Error deleting file:", err);
    return;
  }
  console.log("File deleted successfully (asynchronous).");
});
```

The output is:

```
File deleted successfully (synchronous).
File deleted successfully (asynchronous).

```

6. **Create Directory (mkdirSync / mkdir)**
   Used to create a new directory.

```js
// index.js

const fs = require("node:fs");

// Synchronous method
fs.mkdirSync("NewDirectory");
console.log("Directory created successfully (synchronous).");

// Asynchronous method
fs.mkdir("NewDirectory", (err) => {
  if (err) {
    console.error("Error creating directory:", err);
    return;
  }
  console.log("Directory created successfully (asynchronous).");
});
```

The output is:

```
Directory created successfully (synchronous).
Directory created successfully (asynchronous).

```

7. **Read Directory (readdirSync / readdir)**
   Used to read the contents of a directory.

```js
// index.js

const fs = require("node:fs");

// Synchronous method
const files = fs.readdirSync(".");
console.log("Directory contents (sync):", files);

// Asynchronous method
fs.readdir(".", (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }
  console.log("Directory contents (async):", files);
});
```

The output is:

```
Directory contents (sync): [ 'NewDirectory', 'index.js' ]
Directory contents (async): [ 'NewDirectory', 'index.js' ]

```


## HTTP MODULE

The HTTP module in Node.js allows you to create web servers that can handle HTTP requests and send responses. It's the core module used for building web applications in Node.js.

### HOW THE WEB WORKS

- Computers connected to internet called clients and servers.
- Clients are internet-connected devices such as computers or mobile along with web-accessing software available on those devices such as web browsers
- Servers on the other hand are computers that store web pages, sites , or apps

![client-server-model](https://raw.githubusercontent.com/aswanthnarayan/Brocamp/main/Daigrams/client-server-model.png)

### HTTP (Hypertext Transfer Protocol)

- A protocol that defines a format for clients and servers to speak to each other.
- A client sends an HTTP request and the server responds with an HTTP response

### HTTP and Node.js

- We can create a web server using Node.js
- Node.js has access to operating system functionality like networking
- Node has an event loop to run tasks asynchronously and its perfect for creating web servers that can simultaneously handle large volume of request
- Node server we create should still respect HTTP format


### FIRST NODE SERVER

```js
const http = require("node:http");

// Create a server that listens for incoming requests
const server = http.createServer((req, res) => {
  // Set the status code to 200 (OK) and content-type to plain text
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send a simple "Hello World" response and close the connection
  res.end("Hello World");
});

// Make the server listen on port 3000
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

- This code creates a basic web server using the http module.
- The server listens on port 3000 and responds with "Hello World" to any incoming HTTP request.
- The `server.listen()` method is correctly closed with a callback that logs the server's status.

### PASS OBJECT INTO SERVER

In Node.js, you cannot send an object directly in the response. The server expects a string format, so if you want to send an object, you must first convert it to a JSON string using `JSON.stringify()`

```js
const http = require("node:http");

// Create a server that listens for incoming requests
const server = http.createServer((req, res) => {
  const Person = {
    name: "Aswanth",
    lastname: "CK",
  };

  // Set the status code to 200 (OK) and content-type to application/json
  res.writeHead(200, { "Content-Type": "application/json" });

  // Send the stringified object as a response and close the connection
  res.end(JSON.stringify(Person));
});

// Make the server listen on port 3000
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

- Setting the Content-Type to "application/json" tells the client that the response is in JSON format, which is important for the client to correctly interpret the data.

### PASS OBJECT INTO SERVER

```js
const http = require("node:http");
const fs = require("node:fs");

// Create a server that listens for incoming requests
const server = http.createServer((req, res) => {
  // Set the status code to 200 (OK) and content-type to HTML
  res.writeHead(200, { "Content-Type": "text/html" });

  // Read the HTML file synchronously and send it as a response
  const html = fs.readFileSync("./index.html", "utf8");

  // Send the HTML file content as the response and close the connection
  res.end(html);
});

// Make the server listen on port 3000
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

For more performance we can stream HTML file directly to the response using the pipe() method. This method is more memory-efficient, especially for large files, because it doesn't load the entire file into memory at once. Instead, it sends the data in chunks as it reads from the file.

```js
const http = require("node:http");
const fs = require("node:fs");

// Create a server that listens for incoming requests
const server = http.createServer((req, res) => {
  // Set the status code to 200 (OK) and content-type to HTML
  res.writeHead(200, { "Content-Type": "text/html" });

  // Stream the HTML file content to the response using piping
  fs.createReadStream(__dirname + "/index.html").pipe(res);
});

// Make the server listen on port 3000
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

### HTTP ROUTING

In this Node.js application, we set up a basic HTTP server with simple routing to handle different URL paths. The server listens for incoming requests on port 3000 and responds with different content based on the URL path requested by the client.

```js
const http = require("node:http");

// Create a server that listens for incoming requests
const server = http.createServer((req, res) => {
  // Routing logic
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About Page");
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ name: "Aswanth", age: 26 }));
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Error: Page Not Found</h1>");
  }
});

// Make the server listen on port 3000
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

**req.method** 
Contains the HTTP method used for the request, such as GET, POST, PUT, PATCH, or DELETE. This allows the server to respond differently based on the method.

```js 

const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    // Log the HTTP method and URL
    console.log(`HTTP Method: ${method}, URL: ${url}`);

    // Routing logic based on URL and method
    if (url === '/example' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Handling GET request for /example');
    } else if (url === '/example' && method === 'POST') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Handling POST request for /example');
    } else if (url === '/example' && method === 'PUT') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Handling PUT request for /example');
    } else if (url === '/example' && method === 'DELETE') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Handling DELETE request for /example');
    } else if (url === '/' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the homepage');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

// Server listens on port 3000
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

```

## PROMISE MODULE

The Promise module in Node.js provides a way to handle asynchronous operations more elegantly, avoiding the so-called "callback hell" or "pyramid of doom.

```js
const fs = require("fs").promises; // Using the built-in promise version of fs

// Reading a file using Promises
fs.readFile("example.txt", "utf8")
  .then((data) => {
    console.log("File content:", data);
  })
  .catch((error) => {
    console.error("Error reading file:", error);
  });
```




## STREAM MODULE

A stream is a sequence of data that is being moved from one point to another over time

**Ex:**

- A stream of data being transferred from one file to another with the same computer
- A stream of data being transferred from one file to another file within the same computer

In the context of `Node.js`, the idea is to process streams of data in chunks as they arrive instead of waiting for the entire data to be available before processing.

ex : Watching a video on Youtube

Stream principle allow to prevent unnecessary data downloads and memory usage 


### TYPES OF STREAMS

streams are a powerful mechanism for handling reading and writing data. They allow data to be processed piece by piece, which is particularly useful for handling large files or data that is being received in chunks, such as from a network.

1. **Readable Streams**

   Readable streams are used to read data from a source in chunks. Examples include reading from files or network sockets. You can listen to events like `data`, `end`, and `error` to handle the data as it is received, detect when the stream has finished, or catch any errors that occur.

```js
const fs = require("node:fs");

const readableStream = fs.createReadStream("input.txt", { encoding: "utf8" });

readableStream.on("data", (chunk) => {
  console.log("New chunk received:");
  console.log(chunk);
});

readableStream.on("end", () => {
  console.log("No more data to read.");
});

readableStream.on("error", (err) => {
  console.error("An error occurred:", err);
});
```

In this example if the `input.txt` contains "Hello World," the above code will read it in chunks and log each chunk to the console.

2. **Writable Streams**

   A Writable stream is used to write data to a destination, such as a file, network socket, or another output. You can write data to the stream in chunks using the `write` method, and end the stream using the `end` method.

```js
const fs = require("node:fs");

const writableStream = fs.createWriteStream("output.txt", { encoding: "utf8" });

writableStream.write("Hello, ");
writableStream.write("World!");
writableStream.end();

writableStream.on("finish", () => {
  console.log("All data has been written to the file.");
});

writableStream.on("error", (err) => {
  console.error("Error writing to the file:", err);
});
```

In this example using we can create chunks of data inside the output.txt using writable stream


3. **Duplex Streams**
A Duplex stream is a stream that is both readable and writable. This means it can be used for both reading and writing data. A common example of a duplex stream is a network socket, which allows data to be both sent and received

```js 
const { Duplex } = require('stream');

const duplexStream = new Duplex({
    write(chunk, encoding, callback) {
        console.log(`Writing: ${chunk.toString()}`);
        callback();
    },
    read(size) {
        this.push('Some data');
        this.push(null); // No more data
    }
});

duplexStream.write('Hello, World!');
duplexStream.on('data', chunk => {
    console.log(`Reading: ${chunk.toString()}`);
});
```
4. **Transform Streams**

A Transform stream is a type of duplex stream where the output is computed based on the input. It is both readable and writable, but the data is modified or transformed as it passes through the stream. An example is a zlib stream for compressing data, where input data is compressed before being output.

```js

const { Transform } = require('stream');

const transformStream = new Transform({
    transform(chunk, encoding, callback) {
        const transformedChunk = chunk.toString().toUpperCase();
        this.push(transformedChunk);
        callback();
    }
});

transformStream.write('hello');
transformStream.write(' world');
transformStream.end();

transformStream.on('data', chunk => {
    console.log(chunk.toString()); // Outputs: 'HELLO WORLD'
});

```

# PIPES

In Node.js, pipes are a mechanism that allows you to connect the output of one stream (usually a readable stream) to the input of another stream (usually a writable stream). This process of connecting streams is called "piping.

![NodeJS Pipes](https://raw.githubusercontent.com/aswanthnarayan/Brocamp/main/Daigrams/pipes.png)

Pipes in Node.js are created using the pipe() method, which is available on all readable streams. When you call pipe() on a readable stream, it automatically handles the flow of data from the readable stream to the writable stream,including handling **backpressure** to prevent overwhelming the writable stream ,making it simpler to work with streams.

**Backpressure** is a mechanism in Node.js that deals with the flow of data between a readable stream and a writable stream to ensure that the writable stream isn't overwhelmed by the data coming from the readable stream.

```js
const fs = require("node:fs");

// Create a readable stream for the source file
const readableStream = fs.createReadStream("source.txt", { encoding: "utf8" });

// Create a writable stream for the destination file
const writableStream = fs.createWriteStream("destination.txt", {
  encoding: "utf8",
});

// Pipe the readable stream into the writable stream
readableStream.pipe(writableStream);

writableStream.on("finish", () => {
  console.log("File has been copied successfully.");
});

writableStream.on("error", (err) => {
  console.error("An error occurred:", err);
});
```

In the above example, if the `source.txt` file contains the text "Hello World," it will be passed to `destination.txt` in chunks using the pipe() method. This process ensures efficient and straightforward file copying while handling backpressure automatically.

# BUFFERS

Node.js cannot control the pace at which data arrives in a stream. It can only decide when to send data for processing. If data is already processed or there’s too little data to process, Node.js places the arriving data in a `buffer`.

A `buffer` is an intentionally small area that Node.js maintains in the runtime to temporarily hold stream data before it’s processed.

ex: When you are streaming the video on youtube

- If the connection is fast enough, the stream's speed will fill up the buffer quickly, and it will send the data for processing. This repeats until the stream is finished.

- If the connection is slow, after processing the first chunk of data, YouTube might show a spinner. This spinner indicates that it is waiting for more data to arrive. Once the buffer is filled with the next chunk of data, it sends it for processing, and the video resumes playing.

As the video continues to play, more data is stored in the `buffer` until the stream of data is completed.

# LIBUV

- `libuv` is a cross platform open source library written in C language
- It handles asynchronous non-blocking operations in Node.js
- libuv handle this asynchronous operation with mainly 2 technique **Thread pool** and **Event loop**

## THREAD POOL

The Thread Pool in libuv is a collection of threads used to perform operations that cannot be executed asynchronously by the Event Loop itself. Examples include file system operations, DNS resolution, and some cryptographic functions.

**How it works:**
When an I/O-bound operation is initiated (e.g., reading a file from disk), and it cannot be handled immediately by the Event Loop, libuv offloads this task to one of the threads in the Thread Pool. The Thread Pool consists of four threads by default, but this can be configured. The operation is executed in the background without blocking the main thread.

**I/O-bound operation**
An I/O-bound operation is a type of task in computing where the speed and performance are primarily limited by input/output (I/O) operations rather than by the CPU's processing power. These operations involve communication with external systems or devices, such as reading from or writing to a disk, making network requests, or interacting with peripheral devices.

**Process:**

1. The main Event Loop in Node.js receives an I/O-bound task.
2. If the task requires blocking I/O, it is passed to the Thread Pool.
3. One of the available threads in the pool picks up the task and performs the operation.
4. Once the task is completed, the result is passed back to the Event Loop, which then executes the corresponding callback function in the main thread.

![Thread Pool](https://raw.githubusercontent.com/aswanthnarayan/Brocamp/main/Daigrams/Thread_pool.png)

**Benefits:**

- Allows Node.js to remain non-blocking even when performing I/O-bound tasks.
- Enhances performance by utilizing multiple threads for concurrent operations.

By default, Node.js uses a Thread Pool with a limited number of threads to handle I/O-bound tasks that cannot be performed asynchronously by the main Event Loop. The default thread count is 4

You can increase the size of the Thread Pool to handle more concurrent I/O-bound tasks. This is particularly useful if your application needs to perform a large number of blocking I/O operations simultaneously, such as reading and writing multiple files or handling many network requests at once.

To increase the Thread Pool size, you can set the `**UV_THREADPOOL_SIZE**` environment variable. For example, to set the Thread Pool size to 8, you can start your Node.js application like this:

```js

UV_THREADPOOL_SIZE=8 node your-app.js

```

Increasing the Thread Pool size is beneficial for I/O-bound tasks but has limited impact on CPU-bound tasks. The optimal size depends on your application's workload and the number of available CPU cores.

## EVENT LOOP with libuv

The Event Loop is a central concept in Node.js, enabling it to perform non-blocking I/O operations—despite the fact that JavaScript is single-threaded. The Event Loop, managed by libuv, allows Node.js to handle multiple operations concurrently without the need for multithreading. This makes Node.js highly efficient for I/O-bound tasks.

![Event_loop](https://github.com/aswanthnarayan/Brocamp/blob/main/Daigrams/Event_loop.png?raw=true)

### How the Event Loop Works

The Event Loop is divided into several phases, each responsible for managing specific types of callbacks or tasks. Here’s an overview of the major phases:

- **Timers:** This phase executes callbacks scheduled by setTimeout() and setInterval(). If a timer is ready (i.e., its delay has expired), its callback is placed in the execution queue

- **I/O Callbacks:** Handles callbacks from some I/O operations, like network I/O, that were deferred to the next iteration of the loop.

- **Idle, Prepare:** These are internal phases used by libuv to prepare the Event Loop for the next cycle. They are not typically used directly by developers.

- **Poll:** This is the most important phase where the Event Loop processes new I/O events, executing their callbacks. It will also look for and execute callbacks for I/O operations like file system reads or writes. If there are no I/O events to process, this phase will wait for callbacks to be added to the queue.

- **Check:** This phase allows setImmediate() callbacks to be executed.

- **Close Callbacks:** Handles cleanup for callbacks like socket.on('close', ...).

- **Exit:** The loop continues to run as long as there are operations to perform. Once all callbacks have been executed and there are no more operations left to perform, Node.js exits.

Here's a simple example to illustrate how the Event Loop works:

```js
const fs = require("node:fs");

console.log("Start");

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("File read complete");
});

setTimeout(() => {
  console.log("Timeout complete");
}, 0);

console.log("End");
```

Expected Output:

```js

Start
End
Timeout complete
File read complete

```

### QUEUE IN EVENT LOOP

In the context of the Event Loop in Node.js, which is powered by libuv, the term "queue" refers to the different task queues that manage the order in which tasks are executed.

1. **Microtask Queue**

The Microtask Queue handles tasks that are prioritized to run immediately after the currently executing code and before the Event Loop moves to the next phase. This queue is crucial for handling promises and `process.nextTick()` in Node.js.

examples:

- Promise resolutions (e.g., `.then`, `.catch`, `.finally` callbacks)
- `process.nextTick()` -- more prioritized than promise functions

```js
process.nextTick(() => console.log("Next Tick"));

Promise.resolve().then(() => console.log("Promise Resolved"));
```

Execution Order:The Microtask Queue is processed between each phase of the Event Loop, ensuring that microtasks are completed before moving on to the next phase.

2. **Timers Queue**

This queue handles the execution of callbacks scheduled by `setTimeout()` and `setInterval()`. When the specified time delay has elapsed, the callback is placed in this queue.

**example:**

- `setTimeout(() => { /* code */ }, 1000);`
- `setInterval(() => { /* code */ }, 5000);`

```js
setTimeout(() => console.log("Timeout"), 0);
```

Execution Order: The Timers Queue is processed in the "Timers" phase of the Event Loop. Callbacks are executed once their timer expires, but they are only picked up at the start of a new iteration of the loop.

3. **I/O Callbacks Queue**

his queue handles I/O callbacks that have been deferred to the next loop iteration. These are callbacks related to I/O operations such as reading from a file, network communication, etc.

**example:**

- `fs.readFile() callback`
- `http request callback`

```js
const fs = require("node:fs");

fs.readFile("example.txt", () => console.log("I/O Callback"));
```

Execution Order: The I/O Callbacks Queue is processed after the Timers phase and before the Poll phase, dealing with I/O events that were not completed in the Poll phase.

**Poll Phase**

- During the Poll phase, Node.js processes I/O events, executes their callbacks, and fetches new I/O events.
  If there are no timers scheduled, the Event Loop can stay in this phase, waiting for I/O events to occur
- Once the I/O operation completes, the Event Loop enters the Poll Phase, where it checks for any completed I/O events. If an I/O event has completed, its callback is executed immediately within the Poll Phase.
- If it's not ready, it might be deferred to the I/O Callbacks Queue for later execution.

tasks done in poll phase:

- `http` request handling
- File system read/write operations

4. **Check Queue**

This queue handles callbacks scheduled by `setImmediate()`. The `setImmediate()` function is used to execute code after the current poll phase completes.

**example:**

- `setImmediate(() => { /* code */ });`

```js
setImmediate(() => console.log("Immediate"));
```

Execution Order: The Check Queue is processed in the "Check" phase, immediately after the Poll phase.

5. **Close Callbacks Queue**

This queue handles the execution of close event callbacks, such as when a socket or a stream is closed.

**example:**

- `socket.on('close', () => { /* cleanup code */ });`

```js
const net = require("node:net");
const server = net
  .createServer()
  .listen(8080)
  .close(() => console.log("Server Closed"));
```

The Close Callbacks Queue is processed in the "Close Callbacks" phase, near the end of the Event Loop cycle.

# NPM (Node Package Manager)

- NPM is the world's largest software library, containing a vast collection of code and packages contributed by developers from all over the world.
- It is a large public database of JavaScript code, enabling developers to share, borrow, and manage code in their projects efficiently.

## Installing NPM Locally and Globally

- **Local Installation:** Installing a package locally means it is available only within the project where it's installed.

```js

npm install <package-name>

```

- **Global Installation:** Installing a package globally makes it available across your entire system, accessible from any project.

```js

npm install -g <package-name>

```

## Package.json

- `package.json` is NPM's configuration file, typically located in the root directory of your project.
- It contains metadata relevant to the project, including its name, version, description, main file, scripts, dependencies, and more
- `package.json` is the central place to configure and describe how interact with and run your package

example :

```js

{
  "name": "my-project",
  "version": "1.0.0",
  "description": "A sample project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  },
  "author": "Aswanth C K",
  "license": "ISC"
}

```

- **Dependencies:** Lists the packages your project needs to run. These are installed when you run npm install.

- **DevDependencies:** Lists the packages needed only for development, such as testing or build tools.

## Versioning in NPM

NPM uses **Semantic Versioning (SemVer)** to manage versions of packages. Versions follow the format MAJOR.MINOR.PATCH.

Example: **1.0.0**

- **MAJOR:** Increases when there are incompatible API changes.
- **MINOR:** Increases when new functionality is added in a backward-compatible manner.
- **PATCH:** Increases for backward-compatible bug fixes

## Package.lock.json

- The package-lock.json file is automatically generated when npm install is run.

- It locks the versions of installed dependencies, ensuring that the same versions are installed each time, providing consistency across different environments.

- This file should be committed to your version control system (e.g., Git) to guarantee reproducible builds.

## NPM Scripts

NPM scripts are commands defined in the package.json file that can be run using the npm run command. They are a convenient way to automate tasks such as building, testing, linting, or running a development server.

```js

{
  "name": "my-project",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js",
    "build": "webpack --config webpack.config.js",
    "test": "jest",
    "lint": "eslint .",
    "dev": "nodemon index.js",
    "clean": "rimraf dist"
  }
}

```

In this **example:**

- start: Runs the index.js file using Node.js.
- build: Runs the webpack build process with a specific configuration file.
- test: Runs tests using jest.
- lint: Runs eslint to check code quality.
- dev: Runs nodemon to automatically restart the server on file changes.
- clean: Removes the dist directory using rimraf.

to run a script

```js

npm run start

```


 `worker-threads` module, which allows you to create threads and execute multiple JavaScript tasks in parallel. Once a thread finishes a task, it sends a message to the main thread that contains the result of the operation so that it can be used with other parts of the code. The advantage of using worker threads is that CPU-bound tasks don’t block the main thread and you can divide and distribute a task to multiple workers to optimize it.


# Concurrency & Parallelism

## Concurrency
The ability to handle multiple tasks at once by interleaving their execution. It's about managing multiple tasks over time.   

## Parallelism

 The ability to execute multiple tasks simultaneously on different processors or cores. It's about executing multiple tasks at the same time.   

**Node.js and Concurrency**

Node.js is primarily a single-threaded environment. This means it can only execute one piece of code at a time. However, it achieves concurrency through an event-driven, non-blocking I/O model.   

**How it Works:**

* **Event Loop:** The core of Node.js's concurrency model. It continuously checks for new events and processes them.   
* **Non-blocking I/O**: When a Node.js application performs an I/O operation (like reading a file or making a network request), it doesn't block the main thread. Instead, it registers a callback function and continues executing other code.   
* **Callback Queue:** When the I/O operation completes, the callback is added to a callback queue.
Event Loop and Callback Queue: The event loop continuously checks the callback queue. Once the call stack is empty, it takes the first callback from the queue and executes it.   

**Benefits of Node.js's Concurrency Model:**

* **High Performance:** Efficiently handles a large number of concurrent connections.   
* **Scalability:** Can handle increasing loads without requiring additional threads.
* **Simplicity:** Easier to reason about and debug compared to multi-threaded systems.   


# PROCESS IN Node Js

 A process represents an instance of a running program. In Node.js, a process can run in the background and execute tasks independently. Each process has its own memory space and resources, such as CPU time, and operates independently of other processes. In Node.js, the process object provides information about the current Node.js process and provides methods to interact with it.

# CHILD PROCESS IN Node Js

 Node.js uses the child_process module to create and manage child processes. This is useful for executing long-running tasks, leveraging multi-core systems, or running shell commands from within a Node.js application. The module provides four main methods to create child processes:

1. **spawn()** - Launches a new process with a given command.
2. **fork()** - Spawns a new Node.js process and establishes an IPC channel.
3. **exec()** - Runs a command in a shell and buffers the output.
4. **execFile()** - Similar to exec() but does not spawn a shell, making it more efficient for non-shell commands.

## fork() vs. spawn()

Both fork() and spawn() are methods in Node.js used to create child processes, but they have different use cases:

### fork() Method

* fork() is a special case of spawn() used specifically for creating new Node.js processes.
* It creates a new instance of the V8 engine and a separate Node.js process that runs a given script.
* fork() also sets up an IPC (Inter-Process Communication) channel between the parent and child processes, which allows the parent and child to send messages to each other using child.send() and child.on('message').

**Use Cases**

This is particularly useful for cases where you need to share data between the master and worker  processes, as is common in the cluster module.

### spawn() Method

* spawn() is a more general-purpose method for creating child processes. It can be used to run any command, not just Node.js scripts.
* spawn() does not create an IPC channel by default, and the communication between parent and child processes happens through standard input/output streams.

**Use Cases**

This method is more suitable for running shell commands or other non-Node.js processes from within a Node.js application.

# Environment Variables

Environment variables are dynamic values that can affect the way running processes behave on a computer. They are used to store configuration settings and information that multiple processes can access, such as

* API keys
* Database connection strings
* Application secrets
* System paths

Environment Variables provides , 

* **Security:** Keep sensitive data like passwords or API keys out of your codebase.
* **Configuration Management:** Easily switch between different configurations for different environments (like local development and production).
**Portability:** Make your application more portable by not hardcoding settings that might vary from one deployment to another.

We ca create ad set enviornmennt variables using ,

1. **.env File**

A `.env` file is a plain text file where you can define environment variables for your application. This file is then loaded using a library like dotenv in Node.js

```js
//.env file
PORT = 8000 
```
and then use it using 

```js
//app.js file

const port = process.env.PORT || 3000; // Default to 3000 if PORT is not set
console.log(`Server running on port: ${port}`);

```

here `process.env` is an object that contains the environment variables passed to the current Node.js process. Environment variables are key-value pairs used to configure the runtime environment of an application.

# CLUSTERING

- Node.js operates on a single thread, meaning it executes code on one thread regardless of how many CPU cores are available.
- By default, Node.js only utilizes one core of the CPU, which is generally efficient for I/O operations but can become a limitation for tasks requiring heavy computations.
- For CPU-intensive tasks like heavy computations, the single-threaded nature of Node.js can create a performance bottleneck, slowing down the application.

To overcome this limitation, Node.js introduced the **CLUSTER MODULE**

- Cluster module allows the creation of multiple child processes, known as workers.

- These workers are independent instances of the Node.js process, and they can run simultaneously, executing tasks in parallel.

- By running multiple workers, the Cluster module enables Node.js to effectively utilize multiple CPU cores, improving performance, especially for CPU-intensive tasks.

example for scaling Node app using Cluster module:

```js
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master   
 cluster setting up ${numCPUs} workers`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit',   
 (worker, code, signal) => {
    console.error(`worker ${worker.process.pid} died`);
  });
} else   
 {
  // Workers can share any TCP port
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello from worker ' + cluster.worker.id);
  }).listen(8000);
}
```

# WORKER TREADS MODULE

 `worker-threads` module, which allows you to create threads and execute multiple JavaScript tasks in parallel. Once a thread finishes a task, it sends a message to the main thread that contains the result of the operation so that it can be used with other parts of the code. The advantage of using worker threads is that CPU-bound tasks don’t block the main thread and you can divide and distribute a task to multiple workers to optimize it.

## Key Features of worker-threads

* **Parallel Execution:** Allows running multiple JavaScript tasks simultaneously, leveraging multi-core processors to improve performance for heavy computational tasks.
* **Non-blocking:** By delegating tasks to worker threads, the main thread remains non-blocking, which is crucial for maintaining application responsiveness.
* **Inter-thread Communication:** Once a worker thread completes its task, it sends a message back to the main thread with the result, allowing for the synchronization and coordination of tasks across different parts of the application.
* **Task Distribution:** Tasks can be divided among multiple worker threads to achieve optimized and faster execution.

We can create worker threads using the Worker class.

ex:

```js
const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
  // Main thread logic
  const worker = new Worker(__filename); // Create a new worker thread

  // Listen for messages from the worker thread
  worker.on('message', (result) => {
    console.log(`Result from worker: ${result}`);
  });

  // Error handling
  worker.on('error', (err) => {
    console.error(`Worker error: ${err}`);
  });

  // Terminate handling
  worker.on('exit', (code) => {
    if (code !== 0) {
      console.error(`Worker stopped with exit code ${code}`);
    }
  });

  // Sending data to the worker thread
  worker.postMessage('Start task');
} else {
  // Worker thread logic
  parentPort.on('message', (message) => {
    if (message === 'Start task') {
      const result = heavyComputation(); // Perform a CPU-bound task
      parentPort.postMessage(result); // Send the result back to the main thread
    }
  });

  // Sample function for CPU-bound task
  function heavyComputation() {
    let count = 0;
    for (let i = 0; i < 1e9; i++) {
      count += i;
    }
    return count;
  }
}
```

**Main Thread:** Creates a new Worker instance by passing the current script (__filename). Listens for messages from the worker, handles errors, and terminates gracefully.

**Worker Thread:** Listens for messages from the main thread, executes a CPU-intensive task (heavyComputation), and sends the result back to the main thread.

