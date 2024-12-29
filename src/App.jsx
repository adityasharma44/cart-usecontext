import { useState } from "react";
import "./App.css";
import Cart from "./Cart";
import { CartContext } from "./context/context";
import Item from "./Item";

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <div style={{ padding: "2% 7%" }}>
          <h2 style={{ textTransform: "uppercase" }}>Items in Store are</h2>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Item name={"MacBook Pro"} price={150000} />
            <Item name={"Iphone 16"} price={85000} />
            <Item name={"Apple Charger"} price={2500} />
            <Item name={"Apple Watch"} price={45000} />
          </div>
          <Cart />
        </div>
      </CartContext.Provider>
    </>
  );
}

export default App;
