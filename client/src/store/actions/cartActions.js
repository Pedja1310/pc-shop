import {
  CART_ADD,
  CART_DECREASE,
  CART_INCREASE,
  CART_REMOVE,
  CART_CLEAR,
} from "../actionTypes";

export const addToCartAction = (item) => (dispatch) => {
  const newItem = {
    _id: item._id,
    title: item.title,
    image: item.image,
    price: item.price,
    quantity: 1,
  };
  // dispatch iteam object
  dispatch({ type: CART_ADD, payload: newItem });
};

export const removeFromCartAction = (id) => (dispatch) => {
  dispatch({ type: CART_REMOVE, payload: id });
};

export const increaseQuantityAction = (id) => (dispatch) => {
  dispatch({ type: CART_INCREASE, payload: id });
};

export const decreaseQuantityAction = (id) => (dispatch) => {
  dispatch({ type: CART_DECREASE, payload: id });
};

export const clearCartAction = () => (dispatch) => {
  dispatch({ type: CART_CLEAR });
};
