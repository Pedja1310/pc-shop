import {
  USER_AUTH,
  USER_LOGOUT,
  USER_UPDATE,
  GET_ALL_USERS,
  CART_CLEAR,
} from "../actionTypes";
import {
  updateUser,
  userLogin,
  userRegister,
  getAllUsers,
  updateUserWishlist,
} from "../../api/users";

export const userAuthAction =
  (credentials, authType, history) => async (dispatch) => {
    try {
      let res;

      if (authType === "signup") {
        res = await userRegister(credentials);
      } else {
        res = await userLogin(credentials);
      }

      dispatch({ type: USER_AUTH, payload: res.data });

      history.push("/");
    } catch (error) {
      console.log(error);
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
