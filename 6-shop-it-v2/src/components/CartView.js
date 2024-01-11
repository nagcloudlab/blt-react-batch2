import React from "react";

import { useSelector } from "react-redux";

function CartView() {
  const cart = useSelector((state) => state.cart);
  const renderCart = () => {
    return cart.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>&#8377; {item.price}</td>
          {/* <td>qty</td>
          <td>&#8377; {item.price * item.qty}</td> */}
          <td>
            <button className="btn btn-danger btn-sm">Remove</button>
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
          <tbody>{renderCart()}</tbody>
        </table>
      </div>
    </div>
  );
}

export default CartView;
