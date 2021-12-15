import { useState } from "react";
import { useDispatch } from "react-redux";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { userAuthAction } from "../store/actions/authActions";
import { useHistory } from "react-router";

function Auth() {
  const [authType, setAuthType] = useState("signup");
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleAuthType = () => {
    if (authType === "signup") {
      setAuthType("login");
    } else {
      setAuthType("signup");
    }
  };

  const handleChange = (e) => {
    setFormState((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(userAuthAction(formState, authType, history));
  };

  return (
    <Container fluid className="mt-5">
      <Row>
        <Col lg="4" md="6" xs="10" className="mx-auto">
          <h3 className="mb-3 text-center">
            {authType === "signup" ? "Signup" : "Login"}
          </h3>
          <Form className="mx-auto">
            {authType === "signup" && (
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  value={formState.username}
                  type="text"
                  name="username"
                  placeholder="Please enter your username"
                  onChange={handleChange}
                />
              </Form.Group>
            )}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={formState.email}
                type="email"
                name="email"
                placeholder="Please enter your email"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={formState.password}
                type="password"
                name="password"
                placeholder="Please enter password"
                onChange={handleChange}
              />
            </Form.Group>
            {authType === "signup" && (
              <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  value={formState.passwordConfirm}
                  type="password"
                  name="passwordConfirm"
                  placeholder="Please confirm password"
                  onChange={handleChange}
                />
              </Form.Group>
            )}
            <Button type="submit" className="mt-3 w-100" onClick={handleSubmit}>
              Submit
            </Button>
            <p className="mt-3 text-center" onClick={handleAuthType}>
              {authType === "signup"
                ? `Already have an account? Click here!`
                : `Don't have an account? Click here!`}
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Auth;
