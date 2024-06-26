## Library vs Framework vs Package

- Library: A library is a collection of functions / objects that serves one particular purpose. you could use a library in a variety of projects. (e.g. Apache Commons Library)
- Framework: A framework defines the structure of your code and provides a set of rules that you can follow while developing your application. (e.g. Spring Framework)
- Package: A package is a namespace that organizes a set of related classes and interfaces. Conceptually you can think of packages as being similar to different folders on your computer. You might keep HTML pages in one folder, images in another, and scripts or applications in yet another. Because software written in the Java programming language can be composed of hundreds or thousands of individual classes, it makes sense to keep things organized by placing related classes and interfaces into packages.

## What is node

- Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.

- Node Registy: npm is the package manager for JavaScript and the world’s largest software registry. Discover packages of reusable code — and assemble them in powerful new ways.

- Node Package Manager: npm is the package manager for JavaScript and the world’s largest software registry. Discover packages of reusable code — and assemble them in powerful new ways.

## Diff between NPX and NPM

- npm: npm makes it easy for JavaScript developers to share and reuse code, and it makes it easy to update the code that you’re sharing.

- npx: npx is a tool intended to help round out the experience of using packages from the npm registry — the same way npm makes it super easy to install and manage dependencies hosted on the registry, npx makes it easy to use CLI tools and other executables hosted on the registry.

## What is carousel in website

- A carousel is a rotating set of images, rotation stops on keyboard focus on carousel tab controls or hovering the mouse pointer over images. Use the tabs or the previous and next buttons to change the displayed slide.

## Semantic Versioning (SemVer)

- ex: ^1.2.3

* 1: Major version
* 2: Minor version
* 3: Patch version
* ^: Compatible with version
  - Major version: When you make incompatible API changes. Also when you make incompatible changes to the public API.
  - Minor version: When you add functionality in a backwards-compatible manner.
  - Patch version: When you make backwards-compatible bug fixes.
  - ^: Used to specify compatible versions. The caret (^) allows npm to install future updates as well. For example, ^1.2.3 will install the latest 1.x.x version, but will not install 2.0.0.

## Props in React

- Props are arguments passed into React components. Props are passed to components via HTML attributes. Props can be accessed by the child component and used to render dynamic content.
- Props are read-only. A child component cannot change the props from the parent component. Props are used to pass data, whereas state is used to manage data.

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
```

## State in React

- State is a built-in React object that allows components to create and manage their own data. State is used for mutable data, or data that will change. Only class components can have state. When the state object changes, the component re-renders.

### Types of State in React

- Local State: Local state is state that is not shared with any other component. Local state is managed within the component itself.
- Global State: Global state is state that is shared with multiple components. Global state is managed by a state management library such as Redux or Context API.
- Parent State: Parent state is state that is passed from a parent component to a child component. Parent state is managed by the parent component and passed down to child components as props.
- Child State: Child state is state that is passed from a child component to a parent component. Child state is managed by the child component and passed up to the parent component using a callback function.

## State Hook in React

### Types of Hooks in React

1. useState: useState is a built-in React hook that allows you to add state to functional components. useState returns an array with two elements: the current state value and a function that lets you update it.
2. useEffect: useEffect is a built-in React hook that allows you to perform side effects in functional components. useEffect runs after the component has rendered and after every update. useEffect can be used to fetch data, subscribe to events, or update the DOM.Only State variables are accessible in useEffect.

   - useEffect runs after the component has rendered and after every update.
     Its only called once after the first render and after every update.
   - empty dependency array means it only runs once after the first render = mounting

   - no dependency array means it runs after every render = updating = mounting + rendering

3. useContext: useContext is a built-in React hook that allows you to access the value of a context provider in a functional component. useContext returns the current context value for the context provider.
4. useReducer: useReducer is a built-in React hook that allows you to manage complex state logic in functional components. useReducer is similar to useState, but it accepts a reducer function with the current state and an action to update the state.
5. useRef: useRef is a built-in React hook that allows you to create a mutable reference to a DOM element or a value in a functional component. useRef returns a mutable object with a current property that can be updated.
6. useMemo: useMemo is a built-in React hook that allows you to memoize expensive calculations in functional components. useMemo returns a memoized value that only changes when the dependencies change.
7. useCallback: useCallback is a built-in React hook that allows you to memoize functions in functional components. useCallback returns a memoized callback function that only changes when the dependencies change.
8. useImperativeHandle: useImperativeHandle is a built-in React hook that allows you to customize the instance value that is exposed to parent components when using ref. useImperativeHandle can be used to hide certain properties or methods from parent components.
9. useLayoutEffect: useLayoutEffect is a built-in React hook that allows you to perform side effects in functional components after the DOM has been updated. useLayoutEffect runs synchronously after the DOM has been updated, but before the browser paints the screen.

### useState Example

```jsx
import React, { useState } from "react";
function App() {
  let [inputT, setInputT] = useState("");
  function handleChange(e) {
    setInputT(e.target.value);
  }
  return (
    <div>
      <input type="text" value={inputT} onChange={handleChange} />
      <p>{inputT}</p>
    </div>
  );
}
```

### useRef Example

```jsx
import React, { useRef } from "react";
function App() {
  let inputRef = useRef();
  function handleClick() {
    inputRef.current.focus();
    inputRef.current.value = "Hello";
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
}
```

### diffrence between array of objects and objects of objects

array of objects: [{}, {}, {}]
objects of objects: {key: {}, key: {}, key: {}}

Pros of array of objects:

- Easy to loop through
- Easy to add new objects
- Easy to remove objects

Cons of array of objects:

- Hard to access a specific object

Pros of objects of objects:

- Easy to access a specific object

Cons of objects of objects:

- Hard to loop through
- Hard to add new objects
- Hard to remove objects

#### How to loop in Object of object :-

```jsx
const obj = {
  key1: { name: "John", age: 30 },
  key2: { name: "Jane", age: 25 },
  key3: { name: "Jake", age: 35 },
};
for (let key in obj) {
  console.log(obj[key]);
}
```

2nd way to loop in Object of object :-

```jsx
const obj = {
  key1: { name: "John", age: 30 },
  key2: { name: "Jane", age: 25 },
  key3: { name: "Jake", age: 35 },
};
Object.keys(obj).forEach((key) => {
  console.log(obj[key]);
});
```

3rd way to loop in Object of object :-

```jsx
const obj = {
  key1: { name: "John", age: 30 },
  key2: { name: "Jane", age: 25 },
  key3: { name: "Jake", age: 35 },
};
Object.values(obj).forEach((value) => {
  console.log(value);
});
```

4th way to loop in Object of object :-

```jsx
const obj = {
  key1: { name: "John", age: 30 },
  key2: { name: "Jane", age: 25 },
  key3: { name: "Jake", age: 35 },
};
Object.entries(obj).forEach(([key, value]) => {
  console.log(key, value);
});
```
