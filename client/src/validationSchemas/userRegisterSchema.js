import * as yup from "yup";

const userRegisterSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .min(4)
    .max(20)
    .required("Username is a required field."),
  email: yup
    .string()
    .trim()
    .email("Must be a valid email.")
    .lowercase()
    .required("Email is a required field."),
  password: yup
    .string()
    .trim()
    .matches("^[a-zA-Z0-9_]+$")
    .min(6)
    .max(12)
    .required("Password is a required field."),
  passwordConfirm: yup
    .string()
    .trim()
    .matches("^[a-zA-Z0-9_]+$")
    .min(6)
    .max(12)
    .required("Password confirmation is a required field.")
    .oneOf(
      [yup.ref("password"), null],
      "Password confirmation must match password."
    ),
});

export default userRegisterSchema;
