export const addToCart = (product, quantity) => {
  return {
    type: "ADD_TO_CART",
    product,
    quantity,
  };
};

export const removeFromCart = (product) => {
  return {
    type: "REMOVE_FROM_CART",
    product,
  };
};

export const updateQuantity = (product, quantity) => {
  return {
    type: "UPDATE_QUANTITY",
    product,
    quantity,
  };
};

