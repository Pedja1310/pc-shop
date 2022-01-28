import {
  CART_ADD,
  CART_REMOVE,
  CART_DECREASE,
  CART_INCREASE,
} from "../actionTypes";

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD: {
      const newItem = action.payload;
      const index = state.findIndex((item) => item._id === newItem._id);

      if (index !== -1) {
        const cart = state;
        cart[index].quantity += 1;
        return cart;
      }
      return [...state, newItem];
    }
    case CART_REMOVE: {
      const cart = state.filter((item) => item._id !== action.payload);
      return cart;
    }
    case CART_INCREASE: {
      const cart = state.map((item) => {
        if (item._id === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      return cart;
    }
    case CART_DECREASE: {
      const cart = state.map((item) => {
        if (item._id === action.payload) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });
      return cart;
    }
    default:
      return state;
  }
};

export default cartReducer;
