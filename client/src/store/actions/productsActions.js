import {
  GET_ALL_PRODUCTS,
  GET_SINGLE_PRODUCT,
  REMOVE_SINGLE_PRODUCT,
  TOGGLE_SINGLE_PRODUCT_LOADING,
  REMOVE_PRODUCT,
  TOGGLE_PRODUCTS_LOADING,
  ADD_PRODUCT_ERROR,
  CLEAR_PRODUCT_ERROR,
} from "../actionTypes";
import {
  getAllProducts,
  getSingleProduct,
  createNewProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
} from "../../api/products";

export const getAllProductsAction = () => async (dispatch) => {
  try {
    dispatch({ type: TOGGLE_PRODUCTS_LOADING });

    const { data } = await getAllProducts();

    dispatch({ type: GET_ALL_PRODUCTS, payload: data.products });
    dispatch({ type: TOGGLE_PRODUCTS_LOADING });
  } catch (error) {
    dispatch({
      type: ADD_PRODUCT_ERROR,
      payload: error.response.data.message,
    });
    dispatch({ type: TOGGLE_PRODUCTS_LOADING });
    setTimeout(() => {
      dispatch({ type: CLEAR_PRODUCT_ERROR });
    }, 4500);
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

export const searchProductsAction = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: TOGGLE_PRODUCTS_LOADING });

    const { data } = await searchProducts(searchQuery);

    dispatch({ type: GET_ALL_PRODUCTS, payload: data.products });

    dispatch({ type: TOGGLE_PRODUCTS_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createNewProductAction =
  (product, navigate) => async (dispatch) => {
    try {
      const { data } = await createNewProduct(product);

      navigate(`/products/${data.product._id}`);
    } catch (error) {
      console.log(error);
    }
  };

export const updateProductAction = (product, navigate) => async (dispatch) => {
  try {
    const { data } = await updateProduct(product, product._id);

    navigate(`/products/${data.product._id}`);
  } catch (error) {
    console.error(error);
  }
};

export const deleteProductAction = (id, imageId) => async (dispatch) => {
  try {
    await deleteProduct(id, imageId);

    dispatch({ type: REMOVE_PRODUCT, payload: id });
  } catch (error) {
    console.error(error);
  }
};

export const removeSingleProductAction = () => async (dispatch) => {
  dispatch({ type: REMOVE_SINGLE_PRODUCT });
};
