import React, { useContext, useEffect } from "react";
import { CartContext } from "./context/context";

export default function Item({ name, price }) {
  const cart = useContext(CartContext);

  const handleAddCart = () => {
    cart.setCartItems([...cart.cartItems, { name: name, price: price }]);
  };

  return (
    <div
      style={{
        backgroundColor: "yellowgreen",
        padding: "20px",
        borderRadius: "15px",
        width: "200px",
      }}
    >
      <h2 style={{ textAlign: "center", marginTop: "0px" }}>{name}</h2>
      <p style={{ textAlign: "center" }}>{price}</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={handleAddCart}>Add to Cart</button>
      </div>
    </div>
  );
}
