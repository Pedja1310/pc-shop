import { createNewOrder } from "../../api/orders";
import {
  CART_CLEAR,
  TOGGLE_PAYMENT_LOADING,
  USER_UPDATE,
} from "../actionTypes";

export const createNewOrderAction = (order, navigate) => async (dispatch) => {
  try {
    const { data } = await createNewOrder(order);

    dispatch({ type: USER_UPDATE, payload: data.data.user });

    dispatch({ type: CART_CLEAR });

    dispatch({ type: TOGGLE_PAYMENT_LOADING });

    navigate(`/orders/${data.data.id}`);
  } catch (error) {
    console.log(error);
  }
};

export const togglePaymentLoadingAction = () => (dispatch) => {
  dispatch({ type: TOGGLE_PAYMENT_LOADING });
};
