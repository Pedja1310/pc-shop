import { NEW_ORDER, TOGGLE_PAYMENT_LOADING } from "../actionTypes";

const initialState = { newOrder: {}, paymentLoading: false };

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_ORDER:
      return { ...state, newOrder: action.payload };
    case TOGGLE_PAYMENT_LOADING: {
      return { ...state, paymentLoading: !state.paymentLoading };
    }
    default:
      return state;
  }
};

export default ordersReducer;
