import React, { useEffect } from 'react';
import './App.css';
import Add from './components/Add';
import List from './components/List';
import { useAppDispatch } from './store/store';
import { fetchProducts } from './store/features/products/productsSlice';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  });
  return (
    <div className="">
      {/* <Add /> */}
      {/* <List /> */}
      <hr />
      <Cart />
      <hr />
      <ProductList />
    </div>
  );
}

export default App;
