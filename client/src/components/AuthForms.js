import { Formik } from "formik";
import { Form, Button, Spinner } from "react-bootstrap";
import { userAuthAction } from "../store/actions/usersActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import userRegisterSchema from "../validationSchemas/userRegisterSchema";
import userLoginSchema from "../validationSchemas/userLoginSchema";
import AlertComponent from "./AlertComponent";

export const UserRegisterForm = ({ authType }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.users);

  return (
    <Formik
      validationSchema={userRegisterSchema}
      onSubmit={(values) => {
        dispatch(userAuthAction(values, authType, navigate));
      }}
      initialValues={{
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        errors,
      }) => (
        <>
          {error && <AlertComponent message={error} variant="danger" />}
          <Form noValidate className="mx-auto" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                value={values.username}
                type="text"
                name="username"
                onBlur={handleBlur}
                placeholder="Please enter your username"
                onChange={handleChange}
                isValid={touched.username && !errors.username}
              />
              <Form.Control.Feedback type={"invalid"} className="d-block">
                {errors.username}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={values.email}
                type="email"
                name="email"
                onBlur={handleBlur}
                placeholder="Please enter your email"
                onChange={handleChange}
                isValid={touched.email && !errors.email}
              />
              <Form.Control.Feedback type="invalid" className="d-block">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={values.password}
                type="password"
                name="password"
                onBlur={handleBlur}
                placeholder="Please enter password"
                onChange={handleChange}
                isValid={touched.password && !errors.password}
              />
              <Form.Control.Feedback type="invalid" className="d-block">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="passwordConfirm">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                value={values.passwordConfirm}
                type="password"
                name="passwordConfirm"
                onBlur={handleBlur}
                placeholder="Please confirm password"
                onChange={handleChange}
                isValid={touched.passwordConfirm && !errors.passwordConfirm}
              />
              <Form.Control.Feedback type="invalid" className="d-block">
                {errors.passwordConfirm}
              </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit" className="mt-3 w-100" onClick={handleSubmit}>
              {loading ? (
                <Spinner
                  animation="border"
                  role="status"
                  className="spinner-border-sm"
                />
              ) : (
                "Submit"
              )}
            </Button>
          </Form>
        </>
      )}
    </Formik>
  );
};

export const UserLoginForm = ({ authType }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.users);

  console.log(loading);

  return (
    <Formik
      validationSchema={userLoginSchema}
      onSubmit={(values) => {
        dispatch(userAuthAction(values, authType, navigate));
      }}
      initialValues={{
        email: "",
        password: "",
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        errors,
      }) => (
        <>
          {error && <AlertComponent variant="danger" message={error} />}
          <Form noValidate className="mx-auto" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={values.email}
                type="email"
                name="email"
                onBlur={handleBlur}
                placeholder="Please enter your email"
                onChange={handleChange}
                isValid={touched.email && !errors.email}
              />
              <Form.Control.Feedback type="invalid" className="d-block">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={values.password}
                type="password"
                name="password"
                onBlur={handleBlur}
                placeholder="Please enter password"
                onChange={handleChange}
                isValid={touched.password && !errors.password}
              />
              <Form.Control.Feedback type="invalid" className="d-block">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit" className="mt-3 w-100" onClick={handleSubmit}>
              {loading ? (
                <Spinner
                  animation="border"
                  role="status"
                  className="spinner-border-sm"
                />
              ) : (
                "Submit"
              )}
            </Button>
          </Form>
        </>
      )}
    </Formik>
  );
};
