import { USER_AUTH, USER_LOGOUT } from "../actionTypes";

const initialState = {
  // loading: false,
  // email: "pedja1310@gmail.com",
  // username: "pedja1310",
  // orders: [],
  // wishlist: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_AUTH:
      localStorage.setItem("userToken", JSON.stringify(action.payload.token));
      return { ...state, ...action.payload.user };
    case USER_LOGOUT:
      localStorage.removeItem("userToken");
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
