# REDUX

## Table of Contents

1.  [Introduction to Redux](#introduction-to-redux)
    -   [What is Redux?](#what-is-redux)
    -   [Three Core Principles](#three-core-principles)
    -   [Redux Data Flow (The Redux Workflow)](#redux-data-flow-the-redux-workflow)
2.  [Core Redux Concepts](#core-redux-concepts)
    -   [Store](#store)
    -   [Actions](#actions)
    -   [Reducers](#reducers)
    -   [Immutability in Redux](#immutability-in-redux)
    -   [combineReducers](#combinereducers)
3.  [Redux vs. Flux](#redux-vs-flux)
4.  [Using Redux with React (`react-redux`)](#using-redux-with-react-react-redux)
    -   [The `Provider` Component](#the-provider-component)
    -   [Redux Hooks: `useSelector()` and `useDispatch()`](#redux-hooks-useselector-and-usedispatch)
    -   [Legacy API: `connect()` HOC](#legacy-api-connect-hoc)
5.  [Redux Toolkit (RTK)](#redux-toolkit-rtk)
6.  [Middleware and Asynchronous Actions](#middleware-and-asynchronous-actions)
7.  [Advanced Patterns & Performance](#advanced-patterns--performance)
8.  [Ecosystem & Practical Use Cases](#ecosystem--practical-use-cases)
9.  [Practical Projects](#practical-projects)
10.  [RTK Query: Modern Data Fetching](#rtk-query-modern-data-fetching)

---

## Introduction to Redux

### What is Redux?

Redux is a **predictable state container** for JavaScript applications. It helps you manage the state of your application in a single, consistent location, making it easier to debug, test, and reason about your app's behavior.

-   **Predictable**: Redux operates on a strict unidirectional data flow. All state changes are explicit and can be tracked, making the application's logic predictable.
-   **State Container**: It centralizes your application's state into a single object tree called the "store."
-   **For JavaScript Apps**: While it's most commonly used with React, Redux is library-agnostic and can be used with any UI layer (e.g., Angular, Vue, or even vanilla JS).

### Three Core Principles

Redux follows three fundamental principles:

1.  **Single Source of Truth**: The entire state of your application is stored in a single object tree within a single **store**. This makes it easy to debug, inspect, and persist the application state.

2.  **State is Read-Only**: The only way to change the state is to dispatch an **action**, which is an object describing what happened. You cannot directly modify the state object. This ensures that neither the views nor network callbacks can write to the state directly, preventing race conditions and making state changes predictable.

3.  **Changes are Made with Pure Functions**: To specify how the state tree is transformed by actions, you write pure **reducers**. A reducer is a function that takes the previous state and an action, and returns the next state. Because reducers are pure functions, they produce the same output for the same input, making them easy to test and reason about.

### Redux Data Flow (The Redux Workflow)

Redux enforces a **strict unidirectional data flow**. This is the core workflow of how data moves through a Redux application.

1.  **Action Dispatched**: An event occurs in the UI (e.g., a button click). The UI component dispatches an **action**. An action is a plain JavaScript object with a `type` property describing the event.

2.  **Reducer Handles Action**: The Redux **store** calls the root **reducer** function with the current state and the dispatched action.

3.  **State is Updated**: The reducer checks the action's `type` and produces the **next state** based on the action's payload. It must be a **pure function** and return a *new* state object (immutability).

4.  **Store Saves New State**: The store saves the new state returned by the reducer.

5.  **UI Re-renders**: Components subscribed to the store (e.g., via `useSelector`) are notified of the state change. They re-render to reflect the new state.

![Redux Data Flow](https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)

---

## Core Redux Concepts

### Store

The **store** is the object that brings actions and reducers together. It holds the application state and has three main methods:

-   `store.getState()`: Returns the current state tree of your application.
-   `store.dispatch(action)`: The only way to trigger a state change. It dispatches an action to the reducer.
-   `store.subscribe(listener)`: Registers a callback function that will be called whenever the state changes.

### Actions

**Actions** are plain JavaScript objects that represent payloads of information. They are the only source of information for the store. They must have a `type` property that indicates the type of action being performed.

-   **Action Creators**: Functions that create and return action objects.
-   **Action Constants**: It's a good practice to define action types as string constants to avoid typos.

### Reducers

**Reducers** are pure functions that specify how the application's state changes in response to actions. A reducer takes two arguments: the previous `state` and an `action`, and returns the next `state`.

### Immutability in Redux

Immutability is a core concept. You must never mutate the state directly. Instead, return a new, updated copy.

### combineReducers

`combineReducers` is a utility function that helps you combine smaller reducers into a single root reducer.

---

## Redux vs. Flux

Flux is an architectural pattern, whereas Redux is a library inspired by Flux but with a single store and the concept of middleware.

---

## Using Redux with React (`react-redux`)

The `react-redux` library provides official bindings for using Redux with React components.

### The `Provider` Component

The `<Provider>` component makes the Redux store available to any nested components that need to access it.

### Redux Hooks: `useSelector()` and `useDispatch()`

-   **`useSelector()`**: Allows you to extract data from the Redux store state.
-   **`useDispatch()`**: Returns a reference to the `dispatch` function from the Redux store.

### Legacy API: `connect()` HOC

Before hooks, the `connect()` Higher-Order Component (HOC) was used to connect class components to the Redux store, using `mapStateToProps` and `mapDispatchToProps`.

---

## Redux Toolkit (RTK)

**Redux Toolkit (RTK)** is the official, opinionated, "batteries-included" toolset for efficient Redux development. It is the **standard and recommended approach** for writing Redux logic today.

### Redux vs. Redux Toolkit

RTK was created to solve common complaints about "vanilla" Redux:
1.  **Too much boilerplate**: Setting up a store, writing action creators, and defining action type constants was verbose.
2.  **Hard to configure**: The store setup required adding multiple middlewares (like Thunk) and the Redux DevTools manually.
3.  **Immutability was difficult**: Manually writing immutable updates with spread syntax was error-prone and verbose.

| Feature               | "Vanilla" Redux                                   | Redux Toolkit (RTK)                                       |
| --------------------- | ------------------------------------------------- | --------------------------------------------------------- |
| **Store Setup**       | Manual setup with `createStore`.                  | `configureStore()` automatically sets up DevTools & Thunk. |
| **Reducers & Actions**| Written separately (reducers, actions, constants).| `createSlice()` generates reducers and actions together.  |
| **Immutability**      | Manual, using spread syntax (`...`).              | Automatic via **Immer**. You can "mutate" state directly. |
| **Async Logic**       | Requires manually adding middleware like Thunk.   | `createAsyncThunk` provides a standard way to handle async. |
| **Boilerplate**       | High. Requires lots of repetitive code.           | Low. Drastically reduces boilerplate.                     |

### configureStore()

`configureStore()` simplifies store setup. It automatically:
-   Combines your slice reducers.
-   Adds the `redux-thunk` middleware by default.
-   Enables the Redux DevTools Extension.

```javascript
// store.js
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todosSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    user: userReducer,
  },
});
```

### createSlice()

`createSlice()` is the core of RTK's efficiency. It accepts an initial state, a name, and an object of reducer functions. It automatically generates action creators and action types that correspond to the reducers.

It also uses the **Immer** library internally, which lets you write "mutating" logic in reducers while ensuring the state remains immutable behind the scenes.

```javascript
// features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // Action creators are generated automatically
    increment(state) {
      state.value += 1; // Immer makes this immutable update safe
    },
    decrement(state) {
      state.value -= 1;
    },
    incrementByAmount(state, action) {
      state.value += action.payload;
    },
  },
});

// Export the generated action creators and the reducer
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

### createAsyncThunk()

`createAsyncThunk` is a utility for handling asynchronous actions (like API calls). It generates promise lifecycle action types (`pending`, `fulfilled`, `rejected`) that you can handle in your reducers.

```javascript
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchUserById } from './userAPI';

// First, create the thunk
export const fetchUser = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId, thunkAPI) => {
    const response = await fetchUserById(userId);
    return response.data;
  }
);

// Then, handle the actions in the slice using extraReducers
const usersSlice = createSlice({
  name: 'users',
  initialState: { entities: [], loading: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.entities.push(action.payload);
      })
      .addCase(fetchUser.rejected, (state) => {
        state.loading = 'failed';
      });
  },
});
```


## Middleware and Asynchronous Actions

### Middleware

**Middleware** provides a third-party extension point between dispatching an action and the moment it reaches the reducer. It's used for logging, crash reporting, talking to an asynchronous API, routing, and more.

The flow is: `Action -> Middleware -> Reducer`

### Redux Thunk

**Thunk** is a middleware that allows you to write action creators that return a **function** instead of an action object. This function receives `dispatch` and `getState` as arguments, allowing you to perform asynchronous logic and dispatch other actions.

-   **Use Case**: The most common use case is fetching data from an API.
-   **Integration**: Redux Toolkit's `configureStore` includes `redux-thunk` by default.

```javascript
// A thunk action creator
function fetchTodos() {
  // Return a function instead of an object
  return async function (dispatch, getState) {
    dispatch({ type: 'todos/todosLoading' });
    const response = await fetch('/api/todos');
    const data = await response.json();
    dispatch({ type: 'todos/todosLoaded', payload: data });
  };
}
```

### Redux Saga

**Redux Saga** is a more advanced middleware for managing side effects. It uses ES6 Generators to make asynchronous flows easy to read, write, and test. Sagas run in the background, listening for dispatched actions and triggering "worker" sagas to handle them.

-   **Use Case**: Best for complex, long-running side effects like managing websockets, handling concurrent API requests, or complex transaction-based flows.

### Comparison: Redux Thunk vs. Redux Saga

| Aspect        | Redux Thunk                                       | Redux Saga                                            |
| ------------- | ------------------------------------------------- | ----------------------------------------------------- |
| **Concept**   | Simple functions. Easy to learn.                  | ES6 Generators. Steeper learning curve.               |
| **Use Case**  | Good for simple to moderate async logic.          | Best for complex, long-running side effects.          |
| **Testability**| Can be harder to test async logic.                | Highly testable due to declarative effects.           |

For most standard applications, **Redux Thunk** (or RTK's `createAsyncThunk`) is sufficient and easier to start with.

---

## Advanced Patterns & Performance

### Selectors and Memoization (Reselect)

A **selector** is a function that accepts the Redux state as an argument and returns derived data. **Memoization** is a performance optimization technique where you cache the results of expensive function calls.

The `reselect` library provides a `createSelector` function to create memoized selectors. This prevents unnecessary re-renders in components if the underlying data hasn't changed.

```javascript
import { createSelector } from 'reselect';

const getTodos = state => state.todos.items;
const getFilter = state => state.todos.filter;

// This selector will only re-run if `getTodos` or `getFilter` return a new value
export const getVisibleTodos = createSelector(
  [getTodos, getFilter], // Input selectors
  (todos, filter) => {   // Result function
    switch (filter) {
      case 'completed':
        return todos.filter(t => t.completed);
      default:
        return todos;
    }
  }
);
```

### Normalizing State Shape

For complex or nested data (like API responses), it's a best practice to **normalize** the state. This means storing data in a flat structure, similar to a database, with IDs as keys and items as values.

**Before (Nested):**
`{ "posts": [{ "id": "post1", "author": { "id": "user2" } }] }`

**After (Normalized):**
```json
{
  "posts": { 
    "byId": { "post1": { "id": "post1", "author": "user2" } }, 
    "allIds": ["post1"] 
  },
  "users": { 
    "byId": { "user2": { "id": "user2" } }, 
    "allIds": ["user2"] 
  }
}
```
This makes it easier to look up items, update them without complex nested logic, and prevent data duplication.

### Optimistic Updates

An optimistic update is when you update the UI *before* an asynchronous operation (like an API call) completes. This makes the application feel faster. If the operation fails, you roll back the change and show an error.

### Structuring a large-scale Redux application

For large applications, the "Ducks" or **"feature folder"** pattern is recommended. All logic for a single feature (reducers, actions, selectors, components) is kept together in one folder. This is the standard approach encouraged by Redux Toolkit.

### Using Redux DevTools for debugging

The Redux DevTools is a browser extension that provides a power-packed debugging environment for Redux applications. It allows you to:
-   Inspect every action and its payload.
-   View the state before and after each action.
-   "Time-travel" by dispatching actions again or jumping to a specific state.

---

## Ecosystem & Practical Use Cases

### Redux vs. Context API: When to use each

| Feature             | React Context API                                     | Redux                                                     |
| ------------------- | ----------------------------------------------------- | --------------------------------------------------------- |
| **Use Case**        | Best for low-frequency updates and simple state.      | Ideal for complex, high-frequency state updates.          |
| **Performance**     | Can cause extra re-renders in consuming components.   | Highly optimized with selectors (`reselect`) and middleware. |
| **Ecosystem**       | No middleware, no DevTools out of the box.            | Rich ecosystem with DevTools, middleware, persistence.    |
| **When to Choose**  | Theming, user authentication, simple global state.    | Large-scale apps, complex data flows, performance needs.  |

**Rule of thumb**: Start with Context. If you find yourself passing many props down or state management becomes complex, consider migrating to Redux.

### Redux Persist

`redux-persist` is a library that saves (persists) the Redux store to a storage engine (like `localStorage` or `AsyncStorage` in React Native) and rehydrates it when the app launches.

-   **Use Case**: Keep user sessions active, save shopping cart contents, or remember user preferences across browser refreshes.

### Authentication with Redux

Redux is excellent for managing authentication state (e.g., `isAuthenticated`, `user`, `token`, `loading`).

-   **JWT (JSON Web Tokens)**: A common standard for creating access tokens. The flow is typically:
    1.  User logs in with credentials.
    2.  Server validates credentials and returns a JWT.
    3.  Client stores the JWT securely and sends it with every subsequent request.
-   **Access Token vs. Refresh Token**: An access token is short-lived and grants access to resources. A refresh token is long-lived and is used to obtain a new access token when the old one expires.
-   **Secure Token Storage**: Storing JWTs in `localStorage` is common but vulnerable to XSS attacks. Storing them in secure, `HttpOnly` cookies is generally safer as they are not accessible by client-side JavaScript.
-   **Axios Interceptors**: A powerful pattern for automatically attaching the auth token to every outgoing API request and handling token refresh logic globally.

### Testing Redux

-   **Reducers**: As pure functions, they are the easiest part to test. Provide a state and an action, and assert that the output state is correct.
-   **Action Creators**: Test that they return the correct action object.
-   **Async Logic (Thunks)**: Use libraries like `redux-mock-store` to mock the store and dispatch, then test whether the correct actions were dispatched in sequence.

---

## Practical Projects

Here are some project ideas to practice and solidify your Redux skills.

1.  **Build a Counter**
    -   **Concepts**: `createSlice`, `useSelector`, `useDispatch`.
    -   **Goal**: A simple app with buttons to increment, decrement, and reset a counter.

2.  **Create a TODO List**
    -   **Concepts**: Handling arrays in state, `payload` actions, filtering.
    -   **Goal**: An app to add, toggle the completion status of, and delete TODO items.

3.  **Fetch data from an API**
    -   **Concepts**: `createAsyncThunk`, handling `pending`/`fulfilled`/`rejected` states, displaying loading and error states.
    -   **Goal**: Fetch a list of items (e.g., posts, users) from a public API and display them.

4.  **Implement a User Login/Logout Flow**
    -   **Concepts**: Managing auth state, storing tokens, conditional rendering based on auth status, protecting routes.
    -   **Goal**: A simple login form that, on success, updates the Redux store and shows a protected user dashboard.

5.  **Move Local Component State to Redux**
    -   **Concepts**: Identifying global vs. local state.
    -   **Goal**: Refactor a React component that uses `useState` to manage its state, moving the relevant state into the global Redux store.


---

## RTK Query: Modern Data Fetching

**RTK Query** is a powerful data fetching and caching tool built into Redux Toolkit. It is designed to simplify the common case of loading data from a server, eliminating the need to write `createAsyncThunk` and reducers for your server state by hand.

### What is RTK Query?

It's a complete solution for fetching, caching, synchronizing, and updating server state in your Redux applications. Instead of you managing the loading states, caching, and request logic, RTK Query does it for you.

### Core Concepts

-   **API Slice (`createApi`)**: You define a single "API slice" for your entire base API. This is where you define your endpoints.
-   **Endpoints**: These are the individual operations you can perform against your API. There are two types:
    -   **`query`**: For fetching data (equivalent to a GET request).
    -   **`mutation`**: For updating data on the server (e.g., POST, PUT, DELETE).
-   **Auto-generated Hooks**: For each endpoint you define, RTK Query automatically generates React hooks that you can use in your components (e.g., `useGetPostsQuery`, `useCreatePostMutation`).
-   **Caching and Invalidation**: RTK Query automatically caches data from `query` endpoints. `mutation` endpoints can be configured to automatically invalidate cached data, triggering a re-fetch.

### Example: Creating and Using an API Slice

Here’s how you would fetch a list of posts and create a new post.

**1. Define the API Slice:**

```javascript
// src/features/api/apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: 'api', // The key where the reducer will be mounted
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Post'], // Define tags for cache invalidation
  endpoints: (builder) => ({
    // Query endpoint to get all posts
    getPosts: builder.query({
      query: () => 'posts',
      providesTags: ['Post'], // This query provides the 'Post' tag
    }),
    // Mutation endpoint to add a new post
    addNewPost: builder.mutation({
      query: (initialPost) => ({
        url: 'posts',
        method: 'POST',
        body: initialPost,
      }),
      invalidatesTags: ['Post'], // Adding a post invalidates the 'Post' tag, triggering a re-fetch
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPostsQuery, useAddNewPostMutation } = apiSlice;
```

**2. Configure the Store:**

You need to add the API slice's generated reducer and middleware to your store.

```javascript
// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
```

**3. Use the Hooks in a Component:**

Now you can use the auto-generated hooks in your React components to fetch and update data.

```jsx
import React from 'react';
import { useGetPostsQuery, useAddNewPostMutation } from '../features/api/apiSlice';

function PostsList() {
  const { data: posts, isLoading, isSuccess, isError, error } = useGetPostsQuery();
  const [addNewPost, { isLoading: isAdding }] = useAddNewPostMutation();

  const handleAddPost = async () => {
    await addNewPost({ title: 'New Post', body: 'Content' }).unwrap();
  };

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = posts.map((post) => <div key={post.id}>{post.title}</div>);
  } else if (isError) {
    content = <p>{error.toString()}</p>;
  }

  return (
    <section>
      <h2>Posts</h2>
      <button onClick={handleAddPost} disabled={isAdding}>
        {isAdding ? 'Adding...' : 'Add New Post'}
      </button>
      {content}
    </section>
  );
}
```

By using RTK Query, you avoid writing any thunks, action creators, or reducers for this entire data-fetching flow. It handles all the complexity for you.

---