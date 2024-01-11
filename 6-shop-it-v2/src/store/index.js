import { createStore, combineReducers } from "redux";

import { cartReducer } from "../reducers/cart";

const rootReducer = combineReducers({
  cart: cartReducer,
});

const initialState = {
  cart: [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      quantity: 1,
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      quantity: 2,
    },
  ],
};

export const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
