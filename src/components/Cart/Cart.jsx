import AllCart from "./AllCart";
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
