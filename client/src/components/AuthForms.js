import { Formik } from "formik";
import { Form, Button } from "react-bootstrap";
import { userAuthAction } from "../store/actions/usersActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import userRegisterSchema from "../validationSchemas/userRegisterSchema";
import userLoginSchema from "../validationSchemas/userLoginSchema";

export const UserRegisterForm = ({ authType }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Formik
      validationSchema={userRegisterSchema}
      onSubmit={(values) => {
        dispatch(userAuthAction(values, authType, history));
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
        isValid,
        errors,
      }) => (
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
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export const UserLoginForm = ({ authType }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Formik
      validationSchema={userLoginSchema}
      onSubmit={(values) => {
        dispatch(userAuthAction(values, authType, history));
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
        isValid,
        errors,
      }) => (
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
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};
