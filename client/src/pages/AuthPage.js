import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { UserLoginForm, UserRegisterForm } from "../components/AuthForms";

function Auth() {
  const [authType, setAuthType] = useState("login");

  const handleAuthType = () => {
    if (authType === "signup") {
      setAuthType("login");
    } else {
      setAuthType("signup");
    }
  };

  return (
    <Container fluid className="mt-5">
      <Row>
        <Col lg="4" md="6" xs="10" className="mx-auto">
          <h3 className="mb-3 text-center">
            {authType === "signup" ? "Signup" : "Login"}
          </h3>
          {authType === "signup" ? (
            <UserRegisterForm authType={authType} />
          ) : (
            <UserLoginForm authType={authType} />
          )}
          <p className="mt-3 text-center" onClick={handleAuthType}>
            {authType === "signup"
              ? `Already have an account? Click here!`
              : `Don't have and account? Click here!`}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Auth;
