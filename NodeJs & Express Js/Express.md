# EXPRESS
Express is a lightweight Node.js framework that provides robust set of features for web and mobile application

It provides  set of features that streamline the development of server-side applications, making it easier for developers to manage routing, middleware, and HTTP requests.

```js

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

```

## PORT
In Express.js, you can set up the port your application will run on using environment variables. Environment variables allow you to configure your application based on different environments (development, production, etc.) without hardcoding values directly into your code. This practice makes your application more flexible and secure.

```js
const express = require('express');
const app = express();

// Set the port using environment variables or a default value
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

```

## HTTP Methods in Express.js
HTTP methods define the type of operation to be performed on a given resource when making a request to a server. Here are the most common HTTP methods used in web development:

### GET

* **Purpose:** Retrieve data from the server.
* **Usage:** When a client (usually a browser) wants to fetch data or a resource from the server without making any changes to the data on the server.

**Example:** A user visits a webpage or requests a list of items from an API.

```js 

app.get('/users', (req, res) => {
    res.send('Fetching list of users');
});

```

### POST

* **Purpose:** Send data to the server to create or update a resource.
* **Usage:** When a client submits form data, uploads a file, or sends any other kind of  data to the server.

**Example:** A user submits a registration form.

```js

app.post('/users', (req, res) => {
    res.send('Creating a new user');
});

```

### PUT

* **Purpose:** Update an existing resource on the server.
* **Usage:** When a client needs to update data or replace an existing resource entirely.

**Example:** A user updates their profile information.

```js

app.put('/users/:id', (req, res) => {
    res.send(`Updating user with ID ${req.params.id}`);
});

```

### DELETE

* **Purpose:** Remove a resource from the server.
* **Usage:** When a client wants to delete data from the server.

**Example:** A user deletes their account.

```js
app.delete('/users/:id', (req, res) => {
    res.send(`Deleting user with ID ${req.params.id}`);
});

```


### PATCH

* **Purpose:** Apply partial modifications to a resource.
* **Usage:** When a client needs to update part of a resource, rather than replacing the entire resource.

**Example:** A user updates their email address but not the entire profile.

```js

app.patch('/users/:id', (req, res) => {
    res.send(`Partially updating user with ID ${req.params.id}`);
});

```

## Idempotence
Idempotence in HTTP methods refers to the property of certain HTTP methods where making multiple identical requests has the same effect as making a single request. In other words, an idempotent operation can be performed multiple times without changing the result beyond the initial application

### Idempotent Methods:

**GET:** The GET method is used to retrieve data from the server. No matter how many times you send the same GET request, the server's state remains unchanged. For example, fetching a user’s profile via a GET request won’t alter the profile itself.

**PUT:** The PUT method is used to update or create a resource. Sending the same PUT request multiple times will result in the same outcome as sending it once. For example, if you update a user's information using a PUT request, doing so multiple times with the same data won’t change the outcome after the first request.

**DELETE:** The DELETE method is used to delete a resource. If you delete the same resource multiple times, the first request deletes it, and subsequent requests have no effect since the resource no longer exists.

**HEAD:** Similar to GET, but it only retrieves the headers and not the body. Like GET, it's idempotent.

**OPTIONS:** This method is used to describe the communication options for the target resource. It does not change the state of the resource, making it idempotent.

### Non-Idempotent Methods:

**POST:** The POST method is used to create a new resource. Sending the same POST request multiple times may create multiple resources (e.g., creating multiple user accounts with the same data), so it is not idempotent.

**PATCH:** The PATCH method is used to make partial updates to a resource. Depending on how it's implemented, it may or may not be idempotent. For example, if you PATCH a user's balance by adding $10, multiple PATCH requests will result in an increased balance each time, making it non-idempotent.

## HTTP STATUS CODES

HTTP status codes are standard responses sent by a server to indicate the result of a client's request. They are categorized into five classes, each representing a different type of response:

1. **1xx: Informational Responses**
These codes indicate that the request was received and is being processed.

2. **2xx: Success**
These codes indicate that the request was successfully received, understood, and accepted.

* **200 OK:** The request was successful, and the server returned the requested data.
* **201 Created:** The request was successful, and a new resource was created as a result.

3. **3xx: Redirection**
These codes indicate that further action is needed to complete the request.

* **301 Moved Permanently:** The requested resource has been permanently moved to a new URL.
* **302 Found:** The requested resource resides temporarily under a different URL.

4. **4xx: Client Errors**
These codes indicate that there was an error with the request made by the client.

* **400 Bad Request:** The server could not understand the request due to invalid syntax.
* **401 Unauthorized:** The client must authenticate itself to get the requested response.
* **403 Forbidden:** The client does not have access rights to the content.
* **404 Not Found:** The server could not find the requested resource.

5. **5xx: Server Errors**
These codes indicate that the server encountered an error and could not fulfill the request.

* **500 Internal Server Error:** The server encountered an unexpected condition that prevented it from fulfilling the request.

* **503 Service Unavailable:** The server is not ready to handle the request, often due to maintenance or overload.

### Sending Status Codes in Express
In Express, you can send HTTP status codes using the res.status() method. This method sets the HTTP status code for the response and can be chained with res.send() or other methods to send the response body.

Here’s an example of how to use it:

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('OK');
});

app.get('/not-found', (req, res) => {
    res.status(404).send('Not Found');
});

app.get('/error', (req, res) => {
    res.status(500).send('Internal Server Error');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

```

## MIDDLEWARE

Middleware functions are the backbone of an Express.js application. They are functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application’s request-response cycle. Middleware functions can perform a variety of tasks, such as:

* Executing code.
* Modifying the request and response objects.
* Ending the request-response cycle.
* Calling the next middleware function in the stack.

In an Express app, middleware functions are executed sequentially, forming a middleware stack. This stack allows you to organize and handle different aspects of a request, from parsing data to logging and error handling.

### Types of Middleware in Express.js

#### Application-Level Middleware

**Definition:** Middleware that is bound to an instance of the Express app object. It can be used across all routes or limited to specific routes.

**Usage:**

It can be used to perform operations like logging, authentication, or any other processing that needs to be applied to all or specific routes.

Example:

```js

const express = require('express');
const app = express();

// Application-level middleware
app.use((req, res, next) => {
  console.log('Request URL:', req.originalUrl);
  next();
});

app.get('/home', (req, res) => {
  res.send('Home Page');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```
In this example, the middleware logs the request URL for every incoming request.


#### Router-Level Middleware

**Definition:** Middleware that is bound to an instance of the Express router object. It is used in the same way as application-level middleware, except that it is applied only to the routes within that router.

**Usage:**

Useful for grouping routes together with specific middleware that should only apply to those routes.

Example:
```js
const express = require('express');
const router = express.Router();

// Router-level middleware
router.use((req, res, next) => {
  console.log('Router Middleware:', req.originalUrl);
  next();
});

router.get('/about', (req, res) => {
  res.send('About Page');
});

const app = express();
app.use('/info', router);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```
This middleware applies only to routes that start with /info.

#### Error-Handling Middleware

**Definition:** Middleware that handles errors that occur during the processing of requests. Error-handling middleware is defined with four arguments: err, req, res, and next.

**Usage:**

To catch and handle errors that occur during request processing. It can send error responses to the client or log the error details.

Example:

```js
const express = require('express');
const app = express();

app.get('/error', (req, res) => {
  throw new Error('Something went wrong!');
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```
Here, if an error occurs, it is caught by the error-handling middleware, which sends a 500 status response.

#### Built-in Middleware
**Definition:** Express provides some built-in middleware functions that can be used directly without needing to write custom middleware.

**Common Built-in Middleware:**

1. **express.static:** Serves static files, such as HTML, CSS, and JavaScript.
2. **express.json:** Parses incoming JSON requests and makes the payload available on req.body.
3. **express.urlencoded:** Parses incoming requests with URL-encoded payloads (from HTML forms) and makes the data available on req.body.

Example:
```js
const express = require('express');
const app = express();

// Built-in middleware for serving static files
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```
This serves static files from the public directory.

#### Third-Party Middleware

**Definition:** Middleware provided by third-party libraries that can be installed via npm. These middlewares offer additional functionality like handling cookies, sessions, authentication, etc.

**Popular Examples:**

1. **morgan:** HTTP request logger middleware.
2. **cookie-parser:** Parses Cookie header and populates req.cookies with an object.
body-parser: Parses incoming request bodies (replaced by express.json and express.urlencoded in Express 4.16+).

Example:
```js
const express = require('express');
const morgan = require('morgan');
const app = express();

// Third-party middleware for logging HTTP requests
app.use(morgan('combined'));

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```
This logs detailed information about each request.

## Static Files handling

In an Express.js application, serving static files (such as images, CSS files, and JavaScript files) is a common requirement. Static files are those that do not change dynamically and are served directly to the client. Express makes it easy to serve these files using the `express.static()` middleware.

```js 

const express = require('express');
const app = express();

// Serving static files from the "public" directory
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

```

In this example:

* The express.static('public') middleware serves all files in the public directory. This means that if you have an index.html file in the public directory, it can be accessed via http://localhost:3000/index.html.

* If a request is made to a route that does not match any of the static files, Express will continue down the middleware stack, eventually reaching the route handlers.

You can also serve multiple directories or specify a virtual path prefix:

```js 
// Serving static files from "public" directory
app.use('/static', express.static('public'));

// Now the static files can be accessed via http://localhost:3000/static/filename.ext
```

## Cookies, Authentication, and Session Management in Express

### Cookies

Cookies are small pieces of data stored on the client’s browser, often used for tracking, storing user preferences, or managing sessions. In Express, you can easily manage cookies using the `cookie-parser` middleware.

Setting Up **cookie-parser:**

First, install the `cookie-parser`middleware:

```js 
npm install cookie-parser

```

Next, use it in your Express application:

```js 
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

```

**Setting a Cookie:**

To set a cookie, use the res.cookie() method:

```js 

app.get('/set-cookie', (req, res) => {
    res.cookie('username', 'Aswanth', { maxAge: 900000, httpOnly: true });
    res.send('Cookie has been set');
});

```

In this example:

* **'username', 'Aswanth':** Sets a cookie named username with the value `Aswanth`.
* **maxAge: 900000:** Sets the cookie to expire in 15 minutes.
* **httpOnly: true:** Ensures the cookie is only accessible via the web server, enhancing security.


**Reading a Cookie:**
You can access the cookies sent by the client using `req.cookies:`

```js 

app.get('/get-cookie', (req, res) => {
    const username = req.cookies.username;
    res.send(`Cookie retrieved: ${username}`);
});

```

**Deleting a Cookie:**
To delete a cookie, use `res.clearCookie():`

```js 
app.get('/clear-cookie', (req, res) => {
    res.clearCookie('username');
    res.send('Cookie has been cleared');
});

```

### Session Management

Sessions are used to maintain the state across multiple requests in a web application. In Express, session management is commonly handled using the `express-session` middleware.

Install the express-session package:

```js 
npm install express-session

```

### Authentication
Authentication is the process of verifying the identity of a user or system. It's about confirming who someone is.

### Authorization
Authorization is the process of determining what an authenticated user is allowed to do. It involves checking permissions or access levels.



## Cross-Origin Resource Sharing (CORS)

CORS is a security feature implemented in web browsers to control how resources (like images, scripts, or APIs) from one origin (domain) can be shared or accessed by another origin. It plays a crucial role in web security by preventing malicious websites from making unauthorized requests to your web server

```js

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS for all routes and origins

// You can also configure CORS options
app.use(cors({
  origin: 'http://frontend.example.com', // Allow only this origin
  methods: 'GET,POST', // Allow only these methods
  credentials: true // Allow credentials (cookies, etc.)
}));

app.get('/data', (req, res) => {
  res.json({ message: 'This is a CORS-enabled response' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

```

## REST API

 A REST API (Representational State Transfer Application Programming Interface) is a software architectural style for creating web services. It defines a set of constraints for how the architecture of a distributed, internet-scale hypermedia system, such as the web, should behave.

### Key Characteristics of REST APIs:

* **Stateless:** Each request from a client contains all the information needed to understand and process the request. The server doesn't maintain session state between requests.   
* **Client-Server Architecture:** Clear separation of concerns between the client and server.
* **Cacheable:** Responses can be cached to improve performance.
* **Uniform Interface:** Uses standard HTTP methods (GET, POST, PUT, DELETE) and standard HTTP status codes.
* **Layered System:** Multiple layers of servers can be used to improve scalability and security.
* **Code on Demand (Optional):** Clients can download executable code to extend functionality.

### Core HTTP Methods in REST APIs

**GET:** Retrieves data from a specified resource.
**POST:** Creates a new resource.
**PUT:** Updates an existing resource.
**DELETE:** Deletes a resource.
**OPTIONS:** Used to determine the supported HTTP methods for a resource.


## Node.js process.exitCode Property

There are two ways that are generally used to terminate a Node.js program which is using process.exit() or process.exitCode variable 
process.exit code variable is an integer that represents the code passed to the process.exit() function or when the process exits on its own. It allows the Node.js program to exit naturally and avoids the Node program to do additional work around event loop scheduling, and it is much safer than passing exit code to process.exit().

```js
const express = require('express')
const app = express()
 
let a = 10;
let b = 20;
 
if (a == 10) {
    console.log(a)
    process.exitCode(1);
}
 
console.log(b);
 
app.listen(3000, () => console.log('Server ready'))


// output 10

```
