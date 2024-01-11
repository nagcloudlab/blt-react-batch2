import React, { useState } from "react";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartBadge from "./components/CartBadge";
import CartView from "./components/CartView";

function App() {
  return (
    <div className="container">
      <Navbar title={"shop-IT"} />
      <hr />
      <CartView />
      <br />
      <ProductList />
    </div>
  );
}

export default App;
