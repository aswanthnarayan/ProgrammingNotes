# React Documentation

---

## 1. Introduction to React

### What is React? (Library vs. Framework)

React is an open-source JavaScript **library** for building user interfaces (UIs) or UI components. It is maintained by Facebook (Meta) and a community of individual developers and companies.

-   **Library**: React is often called a library because it focuses on the view layer of an application. It provides tools to build UI components but doesn't prescribe a full application structure, routing, or data management solution out of the box. This gives developers flexibility to choose other libraries (like React Router for routing or Redux for state management) to build a complete application.
-   **Framework**: A framework (like Angular or Vue) is more opinionated and provides a complete solution with built-in tools for routing, state management, and more. It dictates the architecture of your application.

React's component-based architecture allows developers to create encapsulated components that manage their own state, making it easier to build complex, scalable, and reusable UIs.

### How React Works: Fiber, Reconciliation, and the Diffing Algorithm

At its core, React's efficiency comes from how it updates the UI. This process involves three key concepts:

1.  **React Fiber Architecture**: Fiber is a complete rewrite of React's old reconciliation algorithm. It's an ongoing process to make React faster and more fluid. Its main goals are:
    *   **Incremental Rendering**: The ability to split rendering work into chunks and spread it out over multiple frames.
    *   **Pausing and Resuming Work**: The ability to pause, abort, or reuse work as new updates come in.
    -   **Prioritization**: The ability to assign priority to different types of updates (e.g., user input is higher priority than data fetching).
    This prevents high-priority updates from being blocked by low-priority rendering, avoiding UI freezes.

2.  **Reconciliation**: This is the process through which React updates the browser DOM. When a component's state or props change, React decides whether an actual DOM update is necessary. This process is what makes React fast.

3.  **The Diffing Algorithm**: To perform reconciliation, React uses a heuristic algorithm to compare two Virtual DOM trees:
    *   The tree from the previous render.
    *   The new tree that reflects the updated state/props.

    React "diffs" these two trees to find the minimum number of operations required to update the Real DOM. Key heuristics include:
    *   **Different Element Types**: If the root elements have different types (e.g., `<div>` becomes `<span>`), React will tear down the old tree and build a new one from scratch.
    *   **Keys**: When rendering a list of elements, a unique `key` prop for each item helps React identify which items have changed, been added, or been removed. Without keys, React performs inefficient updates.

### Virtual DOM vs. Real DOM

-   **Real DOM (Document Object Model)**: The Real DOM is the standard tree-like structure representing all the HTML elements on a web page. Manipulating it directly is slow and resource-intensive because any change can trigger a re-layout and re-paint of the entire UI.
-   **Virtual DOM (VDOM)**: The Virtual DOM is a lightweight, in-memory representation of the Real DOM. When a component's state changes, React first updates the Virtual DOM. This is extremely fast because it doesn't involve interacting with the browser's rendering engine.

**The Process:**
1.  A state change occurs.
2.  React creates a new Virtual DOM tree.
3.  React compares (diffs) the new VDOM with the previous one.
4.  It calculates the minimal set of changes needed.
5.  These changes are batched together and applied to the Real DOM in a single, efficient operation.

### Single Page Applications (SPA)

A Single Page Application is a web application that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of a web browser loading entire new pages. The goal is faster transitions that make the website feel more like a native app.

React is perfectly suited for building SPAs because its component-based architecture and efficient VDOM updates allow for seamless UI changes without full page reloads.

### Transpilation (Babel, Webpack)

-   **JSX is not standard JavaScript**. Browsers cannot understand it directly. We need a tool to convert JSX into regular JavaScript objects that browsers can execute. This process is called **transpilation**.
-   **Babel**: The most popular transpiler for this job. It converts modern JavaScript (ES6+) and JSX into browser-compatible JavaScript (ES5).
-   **Webpack**: A module bundler. It takes all your JavaScript files, assets (like CSS and images), and dependencies, and bundles them into a few static files optimized for the browser. Tools like Vite and Create React App use bundlers like Webpack or Rollup under the hood.

---

## 2. Getting Started

### Setting up a React environment (Vite/Create React App)

Modern toolchains provide the best developer experience. The two most popular choices are:

-   **Vite**: A next-generation frontend tooling that offers an extremely fast development server by leveraging native ES modules in the browser. It's the recommended choice for new React projects.
    ```bash
    npm create vite@latest my-react-app -- --template react
    cd my-react-app
    npm install
    npm run dev
    ```

-   **Create React App (CRA)**: The historical standard, built by Facebook. It's still widely used but is slower than Vite for development.
    ```bash
    npx create-react-app my-react-app
    cd my-react-app
    npm start
    ```

---

## 3. Core Concepts

### JSX: Syntax and Rules (vs. HTML)

JSX (JavaScript XML) is a syntax extension for JavaScript that looks very similar to HTML. It allows you to write UI structures in a familiar way, but with the full power of JavaScript.

**Key Differences from HTML:**
-   **`className` instead of `class`**: Since `class` is a reserved keyword in JavaScript, React uses `className`.
-   **CamelCase for Attributes**: HTML attributes like `onclick` or `tabindex` become `onClick` and `tabIndex` in JSX.
-   **JavaScript Expressions in Curly Braces**: You can embed any JavaScript expression within `{}`.
    ```jsx
    const name = 'World';
    const element = <h1>Hello, {name}!</h1>;
    ```
-   **Self-Closing Tags**: Tags without children must be self-closed (e.g., `<img />`, `<br />`).
-   **One Root Element**: A JSX expression must have exactly one outermost element. If you need more, wrap them in a Fragment.

### Fragments

Fragments let you group a list of children without adding extra nodes to the DOM. This is useful for returning multiple elements from a component.

```jsx
// Long syntax
import React from 'react';
function MyComponent() {
  return (
    <React.Fragment>
      <td>Hello</td>
      <td>World</td>
    </React.Fragment>
  );
}

// Short syntax (<>)
function MyComponent() {
  return (
    <>
      <td>Hello</td>
      <td>World</td>
    </>
  );
}
```

### Components: Functional vs. Class-based, Stateful vs. Stateless

Components are the building blocks of a React application. They are independent and reusable pieces of code.

-   **Functional Components**: The modern and recommended way to write components. They are simple JavaScript functions that accept `props` and return JSX. With Hooks, they can manage state and side effects.
    ```jsx
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }
    ```
-   **Class Components**: The older way of writing components. They are ES6 classes that extend `React.Component` and have a `render()` method.
    ```jsx
    class Welcome extends React.Component {
      render() {
        return <h1>Hello, {this.props.name}</h1>;
      }
    }
    ```

-   **Stateful Components**: Components that hold and manage their own data (`state`). Any component with state is stateful.
-   **Stateless (or Presentational) Components**: Components that do not have their own state. They simply receive data via `props` and render it. They are predictable and easy to test.

### Props: Passing data from parent to child

`props` (short for properties) are read-only objects used to pass data from a parent component to a child component. This is the primary way to configure and customize child components.

```jsx
// Parent Component
function App() {
  return <Greeting name="Alice" />;
}

// Child Component
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>; // Accessing the 'name' prop
}
```

### State: Managing component-level data

`state` is an object that represents the parts of the app that can change. Each component can have its own state, which is private to that component. When a component's state changes, React re-renders the component.

In functional components, we use the `useState` Hook to manage state.

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // 0 is the initial state

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

### Conditional Rendering

You can render different UI elements based on certain conditions. Common approaches include:

-   **`if/else` statements**
-   **Ternary operator (`condition ? true : false`)**: Clean for simple conditions.
-   **Logical `&&` operator (`condition && expression`)**: Renders the expression only if the condition is true.

```jsx
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please sign in.</p>}
      {isLoggedIn && <button>Logout</button>}
    </div>
  );
}
```

### Lists and Keys

To render a list of items, you typically use the `.map()` function. Each item in the list must have a unique `key` prop.

**Why are keys important?**
Keys help React's diffing algorithm identify which items have changed, been added, or been removed. This allows for much more efficient UI updates. The key should be a stable, unique identifier (like an `id` from your data).

```jsx
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
```

### Event Handling and Synthetic Events

Handling events in React is similar to handling events on DOM elements, with a few syntax differences:
-   React events are named using camelCase (e.g., `onClick` instead of `onclick`).
-   You pass a function as the event handler, rather than a string.

React wraps the browser's native event into a **SyntheticEvent**. This wrapper provides a consistent API across all browsers, so you don't have to worry about cross-browser compatibility issues.

```jsx
function MyButton() {
  function handleClick() {
    alert('Button clicked!');
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

### Component Lifecycle Methods (Class & Functional)

The component lifecycle is a sequence of phases a component goes through from its creation to its destruction.

**Class Components Lifecycle:**
-   **Mounting**: Putting elements into the DOM.
    -   `constructor()`
    -   `render()`
    -   `componentDidMount()`: Called after the component is rendered. Good for API calls.
-   **Updating**: When props or state change.
    -   `render()`
    -   `componentDidUpdate()`: Called after an update occurs.
-   **Unmounting**: When a component is removed from the DOM.
    -   `componentWillUnmount()`: Called right before unmounting. Good for cleanup (e.g., clearing timers).

**Functional Components Lifecycle (with `useEffect` Hook):**
The `useEffect` hook combines the functionality of `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

-   **`componentDidMount` equivalent**: `useEffect(() => { ... }, [])` (empty dependency array).
-   **`componentDidUpdate` equivalent**: `useEffect(() => { ... }, [dep1, dep2])` (runs when dependencies change).
-   **`componentWillUnmount` equivalent**: `useEffect(() => { return () => { ... } }, [])` (the cleanup function).

### Strict Mode

`StrictMode` is a tool for highlighting potential problems in an application. It does not render any visible UI. It activates additional checks and warnings for its descendants.

-   Helps identify components with unsafe lifecycles.
-   Warns about legacy API usage.
-   Detects unexpected side effects by intentionally double-invoking certain functions (like render and constructors).

```jsx
import React from 'react';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

---

## 4. Hooks

Hooks are functions that let you “hook into” React state and lifecycle features from functional components. Hooks don't work inside classes.

### `useState`: Managing state in functional components

The most common hook. It lets you add state to functional components.

-   **Declaration**: `const [state, setState] = useState(initialState);`
-   It returns a pair: the current state value and a function that lets you update it.

### `useEffect`: Handling side effects and lifecycle events

Lets you perform side effects in functional components. Side effects include data fetching, subscriptions, or manually changing the DOM.

-   **Syntax**: `useEffect(setup, dependencies?)`
-   **Dependencies Array `[]`**: Controls when the effect runs.
    -   `[]` (empty array): Runs only once, after the initial render (like `componentDidMount`).
    -   `[dep1, dep2]`: Runs after the initial render and whenever any dependency value changes.
    -   No array: Runs after every render.
-   **Cleanup Function**: The function returned from `useEffect` runs before the component unmounts or before the effect runs again. It's used for cleanup.

```jsx
useEffect(() => {
  // Side effect logic here
  console.log('Component mounted or dependency changed');

  return () => {
    // Cleanup logic here
    console.log('Component will unmount or effect will re-run');
  };
}, [dependency]);
```

### `useContext`: Avoiding prop drilling

Lets you subscribe to React context without introducing nesting. It provides a way to pass data through the component tree without having to pass props down manually at every level.

**Prop Drilling**: The process of passing props from a parent component down through various child components to a deeply nested child that actually needs the data.

```jsx
// 1. Create a context
const ThemeContext = React.createContext('light');

// 2. Provide the context value
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

// 3. Consume the context value
function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>I am a {theme} button</button>;
}
```

### `useRef`: Accessing DOM elements and persisting values

`useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument. It has two main uses:

1.  **Accessing DOM Elements**: You can attach a ref to a DOM element to access it directly (e.g., to focus an input).
2.  **Persisting Values without Re-rendering**: A ref can hold a value that persists across renders without causing a re-render when it changes (unlike state).

```jsx
function TextInputWithFocusButton() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

### `useReducer`: Managing complex state logic

An alternative to `useState`. It's usually preferred when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.

-   **Syntax**: `const [state, dispatch] = useReducer(reducer, initialArg, init);`
-   It takes a **reducer function** and an initial state, and returns the current state and a `dispatch` function.

```jsx
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}
```

### `useCallback`: Memoizing functions

Returns a memoized version of a callback function that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

-   **Problem**: A new function is created on every render. If this function is passed as a prop to a memoized child component (`React.memo`), the child will re-render unnecessarily.
-   **Solution**: `useCallback` gives you the same function reference across renders as long as its dependencies don't change.

```jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

### `useMemo`: Memoizing computed values

Returns a memoized value. It re-runs the function and re-computes the value only when one of its dependencies has changed. This is useful for optimizing expensive calculations.

-   **Problem**: An expensive calculation runs on every render.
-   **Solution**: `useMemo` caches the result of the calculation. The calculation is only re-run if a dependency changes.

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

### `useLayoutEffect`

The signature is identical to `useEffect`, but it fires **synchronously** after all DOM mutations. Use this to read layout from the DOM and synchronously re-render.

-   **When to use it?**: Use it for DOM measurements (like getting the scroll position or the size of an element) that you need *before* the browser has a chance to paint. Updates scheduled inside `useLayoutEffect` will be flushed synchronously, before the browser has a chance to paint.
-   **Warning**: Prefer `useEffect` when possible to avoid blocking visual updates.

### `useImperativeHandle`

Customizes the instance value that is exposed to parent components when using `ref`. It should be used with `forwardRef`.

This allows a child component to expose specific functions to its parent, rather than the entire DOM node. This is useful for controlling child behavior from the parent imperatively.

### `useId`

A hook for generating unique IDs that are stable across server and client, to avoid hydration mismatches. This is primarily useful for accessibility attributes like `htmlFor` and `id`.

```jsx
function Checkbox() {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>Do you like React?</label>
      <input id={id} type="checkbox" name="react" />
    </>
  );
}
```

### Custom Hooks: Reusing stateful logic

A custom Hook is a JavaScript function whose name starts with `use` and that may call other Hooks. They are a way to extract component logic into reusable functions.

-   **Example**: A `useWindowWidth` hook to track browser window width.

```jsx
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

// Usage in a component
function MyComponent() {
  const width = useWindowWidth();
  return <p>Window width is {width}</p>;
}
```

---

## 5. Advanced Concepts & Patterns

### Lifting State Up

When several components need to reflect the same changing data, it is recommended to lift the shared state up to their closest common ancestor. Each child can then receive the state via props and a callback to update it.

This keeps components more predictable and ensures a single source of truth for the shared state.

### Controlled vs. Uncontrolled Components

This pattern typically applies to form inputs.

-   **Controlled Component**: An input form element whose value is controlled by React state. The state is the single source of truth. Every state mutation will have an associated handler function.
    ```jsx
    const [name, setName] = useState('');
    <input type="text" value={name} onChange={e => setName(e.target.value)} />
    ```
-   **Uncontrolled Component**: An input form element where the data is handled by the DOM itself. You use a `ref` to get form values when needed (e.g., on form submission).
    ```jsx
    const inputRef = useRef(null);
    <input type="text" defaultValue="" ref={inputRef} />
    // On submit: console.log(inputRef.current.value);
    ```

### Higher-Order Components (HOCs)

A Higher-Order Component is a function that takes a component and returns a new component. It's a pattern for reusing component logic.

-   **Example**: A `withAuth` HOC that wraps a component and only renders it if the user is authenticated.

```jsx
function withSubscription(WrappedComponent, selectData) {
  return class extends React.Component {
    // ... logic to subscribe and get data
    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}
```

While HOCs are powerful, they can lead to wrapper hell and are often replaced by Custom Hooks in modern React.

### Render Props

A technique for sharing code between components using a prop whose value is a function. The component with the render prop calls the function instead of implementing its own rendering logic.

```jsx
<DataProvider render={data => (
  <h1>Hello {data.name}</h1>
)} />
```

Like HOCs, this pattern has been largely superseded by Custom Hooks for its simplicity.

### Error Boundaries

Error Boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

They are implemented as class components with a `componentDidCatch` lifecycle method.

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

### Portals

Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. A common use case is for modals, tooltips, or dialogs.

```jsx
import ReactDOM from 'react-dom';

function Modal({ children }) {
  return ReactDOM.createPortal(
    children,
    document.getElementById('modal-root')
  );
}
```

### Forwarding Refs

Ref forwarding is a technique for automatically passing a `ref` through a component to one of its children. This is useful for accessing the DOM node of a child component from a parent.

```jsx
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// You can now get a ref directly to the DOM button:
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;
```

### Context API with `useReducer` for state management

For complex, global state, combining `useContext` and `useReducer` provides a powerful state management solution within React, without external libraries.

1.  Define a reducer to handle state transitions.
2.  Create a context.
3.  Create a provider component that uses `useReducer` and passes the `state` and `dispatch` function through the context value.
4.  Wrap your app (or relevant part) in the provider.
5.  Consume the context in any child component using `useContext` to get access to the state and dispatch actions.

### React Design Patterns

-   **Compound Components**: A pattern where components work together to manage a shared state and logic. An example is a `<select>` and `<option>` system, where the parent manages the state and the children are used to build the UI.
-   **Provider Pattern**: Used by libraries like React Redux and React Router. It uses React's Context API to pass data down to all components in the tree without prop drilling.

---

## 6. Performance Optimization

### `React.memo`: Memoizing components

`React.memo` is a higher-order component that memoizes a component. If the component renders the same result given the same props, React will skip re-rendering the component and reuse the last rendered result.

```jsx
const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
});
```

It does a shallow comparison of props. For more control, you can provide a custom comparison function.

### Code Splitting with `React.lazy` and `Suspense`

Code-splitting is a feature supported by bundlers like Webpack and Vite that can create multiple bundles that can be dynamically loaded at runtime.

-   **`React.lazy`**: A function that lets you render a dynamic import as a regular component.
-   **`Suspense`**: A component that lets you specify a loading indicator (a "fallback") if the components in the tree below it are not yet ready to render.

```jsx
import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
```

### Performance Profiling with React DevTools

The React DevTools browser extension includes a Profiler tab. It allows you to record rendering performance, identify components that are rendering too often, and find bottlenecks in your application.

### Debouncing and Throttling

These are techniques to control how often a function gets called.

-   **Debouncing**: Groups a sequence of calls into a single one. It only executes the function after a certain period of inactivity (e.g., for search input suggestions).
-   **Throttling**: Guarantees that a function is executed at most once per specified time period (e.g., for handling scroll or resize events).

These can be implemented in React using custom hooks.

---

## 7. The React Ecosystem

### React Router: Declarative routing for React apps

The standard library for routing in React. It allows you to build a SPA with navigation, while keeping the UI in sync with the URL.

### State Management Libraries (e.g., Redux, Zustand)

For large applications, managing state can become complex. Libraries provide centralized and predictable state containers.

-   **Redux**: The most established state management library. It uses a single global store, reducers, and actions. It has a steeper learning curve but offers powerful developer tools.
-   **Zustand**: A small, fast, and scalable state-management solution using a minimalistic API based on hooks. It's much simpler to set up than Redux.

### Styling in React

-   **CSS-in-JS**: Libraries like `styled-components` and `Emotion` let you write actual CSS code in your JavaScript files. This allows for dynamic, component-scoped styling.
-   **CSS Modules**: A CSS file in which all class names and animation names are scoped locally by default. This prevents class name collisions.
-   **Tailwind CSS**: A utility-first CSS framework that provides low-level utility classes to build designs directly in your markup.

### Fetching Data (Fetch API, Axios)

-   **Fetch API**: A modern, promise-based API built into the browser for making network requests.
-   **Axios**: A popular third-party library for making HTTP requests. It has a simpler API, automatic JSON transformation, and better error handling than Fetch.

Modern data-fetching libraries like **React Query** and **SWR** provide hooks that handle caching, re-fetching, and state management for server data, greatly simplifying data fetching logic.

### Form Handling Libraries (e.g., Formik, React Hook Form)

While you can handle forms with controlled components, libraries can reduce boilerplate and manage complex validation and state.

-   **Formik**: A popular library for building forms in React.
-   **React Hook Form**: A performant, flexible, and extensible forms library that uses hooks and refs, often resulting in less re-renders.

### Testing (Jest, React Testing Library)

-   **Jest**: A popular JavaScript testing framework. It's often used as a test runner, assertion library, and for mocking.
-   **React Testing Library (RTL)**: A library for testing React components that encourages good testing practices. It focuses on testing components from a user's perspective, interacting with them as a user would, rather than testing implementation details.

### TypeScript with React

TypeScript is a statically typed superset of JavaScript. Using it with React provides benefits like:
-   Type safety for props, state, and context.
-   Better autocompletion and developer experience.
-   Catching bugs at build time instead of runtime.

---

## 8. Build & Deployment

### SSR vs. CSR & Hydration

-   **Client-Side Rendering (CSR)**: The default for React apps. The browser downloads a minimal HTML file and a JavaScript bundle. React then takes over and renders the app in the browser. **Pros**: Richer site interactions. **Cons**: Slower initial load time, can be bad for SEO.
-   **Server-Side Rendering (SSR)**: The server renders the initial HTML for the page and sends it to the browser. The browser can display this immediately. **Pros**: Faster initial page load, better for SEO. **Cons**: More complex setup, slower server response time.
-   **Hydration**: The process of attaching React to the server-rendered HTML, making it a fully interactive SPA on the client side.

Frameworks like **Next.js** and **Remix** are built on top of React to make SSR and other advanced features easier to implement.

### Build and Deployment

-   **Build**: Running `npm run build` with Vite or CRA creates an optimized, production-ready `dist` or `build` folder with static assets.
-   **Deployment**: This folder can be deployed to any static hosting provider.
-   **Hosting Platforms**: Vercel, Netlify, and GitHub Pages are popular choices for deploying React applications, often with built-in CI/CD (Continuous Integration/Continuous Deployment) pipelines.

---

## 9. Security & Accessibility

### Accessibility (a11y) in React

Ensuring your application is usable by as many people as possible.
-   Use semantic HTML (`<nav>`, `<main>`, `<button>`).
-   Manage focus properly in your application.
-   Add ARIA attributes where necessary.
-   Use tools like `eslint-plugin-jsx-a11y` to catch issues.

### Security Best Practices

-   **Cross-Site Scripting (XSS)**: React automatically escapes content rendered in JSX, which protects against most XSS attacks. However, be careful when using `dangerouslySetInnerHTML`.
-   **Data Sanitization**: Sanitize user input on the server before storing it in a database.
-   Avoid injecting user-provided content directly into URLs or API calls.

---

## 10. Practical Projects & Exercises

1.  **Create a Counter Application**: Practice `useState` and event handling.
2.  **Build a TODO List**: Practice state management for a list (add, edit, delete, mark as complete), props, and component composition.
3.  **Fetch and display data from a public API**: Practice `useEffect` for data fetching, and conditional rendering for loading/error states.
4.  **Implement a multi-page application with React Router**: Practice setting up routes, navigation, and dynamic route parameters.
5.  **Build a form with validation**: Practice controlled components and state management for forms.
6.  **Create a theme switcher using Context API**: Practice `useContext` for providing global state.
7.  **Optimize a component's performance**: Refactor a slow component using `React.memo`, `useMemo`, and `useCallback`.