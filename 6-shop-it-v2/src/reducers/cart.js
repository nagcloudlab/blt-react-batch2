export function cartReducer(cart = [], action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...cart, action.product];
    case "REMOVE_FROM_CART":
      return cart.filter((product) => product.id !== action.product.id);
    case "UPDATE_QUANTITY":
      return cart.map((product) => {
        if (product.id === action.product.id) {
          return { ...product, quantity: action.quantity };
        } else {
          return product;
        }
      });
    default:
      return cart;
  }
}
