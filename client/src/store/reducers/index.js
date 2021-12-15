import { combineReducers } from "redux";

import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import productsReducer from "./productsReducer";

const rooteReducer = combineReducers({
  user: authReducer,
  cart: cartReducer,
  products: productsReducer,
});

export default rooteReducer;
