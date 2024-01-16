import React from "react";

function CartBadge({ value: cartCount }) {
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
