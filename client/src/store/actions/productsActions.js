import { GET_ALL_PRODUCTS, GET_SINGLE_PRODUCT } from "../actionTypes";
import { getAllProducts, getSingleProduct } from "../../api/products";

export const getAllProductsAction = () => async (dispatch) => {
  try {
    const { data } = await getAllProducts();

    dispatch({ type: GET_ALL_PRODUCTS, payload: data.products });
  } catch (error) {
    console.log(error);
  }
};

export const getSingleProductAction = (id) => async (dispatch) => {
  try {
    const { data } = await getSingleProduct(id);

    dispatch({ type: GET_SINGLE_PRODUCT, payload: data.product });
  } catch (error) {
    console.log(error);
  }
};
