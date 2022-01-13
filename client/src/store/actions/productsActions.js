import {
  GET_ALL_PRODUCTS,
  GET_SINGLE_PRODUCT,
  REMOVE_SINGLE_PRODUCT,
  TOGGLE_SINGLE_PRODUCT_LOADING,
  REMOVE_PRODUCT,
} from "../actionTypes";
import {
  getAllProducts,
  getSingleProduct,
  createNewProduct,
  updateProduct,
  deleteProduct,
} from "../../api/products";

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
    dispatch({ type: TOGGLE_SINGLE_PRODUCT_LOADING });
    const { data } = await getSingleProduct(id);

    dispatch({ type: GET_SINGLE_PRODUCT, payload: data.product });
    dispatch({ type: TOGGLE_SINGLE_PRODUCT_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createNewProductAction =
  (product, history) => async (dispatch) => {
    try {
      const { data } = await createNewProduct(product);

      history.push(`/products/${data.product._id}`);
    } catch (error) {
      console.log(error);
    }
  };

export const updateProductAction = (product, history) => async (dispatch) => {
  try {
    const { data } = await updateProduct(product, product._id);

    history.push(`/products/${data.product._id}`);
  } catch (error) {
    console.error(error);
  }
};

export const deleteProductAction = (id, imageId) => async (dispatch) => {
  try {
    // console.log(imageId);
    await deleteProduct(id, imageId);

    dispatch({ type: REMOVE_PRODUCT, payload: id });
  } catch (error) {
    console.error(error);
  }
};

export const removeSingleProductAction = () => async (dispatch) => {
  dispatch({ type: REMOVE_SINGLE_PRODUCT });
};
