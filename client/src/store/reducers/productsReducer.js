import {
  GET_ALL_PRODUCTS,
  GET_SINGLE_PRODUCT,
  REMOVE_SINGLE_PRODUCT,
} from "../actionTypes";

const initialState = {
  allProducts: [],
  singleProduct: {},
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return { ...state, allProducts: [...action.payload] };
    case GET_SINGLE_PRODUCT:
      return { ...state, singleProduct: { ...action.payload } };
    case REMOVE_SINGLE_PRODUCT:
      return { ...state, singleProduct: {} };
    default:
      return state;
  }
};

export default productsReducer;
