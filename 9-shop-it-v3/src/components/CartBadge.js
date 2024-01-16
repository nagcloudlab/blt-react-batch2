import React from "react";
import { useSelector } from "react-redux";

function CartBadge() {
  const cartCount = useSelector((state) => state.cart.length);

  return (
    <div>
      {cartCount === 0 ? (
        <span className="">Empty Cart</span>
      ) : (
        <span className="">{cartCount} item(s) in cart</span>
      )}
    </div>
  );
}

export default CartBadge;
