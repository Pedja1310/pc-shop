import { Button, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";

const ShippingDetailsFrom = ({
  shippingDetails,
  handleChange,
  handleSubmit,
  page,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controledid="country" className="mt-3">
        <Form.Label>Country</Form.Label>
        <Form.Control
          name="country"
          type="text"
          value={shippingDetails.country}
          onChange={handleChange}
          placeholder="Please enter country"
        />
      </Form.Group>
      <Form.Group controledid="city" className="mt-3">
        <Form.Label>City</Form.Label>
        <Form.Control
          name="city"
          type="text"
          value={shippingDetails.city}
          onChange={handleChange}
          placeholder="Please enter city"
        />
      </Form.Group>
      <Form.Group controledid="postalCode" className="mt-3 ml-5">
        <Form.Label>Postal Code</Form.Label>
        <Form.Control
          name="postalCode"
          type="text"
          value={shippingDetails.postalCode}
          onChange={handleChange}
          placeholder="Please enter postal code"
        />
      </Form.Group>
      <Form.Group controledid="address" className="mt-3">
        <Form.Label>Address</Form.Label>
        <Form.Control
          name="address"
          type="text"
          value={shippingDetails.address}
          onChange={handleChange}
          placeholder="Please enter address"
        />
      </Form.Group>
      {page === "profile" ? (
        <>
          <Button type="button" className="mt-5">
            Close
          </Button>
          <Button type="submit" className="ms-3 mt-5">
            Submit
          </Button>
        </>
      ) : null}
    </Form>
  );
};

export default ShippingDetailsFrom;
