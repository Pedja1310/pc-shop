import {
  ADD_PRODUCT_ERROR,
  CLEAR_PRODUCT_ERROR,
  GET_ALL_PRODUCTS,
  GET_SINGLE_PRODUCT,
  REMOVE_PRODUCT,
  REMOVE_SINGLE_PRODUCT,
  TOGGLE_PRODUCTS_LOADING,
  TOGGLE_SINGLE_PRODUCT_LOADING,
} from "../actionTypes";

const initialState = {
  loading: false,
  error: "",
  products: [],
  singleProduct: {
    loading: false,
    product: {},
  },
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return { ...state, products: [...action.payload] };
    case GET_SINGLE_PRODUCT:
      return {
        ...state,
        singleProduct: {
          ...state.singleProduct,
          product: action.payload,
        },
      };
    case TOGGLE_PRODUCTS_LOADING: {
      return {
        ...state,
        loading: !state.loading,
      };
    }
    case TOGGLE_SINGLE_PRODUCT_LOADING:
      return {
        ...state,
        singleProduct: {
          ...state.singleProduct,
          loading: !state.singleProduct.loading,
        },
      };
    case REMOVE_SINGLE_PRODUCT:
      return {
        ...state,
        singleProduct: { ...state.singleProduct, product: {} },
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.payload
        ),
      };
    case ADD_PRODUCT_ERROR:
      return { ...state, error: action.payload };
    case CLEAR_PRODUCT_ERROR:
      return { ...state, error: "" };
    default:
      return state;
  }
};

export default productsReducer;
