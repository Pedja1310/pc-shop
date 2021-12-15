import { GET_ALL_PRODUCTS, GET_SINGLE_PRODUCT } from "../actionTypes";

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
    default:
      return state;
  }
};

export default productsReducer;
