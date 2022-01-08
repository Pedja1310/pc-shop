import {
  GET_ALL_PRODUCTS,
  GET_SINGLE_PRODUCT,
  REMOVE_SINGLE_PRODUCT,
  TOGGLE_SINGLE_PRODUCT_LOADING,
} from "../actionTypes";

const initialState = {
  allProducts: [],
  singleProduct: {
    loading: false,
    product: {},
    error: {},
  },
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return { ...state, allProducts: [...action.payload] };
    case GET_SINGLE_PRODUCT:
      return {
        ...state,
        singleProduct: {
          ...state.singleProduct,
          product: action.payload,
        },
      };
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
    default:
      return state;
  }
};

export default productsReducer;
