import React from "react";
import { Form } from "react-bootstrap";

const SearchFormCheckBox = ({ label, name, group, handleCheckChange }) => {
  return (
    <Form.Check
      id={name}
      className="me-4 mb-1 mt-2"
      type="checkbox"
      label={label}
      name={name}
      checked={group.includes(name)}
      onChange={handleCheckChange}
    />
  );
};

export default SearchFormCheckBox;
