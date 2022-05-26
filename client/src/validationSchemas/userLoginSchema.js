import * as yup from "yup";

const userLoginSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email("Must be a valid email.")
    .lowercase()
    .required("Email is a required field."),
  password: yup.string().trim().required("Password is required field."),
});

export default userLoginSchema;
