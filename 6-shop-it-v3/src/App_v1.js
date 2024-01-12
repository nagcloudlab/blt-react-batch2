import React, { useState } from "react";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartBadge from "./components/CartBadge";
import CartView from "./components/CartView";
import NetWorkStatus from "./components/NetWorkStatus";

import {
  BrowserRouter,
  MemoryRouter,
  HashRouter,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="container">
      <Navbar title={"shop-IT"} />
      <hr />
      <NetWorkStatus />
      <hr />
      <BrowserRouter basename="/">
        <>
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/products/elec">Electronics</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/products/other">Other</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/cart">Cart</Link>
            </li>
          </ul>
          <hr />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:type" element={<ProductList />} />
            <Route path="/cart" element={<CartView />} />
          </Routes>
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;
