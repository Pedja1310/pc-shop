import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rooteReducer from "./reducers";

const store = createStore(
  rooteReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
