import logo from "./logo.svg";
import "./App.css";
import Products from "./components/Products/Products";
import Effect from "./components/Effect/Effect";
import { useState, useEffect } from "react";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

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
    </div>
  );
}

export default App;
