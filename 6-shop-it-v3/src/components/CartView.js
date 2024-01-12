import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from '../actions/cart'

function CartView() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemoveCartLine = (product) => {
    dispatch(removeFromCart(product));
  }
  const handleQty = (product, qty) => {
    const action = updateQuantity(product, qty);
    dispatch(action);
  }
  const renderCart = () => {
    return cart.map((cartLine) => {
      const { product, quantity } = cartLine;
      return (
        <tr key={product.id}>
          <td>{product.name}</td>
          <td>&#8377; {product.price}</td>
          <td>
            <div className="d-flex justify-content-between">
              <button onClick={e => handleQty(product, -1)}><i className="fa fa-minus"></i></button>
              {quantity}
              <button onClick={e => handleQty(product, 1)}><i className="fa fa-plus"></i></button>
            </div>
          </td>
          <td>
            &#8377; {product.price * quantity}
          </td>
          <td>
            <button onClick={e => handleRemoveCartLine(product)} className="btn btn-danger btn-sm">Remove</button>
          </td>
        </tr>
      );
    });
  };
  return (
    <div className="card">
      <div className="card-header">Items in cart</div>
      <div className="card-body">
        <table className="table table-sm table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{renderCart()}</tbody>
        </table>
      </div>
    </div>
  );
}

export default CartView;
