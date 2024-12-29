import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./context/context";

export default function Cart() {
  const cart = useContext(CartContext);
  const [total, setTotal] = useState(0);

  const calculateSum = (arr) => {
    const sum = arr
      .map((item, index) => item.price)
      .reduce((value1, value2) => {
        return value1 + value2;
      }, 0);
    setTotal(sum);
  };

  useEffect(() => {
    calculateSum(cart.cartItems);
  }, [cart]);

  return (
    <div>
      <h2>Cart Items</h2>
      {cart.cartItems.map((item, index) => (
        <div key={index}>
          <p>
            {item.name} : {item.price} Inr
          </p>
        </div>
      ))}
      <h3>Total Price : {total} Inr</h3>
    </div>
  );
}
