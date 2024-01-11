import React, { useState } from "react";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartBadge from "./components/CartBadge";
import CartView from "./components/CartView";

function App() {
  const [cart, setCart] = useState([]);
  const handleBuy = (product) => {
    let newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="container">
      <Navbar title={"shop-IT"} />
      <CartBadge value={cart.length} />
      <hr />
      <CartView value={cart} />
      <br />
      <ProductList onBuy={handleBuy} />
    </div>
  );
}

export default App;
