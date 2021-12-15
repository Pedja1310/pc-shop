import { USER_AUTH, USER_LOGOUT } from "../actionTypes";
import { userLogin, userRegister } from "../../api/auth.js";

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
  dispatch({ type: USER_LOGOUT });
};
