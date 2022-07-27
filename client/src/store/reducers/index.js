import { combineReducers } from "redux";

import usersReducer from "./usersReducer";
import cartReducer from "./cartReducer";
import productsReducer from "./productsReducer";
import ordersReducer from "./ordersReducer";

const rooteReducer = combineReducers({
  users: usersReducer,
  cart: cartReducer,
  products: productsReducer,
  orders: ordersReducer,
});

export default rooteReducer;
