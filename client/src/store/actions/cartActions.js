import { CART_ADD } from "../actionTypes";

export const addToCartAction = (item) => async (dispatch) => {
  try {
    // create item object
    const orderItem = {
      id: item._id,
      title: item.title,
      image: item.image,
      price: item.price,
      quantity: 1,
    };
    // dispatch iteam object
    dispatch({ type: CART_ADD, payload: orderItem });
  } catch (error) {
    console.log(error);
  }
};
