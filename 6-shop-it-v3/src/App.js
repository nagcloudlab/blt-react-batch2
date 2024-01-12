import React, { useState } from "react";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartBadge from "./components/CartBadge";
import CartView from "./components/CartView";
import NetWorkStatus from "./components/NetWorkStatus";

import {
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom";
import Home from "./components/Home";


const Root = () => {
  return (
    <div className="container">
      <Navbar title={"shop-IT"} />
      <hr />
      <NetWorkStatus />
      <hr />
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
    </div>
  )
}



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/products/:type",
        element: <ProductList />
      }
    ]
  },
], { basename: "" });

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
