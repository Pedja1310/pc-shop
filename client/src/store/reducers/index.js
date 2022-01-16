import { combineReducers } from "redux";

import usersReducer from "./usersReducer";
import cartReducer from "./cartReducer";
import productsReducer from "./productsReducer";

const rooteReducer = combineReducers({
  users: usersReducer,
  cart: cartReducer,
  products: productsReducer,
});

export default rooteReducer;
