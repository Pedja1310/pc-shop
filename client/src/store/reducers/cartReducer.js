import {
  CART_ADD,
  CART_REMOVE,
  CART_DECREASE,
  CART_INCREASE,
  CART_CLEAR,
} from "../actionTypes";

const initialState = { cart: [] };

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD: {
      const newItem = action.payload;
      const index = state.cart.findIndex((item) => item._id === newItem._id);

      if (index !== -1) {
        const cart = state.cart;
        cart[index].quantity += 1;
        return { ...state, cart };
      }
      return { ...state, cart: [...state.cart, newItem] };
    }
    case CART_REMOVE: {
      const cart = state.cart.filter((item) => item._id !== action.payload);
      return { ...state, cart };
    }
    case CART_INCREASE: {
      const cart = state.cart.map((item) => {
        if (item._id === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      return { ...state, cart };
    }
    case CART_DECREASE: {
      const cart = state.cart.map((item) => {
        if (item._id === action.payload) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });
      return { ...state, cart };
    }
    case CART_CLEAR: {
      return initialState;
    }
    default:
      return state;
  }
};

export default cartReducer;
