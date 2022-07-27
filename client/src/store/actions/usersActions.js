import {
  USER_AUTH,
  USER_LOGOUT,
  USER_UPDATE,
  GET_ALL_USERS,
  CART_CLEAR,
  USER_LOADING,
  USER_ERROR,
  CLEAR_USER_ERROR,
} from "../actionTypes";
import {
  updateUser,
  userLogin,
  userRegister,
  getAllUsers,
  updateUserWishlist,
} from "../../api/users";

export const userAuthAction =
  (credentials, authType, navigate) => async (dispatch) => {
    try {
      let res;

      dispatch({ type: USER_LOADING });

      if (authType === "signup") {
        res = await userRegister(credentials);
      } else {
        res = await userLogin(credentials);
      }

      dispatch({ type: USER_AUTH, payload: res.data });

      dispatch({ type: USER_LOADING });

      navigate("/");
    } catch (error) {
      dispatch({ type: USER_ERROR, payload: error.response.data.message });
      dispatch({ type: USER_LOADING });
      setTimeout(() => {
        dispatch({ type: CLEAR_USER_ERROR });
      }, 4500);
    }
  };

export const userLogoutAction = () => async (dispatch) => {
  dispatch({ type: CART_CLEAR });
  dispatch({ type: USER_LOGOUT });
};

export const getAllUsersAction = () => async (dispatch) => {
  try {
    const { data } = await getAllUsers();

    dispatch({ type: GET_ALL_USERS, payload: data.users });
  } catch (error) {
    console.error(error);
  }
};

export const updateUserAction = (payload, id) => async (dispatch) => {
  try {
    const { data } = await updateUser(payload, id);

    dispatch({
      type: USER_UPDATE,
      payload: data.user,
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateUserWishlistAction = (payload, id) => async (dispatch) => {
  try {
    const { data } = await updateUserWishlist(payload, id);

    dispatch({
      type: USER_UPDATE,
      payload: data.user,
    });
  } catch (error) {
    console.error(error);
  }
};
