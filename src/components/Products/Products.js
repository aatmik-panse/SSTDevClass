import React, { useEffect, useRef, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

export default function Products() {
  let text = "";
  let [inputT, setInputT] = useState("");

  let products = [];

  // let textAreaRef = useRef(null);
  // let updateTextRef = useRef(null);

  function updateText(e) {
    // updateTextRef.current.innerHTML = textAreaRef.current.value;
    setInputT(e.target.value);
  }
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       products = data;
  //     });
  // }, []);
  let [productsList, setProductsList] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProductsList(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <ProductCard title="Hello Products" price="free free 🎉" />

      <div>
        {productsList.map((products) => {
          return <ProductCard title={products.title} price={products.price} />;
        })}
      </div>
      <textarea
        rows="4"
        cols="50"
        placeholder="Enter your text here"
        // ref={textAreaRef}
        // value={inputT}
        onChange={updateText}
      ></textarea>
      <div>
        Your Text :-
        <p
        // ref={updateTextRef}
        >
          {inputT}
        </p>
      </div>
    </div>
  );
}

//
