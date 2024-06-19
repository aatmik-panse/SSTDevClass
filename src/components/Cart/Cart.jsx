// import AllCart from "./AllCart";
import styles from "./Cart.module.css";

import React, { useState } from "react";

export default function Cart({ count, setCount, decrement, increment, cart }) {
  let [incCart, setIncCart] = useState({});

  function incQty(product) {
    const newIncCart = { ...incCart };
    if (!newIncCart[product.productId]) {
      newIncCart[product.productId] = {
        //   productId: product.productId,
        //   name: product.name,
        //   price: product.price,
        ...product,
        quantity: 0,
      };
    }
    newIncCart[product.productId].quantity += 1;
    setIncCart(newIncCart);
  }

  return (
    <div className={styles.container}>
      <h1>Cart</h1>
      <h2>{count}</h2>
      <div className={styles.cart}>
        {cart.map((cart) => (
          <div key={cart.cartId} className={styles.cartItem}>
            <h2>{cart.name}</h2>
            <div className={styles.products}>
              {cart.allProducts.map((product) => (
                <div key={product.productId} className={styles.product}>
                  <h3>{product.name}</h3>
                  <p>Price: {product.price}</p>
                  <p>Quantity: {product.quantity}</p>
                  <button onClick={() => increment(incQty(product))}>
                    {" "}
                    increment
                  </button>
                  <button onClick={decrement}> decrement</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* <AllCart prod={incCart} /> */}
    </div>
  );
}

/* 
diffrence between array of objects and objects of objects
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

How to loop in Object of object :- 
const object = { a: 1, b: 2, c: 3 };
Object.keys(object).map((key) => {
  console.log(object[key]);
});
*/
