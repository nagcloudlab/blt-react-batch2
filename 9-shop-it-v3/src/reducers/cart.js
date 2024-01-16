export function cartReducer(cart = [], action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      let { product, quantity = 1 } = action;
      let existingCartLine = cart.find((cartLine) => cartLine.product.id === product.id);
      if (!existingCartLine) {
        return [...cart, { product, quantity }];
      }
      return cart;
    }
    case "REMOVE_FROM_CART": {
      return cart.filter((cartLine) => cartLine.product.id !== action.product.id);
    }
    case "UPDATE_QUANTITY": {
      let { product, quantity } = action;
      return cart.map((cartLine) => {
        if (cartLine.product.id === product.id) {
          return { ...cartLine, quantity: cartLine.quantity + quantity };
        } else {
          return cartLine;
        }
      });
    }
    default:
      return cart;
  }
}
