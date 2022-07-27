import React from "react";
import { Alert } from "react-bootstrap";

const AlertComponent = ({ message, variant }) => {
  return <Alert variant={variant}>{message}</Alert>;
};

export default AlertComponent;
