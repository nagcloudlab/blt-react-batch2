export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    product,
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
