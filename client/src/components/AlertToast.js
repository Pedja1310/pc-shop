import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";

const AlertToast = ({ message, variant }) => {
  return (
    <ToastContainer
      className="p-3 mt-32"
      position={"top-center"}
      delay={3000}
      autohide
    >
      <Toast bg={variant}>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default AlertToast;
