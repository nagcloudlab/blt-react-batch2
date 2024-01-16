import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from "redux-thunk";
import { cartReducer } from "../reducers/cart";
import { reviewsReducer } from "../reducers/reviews";
import { networkStatusReducer } from "../reducers/network-status";

const rootReducer = combineReducers({
  cart: cartReducer,
  reviews: reviewsReducer,
  networkStatus: networkStatusReducer
});

const preloadedState = {
  cart: [],
  reviews: {},
  networkStatus: { message: "" }
};



const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const store = createStore(rootReducer, preloadedState, composeEnhancers(
  applyMiddleware(...[thunk]),
  // other store enhancers if any
));

export default store;