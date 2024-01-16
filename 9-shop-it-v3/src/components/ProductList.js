import React, { useState, useEffect } from "react";

import Product from "./Product";
import { getProducts } from "../api";

import { useParams } from "react-router-dom";

function ProductList({ }) {
  const [products, setProducts] = useState([]);
  const category = useParams().category;
  useEffect(() => {
    getProducts(category)
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

  return <div>categor: {category}{category=="elec"?renderProducts():null}</div>;
}

export default ProductList;
