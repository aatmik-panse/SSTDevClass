import "./App.css";
import Products from "./components/Products/Products";
import Effect from "./components/Effect/Effect";
import { useState, useEffect } from "react";
import Cart from "./components/Cart/Cart";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  let [count, setCount] = useState(0);

  const cart = [
    {
      cartId: 1,
      name: "phones",
      allProducts: [
        {
          productId: 1,
          name: "iphone",
          price: 1000,
          quantity: 1,
        },
        {
          productId: 2,
          name: "samsung",
          price: 900,
          quantity: 1,
        },
      ],
    },
    {
      cartId: 2,
      name: "laptops",
      allProducts: [
        {
          productId: 1,
          name: "macbook",
          price: 2000,
          quantity: 1,
        },
        {
          productId: 2,
          name: "dell",
          price: 1500,
          quantity: 1,
        },
      ],
    },
  ];

  function increment() {
    setCount(count + 1);
    console.log("rendered");
  }

  function decrement() {
    if (count > 0) setCount(count - 1);
    console.log("rendered");
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
  };

  return (
    <div className="App">
      <p>Screen width: {screenWidth}</p>
      <p>Screen height: {screenHeight}</p>
      <Products />
      <Effect />
      <h1> Parent </h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <h1>{count}</h1>
      <Cart
        count={count}
        setCount={setCount}
        increment={increment}
        decrement={decrement}
        cart={cart}
      />
    </div>
  );
}

export default App;
