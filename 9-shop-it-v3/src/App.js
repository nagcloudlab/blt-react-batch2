import React, { useState } from "react";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartBadge from "./components/CartBadge";
import CartView from "./components/CartView";
import NetWorkStatus from "./components/NetWorkStatus";

import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
  createBrowserRouter,
  
} from "react-router-dom";
import Home from "./components/Home";

import {getProducts} from './api/index'

// const router=createBrowserRouter([
//   {
//     path: "/products/:category",
//     loader: (params)=> getProducts(params.category),
//     element: <ProductList />,
//   }
// ])


function App() {
  return (
    <div className="container">
      <Navbar title={"shop-IT"} />
      <hr />
      <NetWorkStatus />
      <hr />
      <Router>
        
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
        <Route path="/" element={<ProductList />}/>
        <Route path="/cart" element={<CartView />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
