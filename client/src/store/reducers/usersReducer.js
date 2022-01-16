import {
  GET_ALL_USERS,
  USER_AUTH,
  USER_LOGOUT,
  USER_UPDATE,
} from "../actionTypes";

const initialState = {
  users: [],
  currentUser: {},
  loading: false,
  error: {},
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_AUTH:
      localStorage.setItem("userToken", JSON.stringify(action.payload.token));
      return { ...state, currentUser: action.payload.user };
    case USER_LOGOUT:
      localStorage.removeItem("userToken");
      return initialState;
    case GET_ALL_USERS:
      return { ...state, users: action.payload };
    case USER_UPDATE:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};

export default usersReducer;
