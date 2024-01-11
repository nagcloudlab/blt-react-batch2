import React, { useState, useEffect } from "react";

import Product from "./Product";
import { getProducts } from "../api";

function ProductList({}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderProducts = () => {
    return products.map((product) => {
      return <Product key={product.id} value={product} />;
    });
  };

  return <div>{renderProducts()}</div>;
}

export default ProductList;
