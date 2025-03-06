# Type Script 

Typescript is a typed superset of JavaScript. TypeScript offers all of JavaScript’s features, and an additional layer on top of these: TypeScript’s type system

JavaScript provides language primitives like string and number, but it doesn’t check that you’ve consistently assigned these. TypeScript does

## Type safety
Type safety means that a programming language ensures values have the correct types at compile time, preventing unintended operations and reducing runtime errors.

In TypeScript, type safety ensures that:

- Variables hold only values of the declared type.
- Functions receive and return the correct types.
- Type mismatches are caught at compile time, before running the code.

```ts
let age: number = 25;
age = "hello"; // Error: Type 'string' is not assignable to type 'number'.
```


## Inference

Typescript knows javascript language and will generate types automatically most of the time , this is called inference .but you can also specify types explicitly

```js
let helloWorld = "Hello World";
``` 
*Above line is inferred to be string*

## type Aliases 

- `type` is a keyword in TypeScript that we can use to define the shape of data.
- It does not create new types, it simply renames existing ones (Alias).
- `type` can alias primitives, unions, intersections, tuples, and objects.

```ts
type ID = number;  // Alias for number
type Coordinates = [number, number]; // Alias for a tuple

let userId: ID = 123; // Same as 'let userId: number = 123'
let point: Coordinates = [10, 20]; // Tuple
```

## Type Assertions
Type Assertion is a way to tell TypeScript the exact type of a value when TypeScript cannot infer it automatically.
- It does not perform type conversion, only informs TypeScript about the type.
- Used when you know the type better than TypeScript (e.g., from API responses, DOM elements).

There are two ways to write a type assertion in TypeScript:

1. Using the `as` keyword

```ts
let value: any = "Hello, TypeScript";

// Method 1: Using `as` syntax (Recommended)
let strLength1: number = (value as string).length;
console.log(strLength1); // 16
```

2. Using the `<type>` syntax

```ts
let value: any = "Hello, TypeScript";

// Method 2: Using `<type>` syntax
let strLength2: number = value.length;
console.log(strLength2); // 16
```
- Both methods tell TypeScript that value is a string, so we can safely access .length.

- The `<Type>` syntax does not work in JSX/TSX files (React projects), so as syntax is preferred.

## Type Casting
- Type Casting is the process of converting a variable from one type to another at runtime.
- Unlike Type Assertion, which only tells TypeScript the type without changing it, Type Casting actually converts the value.

```ts
let num: number = 42;
let str: string = String(num); //  Converts number to string

console.log(typeof str, str); // "string", "42"
```
### Force Casting
Force Casting (also called double casting or casting with unknown) is when we bypass TypeScript’s type checks and manually tell TypeScript that a value is of a specific type, even if it's not actually safe.
- It is done using as unknown as Type to override TypeScript’s type checking.

```ts
let value: any = "Hello";

// Force cast `value` to a number (unsafe)
let num: number = value as unknown as number;

console.log(num); // Runtime error if used incorrectly
```
# Types 

TypeScript provides a robust type system that helps developers work with fundamental units of data such as `numbers`, `strings`, `booleans`, `objects`, and more. It builds upon JavaScript's existing types while introducing additional features like `enums` for better organization and type safety. TypeScript's type system ensures code reliability and readability, making it easier to catch errors and maintain large-scale applications

## Bascic Types

1. ### Boolean

The most basic datatype is the simple true/false value, which JavaScript and TypeScript call a `boolean` value.

```ts
let isDone: boolean = false;
```

2. ### Number

- As in JavaScript, all numbers in TypeScript are floating point values.
- These floating point numbers get the type `number`.
- In addition to hexadecimal and decimal literals, TypeScript also supports binary and octal literals 

```ts
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```

3. ### String

To represent text, TypeScript uses the `string` type. You can use either double or single quotes to create a string value.

```ts
let color: string = "blue";
color = 'red';
```

You can also use *template strings*, which can span multiple lines and have embedded expressions.
These strings are surrounded by the backtick/backquote (`` ` ``) character, and embedded expressions are of the form `${ expr }`.

```ts
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;
```

4. ### Array

TypeScript, like JavaScript, allows you to work with arrays of values.
Array types can be written in one of two ways.
In the first, you use the type of the elements followed by `[]` to denote an array of that element type:

```ts
let list: number[] = [1, 2, 3];
```

The second way uses a generic array type, `Array<elemType>`:

```ts
let list: Array<number> = [1, 2, 3];
```

5. ### Tuple

Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same. For example, you may want to represent a value as a pair of a `string` and a `number`:

```ts
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error
```

When accessing an element with a known index, the correct type is retrieved:

```ts
console.log(x[0].substring(1)); // OK
console.log(x[1].substring(1)); // Error, 'number' does not have 'substring'
```

Accessing an element outside the set of known indices fails with an error:

```ts
x[3] = "world"; // Error, Property '3' does not exist on type '[string, number]'.

console.log(x[5].toString()); // Error, Property '5' does not exist on type '[string, number]'.
```

6. ### Enum

An enum is a way of giving more friendly names to sets of numeric values.It allow developers to define set of named constants.Typescript allow both numeric and string based enums.

```ts
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```

By default, enums begin numbering their members starting at `0`.
You can change this by manually setting the value of one of its members.
For example, we can start the previous example at `1` instead of `0`:

```ts
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;
```

Or, even manually set all the values in the enum:

```ts
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;
```

A handy feature of enums is that you can also go from a numeric value to the name of that value in the enum.
For example, if we had the value `2` but weren't sure what that mapped to in the `Color` enum above, we could look up the corresponding name:

```ts
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

console.log(colorName); // Displays 'Green' as its value is 2 above
```

7. ### Any

Sometimes we do not always have prior knowledge about the type of some variables, especially when there are user-entered values from third party libraries. In such cases, we need a provision that can deal with dynamic content. The Any type comes in handy here

```ts
let something: any = "Hello World!"; 
something = 23;
something = true;
```


8. ### Void

`void` type is used where there is no data. For example, if a function does not return any value then you can specify void as return type

```ts
function warnUser(): void {
    console.log("This is my warning message");
}
```

There is no meaning to assign void to a variable, as only null or undefined is assignable to void.

```ts
let nothing: void = undefined;
let num: void = 1; // Error
```

9. ### Null and Undefined

In TypeScript, both `null` and `undefined` have their own distinct types: null and undefined. However, similar to void, they are not particularly useful on their own:

```ts
// These variables can only hold their respective values
let u: undefined = undefined;
let n: null = null;
```
**use cases**

If a variable should accept string, null, or undefined, you can explicitly define it using a union

```ts
let value: string | null | undefined;
```

10. ### Never

- The `never` type represents the type of values that never occur.
- The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program

example of functions returning `never`:

```ts
// Function returning never must have unreachable end point
function fail(message: string): never {
    throw new Error(message);
}
```
- never also appears when TypeScript determines there’s nothing left in a union.

```ts
function fn(x: string | number) {
  if (typeof x === "string") {
    // do something
  } else if (typeof x === "number") {
    // do something else
  } else {
    x; // has type 'never'!
  }
}
```

11. ### Object

In TypeScript, the object type represents non-primitive values, meaning it includes anything that is not a `number`, `string`, `boolean`, `bigint`, `symbol`, `null`, or `undefined`.

```ts
let obj: object = { name: "Alice", age: 25 };
obj = [1, 2, 3]; // Arrays are also objects
obj = function () { console.log("Hello"); }; // Functions are objects too
```

- The object type allows assignment of any non-primitive value.
- It does not specify the shape of an object (use interfaces or type aliases for that).
- Unlike any, it prevents assigning primitive values like number or string.

```ts
let obj: object;
obj = 42; // Error: Type 'number' is not assignable to type 'object'
obj = "hello"; // Error
```

For defining `structured objects`, it's better to use an `interface` or `type alias` instead of object

```ts
// Using Interface
interface User {
    name: string;
    age: number;
}
let user: User = { name: "Bob", age: 30 };
```
**or**

```ts
// Using Type Alias
type User = { name: string; age: number };
let user: User = { name: "Bob", age: 30 };
```

## Advanced Types

1. ### Intersection Type 
An intersection type in TypeScript is created using the `&` operator. It allows you to combine multiple types into one, meaning the resulting type must have all the properties of the intersected types.

```ts
type Person = { name: string };
type Employee = { id: number };

type EmployeeDetails = Person & Employee; // Intersection type

const employee: EmployeeDetails = {
  name: "Alice",
  id: 101
}; // ✅ Valid: Has both 'name' and 'id'
```

- They merge multiple types, ensuring that the result has all the required properties.
- If types have overlapping properties, they must be compatible.

```ts
type A = { x: string };
type B = { x: number };

type C = A & B; //  Error: 'x' cannot be both string and number
```

2. ### Interface
TypeScript offers a first-class primitive for defining objects that extend from other objects - an interface.
Interface defines a contract that an object must adhere to

```ts
interface Client { 
    name: string; 
    address: string;
}
```
They're inspired by object-oriented programming and allow you to use inheritance to create types:

```ts
interface WithId {
  id: string;
}

interface User extends WithId {
  name: string;
}

const user: User = {
  id: "123",
  name: "Karl"
};

```

also you can extend using ```Intersection Type```

```ts
type WithId = {
  id: string;
};

type User = WithId & {
  name: string;
};

const user: User = {
  id: "123",
  name: "Karl",
};

```
*but this method is slightly less optimal because it requires creating a new type for each combination.*

3. ### Union Types
A union type is TypeScript's way of saying that a value can be "either this type or that type".

This situation comes up in JavaScript all the time. Imagine you have a value that is a string on Tuesdays, but null the rest of the time:

in Javascript 

```js
const message = Date.now() % 2 === 0 ? 'Hello Tuesdays!' : null
        
const message: "Hello Tuesdays!" | null
```

- In TypeScript, you can do the same thing using a union type:

- To create a union type, the `|` operator is used to separate the types. Each type of the union is called a 'member' of the union.

For example, you might have an id that could be either a string or a number

```ts
const logId = (id: string | number) => {
  console.log(id)
}
```
*here we can only pass string or number as a type else shows error*

4. ### Literal Types

Just as TypeScript allows us to create union types from multiple types, it also allows us to create types which represent a specific primitive value. These are called literal types.

Literal types can be used to represent strings, numbers, or booleans that have specific values.

```ts
type YesOrNo = 'yes' | 'no'
type StatusCode = 200 | 404 | 500
type TrueOrFalse = true | false
```

In the YesOrNo type, the `|` operator is used to create a union of the string literals "yes" and "no". This means that a value of type YesOrNo can only be one of these two strings.

*actually Literal Types powers the autocomplete we've seen in functions like **document.addEventListener** in typescript* 

5. ### Utility Types

 We've seen how using interface extends can help us model inheritance, but TypeScript also gives us tools to directly manipulate object types. With its built-in utility types, we can remove properties from types, make them optional, and more.

#### 1.Partial Type

- The Partial utility type lets you create a new object type from an existing one, except all of its properties are optional.

Ex : Consider an Album interface that contains detailed information about an album

```ts
interface Album {
  id: number;
  title: string;
  artist: string;
  releaseYear: number;
  genre: string;
}
```
When we want to update an album's information, we might not have all the information at once. For example, it can be difficult to decide what genre to assign to an album before it's released.

Using the Partial utility type and passing in Album, we can create a type that allows us to update any subset of an album's properties:

```ts
type PartialAlbum = Partial<Album>;
```

Now we have a PartialAlbum type where id, title, artist, releaseYear, and genre are all optional.

This means we can create a function which only receives a subset of the album's properties:

```ts
const updateAlbum = (album: PartialAlbum) => {
  // ...
};

updateAlbum({ title: "Geogaddi", artist: "Boards of Canada" }); 
```

#### 2.Required Type

- On the opposite side of Partial is the Required type, which makes sure all of the properties of a given object type are required.

This Album interface has the releaseYear and genre properties marked as optional:

```ts
interface Album {
  title: string;
  artist: string;
  releaseYear?: number;
  genre?: string;
}
```

- We can use the Required utility type to create a new RequiredAlbum type:

```ts
type RequiredAlbum = Required<Album>;
```
With RequiredAlbum, all of the original Album properties become required, and omitting any of them would result in an error:

#### 3. Pick Type
The Pick utility type allows you to create a new object type by picking certain properties from an existing object.

For example, say we want to create a new type that only includes the `title` and `artist` properties from the `Album` type:

```js
type AlbumData = Pick<Album, "title" | "artist">;
```
- This results in `AlbumData` being a type that only includes the `title` and `artist` properties.

- This is extremely useful when you want to have one object that relies on the shape of another object. We'll explore this more in the chapter on deriving types from other types.

#### 4. Omit Type

The Omit helper type is kind of like the opposite of Pick. It allows you to create a new type by excluding a subset of properties from an existing type.

For example, we could use Omit to create the same AlbumData type we created with Pick, but this time by excluding the id, releaseYear and genre properties:
```ts
type AlbumData = Omit<Album, "id" | "releaseYear" | "genre">;
```
- A common use case is to create a type without id, for situations where the id has not yet been assigned:

```ts 
type AlbumData = Omit<Album, "id">;
```
This means that as Album gains more properties, they will flow down to AlbumData too.


#### 5. Readonly Type

- The Readonly utility type lets you create a new object type from an existing one, except all of its properties are readonly.

```ts
type Person = {
  name: string;
  age: number;
};

const freezePerson = (person: Readonly<Person>) => {
  console.log(`Name: ${person.name}, Age: ${person.age}`);

   person.age = 30; // Error: Cannot assign to 'age' because it is a read-only property
};

const user: Readonly<Person> = { name: "Alice", age: 25 };

// This function can read properties but not modify them
freezePerson(user);

```
6. ### Generic Types 

**Generics:**

Generics allow you to create reusable, flexible, and type-safe code by making types dynamic. Instead of hardcoding a specific type, generics let you define a type as a parameter that can be used later.

A generic type acts like a type function that takes a type as an argument and returns a type. This makes it useful for creating reusable and adaptable code structures.

*Ex:Generic Function:*

```ts
function identity<T>(value: T): T {
  return value;
}

console.log(identity<number>(10)); // ✅ 10
console.log(identity<string>("Hello")); // ✅ "Hello"
```

*Ex:Generic type alias:*

```ts
type Pair<T, U> = { first: T; second: U };

const coordinates: Pair<number, number> = { first: 10, second: 20 };
const userPair: Pair<string, number> = { first: "Alice", second: 25 };

console.log(coordinates); // ✅ { first: 10, second: 20 }
console.log(userPair); // ✅ { first: "Alice", second: 25 }
```
- Here We can pass any type as an argument to the Pair type. 
- We have more control over the type rather than hardcoding a specific type. or using `any` as a type parameter.

7. ### Template Literal Types
Similar to how template literals in JavaScript allow you to interpolate values into strings, template literal types in TypeScript can be used to interpolate other types into string types.

For example, let's create a PngFile type that represents a string that ends with ".png":
```ts
type PngFile = `${string}.png`;
```
Now when we type a new variable as PngFile, it must end with ".png":

```ts
let myImage: PngFile = "my-image.png"; // OK
```
When a string does not match the pattern defined in the PngFile type, TypeScript will raise an error:
```ts
let myImage: PngFile = "my-image.jpg";
//Error: Type '"my-image.jpg"' is not assignable to type '`${string}.png`'.
```
8. ### Mapped Types
Mapped types in TypeScript allow you to create a new object type based on an existing type by iterating over its keys and values. This can be let you be extremely expressive when creating new object types.

- A mapped type uses the `in` keyword to iterate over the keys of an existing type:

```ts
type MappedType<T> = { 
  [K in keyof T]: T[K]; 
};
```

- The `keyof` keyword is used to get the keys of the existing type.
- The `in` keyword is used to iterate over the keys of the existing type.
- The `T[K]` syntax is used to access the value of the key `K` in the type `T`.

**Example for copying a type USing Mapped Type:**

```ts
type User = { name: string; age: number };

type UserCopy = { [K in keyof User]: User[K] }; // Same as User

const user: UserCopy = { name: "Alice", age: 25 }; // ✅ Valid
```

**Example 2: Making Properties Readonly**

```ts
type ReadonlyUser<T> = { readonly [K in keyof T]: T[K] };

type User = { name: string; age: number };

const user: ReadonlyUser<User> = { name: "Alice", age: 25 };

user.name = "Bob"; // ❌ Error: Cannot assign to 'name' because it is readonly
```

*You might wonder why we used `Mapped type` for this. If have the same result using `Readonly` utility type.*

- Actually The built-in `Readonly<T>` utility type in TypeScript is internally implemented using a `mapped type`.

9. ### Conditional Types
Conditional types allow you to create types that depend on a condition. They work similarly to JavaScript's if statements but at the type level.

- In simpler terms, Conditional Types Work by Checking if a Generic Type Extends a Defined Type and Returning Values Accordingly 

Where to use?
*Imagine we have to define type for a function that takes a type as a parameter and returns a new type based on the condition*

```ts
type TypeCheck<T> = T extends string ? string[] : number[];

let data1: TypeCheck<string>; // string[]
let data2: TypeCheck<number>; // number[]
```

- Here using Conditional type we check the type is string or number and return string[] or number[] accordingly.


# Classes and OOPS in TS

TypeScript enhances JavaScript’s OOP capabilities by adding strict typing, access modifiers, and interfaces to classes. It supports the four OOP principles:

1️⃣ Encapsulation – Bundling data and behavior.
2️⃣ Abstraction – Hiding implementation details.
3️⃣ Inheritance – Extending functionality.
4️⃣ Polymorphism – Overriding and method flexibility.

## Classes

`class` is a blueprint for creating objects. It defines the structure and behavior of the object.

```js
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person("Alice", 25);
person1.greet(); // ✅ "Hello, my name is Alice and I am 25 years old."
```

## Implementation of OOPs Principles

### Encapsulation
Encapsulation is the practice of hiding the internal details of an object from the outside world. In TypeScript, this is achieved using access modifiers, such as private, protected, and public.

```ts
class Employee {
  public name: string;   // Accessible anywhere
  private salary: number;  // Accessible only inside the class

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  getSalary(): number {
    return this.salary;
  }
}

const emp = new Employee("Bob", 50000);
console.log(emp.name);  //  Allowed (public)
console.log(emp.getSalary()); // Allowed (public method)
console.log(emp.salary); // Error: 'salary' is private
```
**Access Modifiers:**
TypeScript provides access modifiers to control the visibility of class members (properties and methods). These are:

- `public` → Accessible everywhere (default).
- `private` → Accessible only within the class.
- `protected` → Accessible within the class and its subclasses.

|  **Modifier** | **Inside Class** | **Subclass** | **Outside Class** |
|:-------------:|:----------------:|:------------:|:-----------------:|
|   **public**  |        YES       |      YES     |        YES        |
|  **private**  |        YES       |      NO      |         NO        |
| **protected** |        YES       |      YES     |         NO        |

### Inheritance
Inheritance allows a class to inherit properties and behavior from another class. It enables code reuse and promotes a hierarchy of classes. It can done by using the `extends` keyword.

```ts
class Animal {
  constructor(public name: string) {}

  makeSound(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  bark(): void {
    console.log(`${this.name} barks.`);
  }
}

const myDog = new Dog("Buddy");
myDog.makeSound(); // ✅ "Buddy makes a sound."
myDog.bark(); // ✅ "Buddy barks."
```
### Polymorphism
Polymorphism allows a single interface (method or class) to be used for different types of objects. It enables reusability and flexibility in code by allowing different classes to share the same method names but with different behaviors.

**Types of Polymorphism in TypeScript**

1. **Method Overriding (Runtime Polymorphism)** → A subclass provides a new implementation for a method inherited from a parent class.

```ts
class Animal {
  makeSound(): void {
    console.log("Some generic animal sound.");
  }
}

class Dog extends Animal {
  makeSound(): void { // Overriding parent method
    console.log("Woof! Woof!");
  }
}

const myDog = new Dog();
myDog.makeSound(); // ✅ "Woof! Woof!"

```

2.  **Method Overloading (Compile-time Polymorphism)** → A single class has multiple method signatures with different parameters.

```ts
class MathOperations {
  add(a: number, b: number): number; // Overload signature
  add(a: string, b: string): string; // Overload signature
  add(a: any, b: any): any { // Actual implementation
    return a + b;
  }
}

const math = new MathOperations();
console.log(math.add(5, 10)); // ✅ 15 (number + number)
console.log(math.add("Hello, ", "World!")); // ✅ "Hello, World!" (string + string)
```
### Abstraction
Abstraction is the process of hiding the internal details of a system from the outside world. It allows you to focus on the important parts of the system and ignore the less important parts.

- Abstract classes cannot be instantiated and must be extended by other classes.

```ts
abstract class Shape {
  abstract getArea(): number; // Must be implemented by subclasses
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const myCircle = new Circle(5);
console.log(myCircle.getArea()); // ✅ 78.54
```

## Difference Between Interface, Class, and Abstract Class in TypeScript

|                     **Feature**                    |                     **Interface**                     |                  **Class**                  |                **Abstract Class**               |
|:--------------------------------------------------:|:-----------------------------------------------------:|:-------------------------------------------:|:-----------------------------------------------:|
| **Purpose**                                        | Defines a structure (contract) without implementation | Creates objects with both data and behavior | Acts as a blueprint with partial implementation |
| **Can Have Method Implementations?**               | No (only method signatures)                           | YES                                         | Yes (can have abstract and concrete methods)    |
| **Can Have a Constructor?**                        | NO                                                    | YES                                         | YES                                             |
| **Can Have Properties With Values?**               | NO (only declarations)                                | YES                                         | YES                                             |
| **Access Modifiers (public, private, protected)?** | NO                                                    | YES                                         | YES                                             |
| **Can Extend Another Class?**                      | NO (but can extend another interface)                 | YES (extends)                               | YES (extends)                                   |
| **Can Implement an Interface?**                    | YES (implements)                                      | YES (implements)                            | YES (implements)                                |
| **Can a Class Extend Multiple?**                   | Yes (Multiple implements)                             | NO (Only one extends)                       | NO (Only one extends)                           |
| **Can Be Instantiated (Used to Create Objects)?**  | NO                                                    | YES                                         | NO (must be extended by a subclass)             |
| **Usage**                                          | Used to enforce structure (e.g., shape of an object)  | Used to create objects                      | Used to enforce structure + shared behavior     |

## Getters and Setters

Getters and setters are methods that allow you to access and modify properties of an object in a controlled way. They provide a way to retrieve and set values for private properties of a class.

```ts
class BankAccount {
  private _balance: number = 0;

  get balance(): number {
    return this._balance;
  }

  set balance(amount: number) {
    if (amount >= 0) {
      this._balance = amount;
    } else {
      console.log("Invalid balance amount.");
    }
  }
}

const account = new BankAccount();
account.balance = 1000; // ✅ Sets balance
console.log(account.balance); // ✅ Gets balance (1000)
account.balance = -500; // ❌ "Invalid balance amount."
```

# Important Topics

## Declaration Merging
Declaration merging is a feature in TypeScript that allows multiple declarations of the same name to be combined into a single definition at compile time.
```ts 
interface User {
  name: string;
}

interface User {
  age: number;
}

// TypeScript merges both interfaces into one:
const user: User = {
  name: "Alice",
  age: 25,
};

console.log(user.name, user.age); // ✅ "Alice", 25
```
- Helps extend existing interfaces without modifying the original definition.
- Useful when adding extra properties to third-party interfaces.

## Function Signature in TypeScript
A function signature defines the parameter types and return type of a function without providing its implementation. It acts as a blueprint for functions, ensuring type safety and consistency.

```ts
// Function signature (only type declaration)
type MathOperation = (a: number, b: number) => number;

// Function implementation matching the signature
const add: MathOperation = (x, y) => x + y;
const multiply: MathOperation = (x, y) => x * y;

console.log(add(5, 10));      // ✅ 15
console.log(multiply(5, 10)); // ✅ 50
```
*Here, MathOperation is a function signature, ensuring that add and multiply both accept two numbers and return a number.*

## Duck Typing
Duck typing is a concept in TypeScript (and other dynamically typed languages) where an object's type is determined by its shape (properties and methods) rather than explicitly declaring its type.

- In TypeScript, if an object has the required properties and methods of a type, it is considered to be of that type, even if it wasn’t explicitly declared as such.


```ts
interface Add {
  (a: number, b: number): number;
}

const addNumbers: Add = (x, y) => x + y; // ✅ Allowed (same function signature)

console.log(addNumbers(5, 10)); // 15
```

*Since addNumbers matches the function signature of Add, it is automatically considered of type Add.*

or Duck Typing Restriction

```ts
interface Car {
  brand: string;
  drive(): void;
}

const bike = {
  brand: "Yamaha",
  // Missing 'drive' method
};

let myCar: Car = bike; // Error: Property 'drive' is missing
```
*bike is not assignable to Car because it does not have a drive() method.*

## String Interpolation
String interpolation is a way to embed variables or expressions inside a string using template literals (backticks `) instead of regular string concatenation.

```ts
const name = "Alice";
const age = 25;

console.log(`Hello, my name is ${name} and I am ${age} years old.`);
// ✅ "Hello, my name is Alice and I am 25 years old."
```

## Narrowing
Narrowing is the process of refining a general type (like unknown or a union type) into a more specific type using TypeScript’s type-checking techniques.

- Narrowing prevents runtime errors by ensuring that only valid operations are performed on a value.

Example: Without Narrowing (Causes Error)

```ts
function printLength(value: string | number) {
  console.log(value.length); // ❌ Error: Property 'length' does not exist on type 'number'.
}
```

 ### 1. Type Guard Narrowing (typeof)
Use typeof to check primitive types before performing operations.

```ts
function printLength(value: string | number) {
  if (typeof value === "string") {
    console.log(`String length: ${value.length}`); // ✅ Allowed
  } else {
    console.log(`Number: ${value}`); // ✅ Allowed
  }
}

printLength("Hello"); // ✅ "String length: 5"
printLength(42);      // ✅ "Number: 42"
```

### 2. Type Guard Narrowing (instanceof)
Use instanceof to check object types before performing operations.

```ts
class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark(); // ✅ Safe to call
  } else {
    animal.meow(); // ✅ Safe to call
  }
}

const dog = new Dog();
makeSound(dog); // ✅ "Woof!"
```

### 3. Type Guard Narrowing (in)
Use in to check if a value exists in an array or object.

```ts
type User = { name: string; email: string };
type Admin = { name: string; permissions: string[] };

function checkUser(user: User | Admin) {
  if ("permissions" in user) {
    console.log(`Admin permissions: ${user.permissions.join(", ")}`);
  } else {
    console.log(`User email: ${user.email}`);
  }
}

const admin: Admin = { name: "Alice", permissions: ["read", "write"] };
checkUser(admin); // ✅ "Admin permissions: read, write"
```
## Mixins
Mixins are a way to combine multiple class behaviors into a single class without using traditional inheritance.
- They allow reusing methods from multiple sources without deep class hierarchies.
- TypeScript does not support multiple inheritance, so Mixins provide an alternative

Mixin help to
- **Reusability** – Share behavior across multiple classes.
- **Avoid Deep Inheritance** – Prevents complex class hierarchies.
- **Multiple Behaviors** – A class can inherit features from multiple mixins.

```ts
// Mixin Function
type Constructor<T = {}> = new (...args: any[]) => T;

function CanEat<T extends Constructor>(Base: T) {
  return class extends Base {
    eat() {
      console.log("Eating...");
    }
  };
}

function CanSleep<T extends Constructor>(Base: T) {
  return class extends Base {
    sleep() {
      console.log("Sleeping...");
    }
  };
}

// Base Class
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// Applying Mixins
class Dog extends CanEat(CanSleep(Animal)) {}

const myDog = new Dog("Buddy");
myDog.eat();  // ✅ "Eating..."
myDog.sleep(); // ✅ "Sleeping..."
```

*Dog now has eat() and sleep() methods without directly inheriting them.*

## Decorators
A decorator in TypeScript is a special function that is used to modify classes, methods, properties, or parameters at design time.
- Decorators enhance or modify how classes and their members behave.
- They are prefixed with @ and can be applied to classes, methods, properties, accessors, and parameters.
- TypeScript decorators are mostly used in frameworks like Angular and NestJS for dependency injection, metadata handling, and more

to enable decorators, we need to use the `--experimentalDecorators` flag when compiling TypeScript code in tsConfig.json.

### 1. Class Decorators (Modifying a Class)
A class decorator is applied to a class definition and can modify or replace the class.

```ts
function Logger(constructor: Function) {
  console.log(`Class "${constructor.name}" was created.`);
}

@Logger
class User {
  constructor() {
    console.log("User instance created.");
  }
}

// Output:
//  "Class 'User' was created."
//  "User instance created."
```

### 2. Method Decorators (Modifying a Method)
A method decorator modifies how a method works.

```ts
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${methodName} with arguments:`, args);
    return originalMethod.apply(this, args);
  };
}

class MathOperations {
  @Log
  add(a: number, b: number) {
    return a + b;
  }
}

const math = new MathOperations();
console.log(math.add(2, 3)); 

// Output:
// ✅ "Calling add with arguments: [2, 3]"
// ✅ 5
``` 

### 3. Property Decorators (Modifying a Property)
A property decorator can add metadata or modify property behavior.

```ts
function ReadOnly(target: any, propertyKey: string) {
  Object.defineProperty(target, propertyKey, {
    writable: false
  });
}

class Person {
  @ReadOnly
  name: string = "Alice";
}

const p = new Person();
p.name = "Bob"; //  Error: Cannot assign to 'name' because it is read-only.
```
## Dependency Injection
Dependency Injection (DI) is a design pattern used to inject dependencies (objects or services) into a class instead of creating them inside the class. This improves modularity, testability, and maintainability.

- Instead of a class creating its dependencies, they are provided from the outside.
- DI helps reduce coupling between classes, making the code more flexible.

Coupling refers to the degree of dependency between different components (classes, functions, or modules) in a system.

| **Type**           | **Definition**                                                                        | **Example**                                                                      |
|--------------------|---------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| **Tight Coupling** | Strong dependency between components. Changes in one component affect others.         | A class directly creates an instance of another class.                           |
| **Loose Coupling** | Minimal dependency between components. Changes in one component do not affect others. | A class receives dependencies from outside (e.g., via constructor or interface). |

### Example Without Dependency Injection (Tight Coupling)
```ts
class EmailService {
  sendEmail(message: string) {
    console.log(`Sending email: ${message}`);
  }
}

class UserService {
  private emailService = new EmailService(); //  Hardcoded dependency

  notifyUser() {
    this.emailService.sendEmail("Welcome to our app!");
  }
}
```

### Example With Dependency Injection (Loose Coupling)

```ts
class EmailService {
  sendEmail(message: string) {
    console.log(`Sending email: ${message}`);
  }
}

class UserService {
  private emailService: EmailService;

  constructor(emailService: EmailService) {
    this.emailService = emailService; // ✅ Injected dependency
  }

  notifyUser() {
    this.emailService.sendEmail("Welcome to our app!");
  }
}

// Inject EmailService when creating UserService
const emailService = new EmailService();
const userService = new UserService(emailService);

userService.notifyUser(); //  "Sending email: Welcome to our app!"
```

# Common Syntax and Best Practices

## Objects
```ts
 const user: { name: string; age: number } = { name: "Alice", age: 25 };
console.log(user.name); // ✅ "Alice"
```
## Interfaces
```ts
interface Person {
  name: string;
  age?: number; // Optional property
}
const person: Person = { name: "Bob" };
```
## Arrays
```ts
const numbers: number[] = [1, 2, 3];
console.log(numbers[0]); // ✅ 1
```
## Tuples
```ts
const person: [string, number] = ["Alice", 25];
console.log(person[0]); // ✅ "Alice"
```
## Enums
```ts
enum Status { Active, Inactive }
const userStatus: Status = Status.Active;
console.log(userStatus); // ✅ 0 (index)
```
### Union Types
```ts
let value: string | number;
value = "Hello"; //  Allowed
value = 42;      //  Allowed
```
## Type Aliases
```ts
type User = { name: string; age: number };
const user: User = { name: "Alice", age: 25 };
```
## Functions

### 1. Normal Function (Named Function)
```ts
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(2, 3)); // ✅ 5
```
### 2.Anonymous Function
```ts
const multiply = function (a: number, b: number): number {
  return a * b;
};
console.log(multiply(2, 3)); // ✅ 6
```
### 3. Arrow Function
```ts
const subtract = (a: number, b: number): number => a - b;
console.log(subtract(5, 2)); // ✅ 3
```
## Rest Parameters (...args)
```ts
function sum(...nums: number[]): number {
  return nums.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3)); // ✅ 6
```
## Spread Operator
```ts
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2); // ✅ [1, 2, 3, 4]
```
## Promises
```ts
const fetchData = (): Promise<string> => {
  return new Promise((resolve) => setTimeout(() => resolve("Data loaded"), 1000));
};
fetchData().then(console.log); // ✅ "Data loaded"
```
## Async/Await
```ts
async function getData() {
  const data = await fetchData();
  console.log(data); // ✅ "Data loaded"
}
getData();
```
## Classes and Inheritance
```ts
class Animal {
  constructor(public name: string) {}
  makeSound() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof!");
  }
}

const dog = new Dog("Buddy");
dog.makeSound(); // ✅ "Woof!"
```
## Generics
```ts
function identity<T>(value: T): T {
  return value;
}
console.log(identity<number>(10)); // ✅ 10
console.log(identity<string>("Hello")); // ✅ "Hello"
```
## Type Assertion
```ts
let value: any = "Hello";
let strLength: number = (value as string).length;
console.log(strLength); // ✅ 5
```