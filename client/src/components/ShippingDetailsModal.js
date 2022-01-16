import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Modal } from "react-bootstrap";
import { updateUserAction } from "../store/actions/usersActions";

const ShippingDetailsModal = ({
  showModal,
  closeModal,
  userShippingDetails,
  userId,
}) => {
  const dispatch = useDispatch();
  const [shippingDetails, setShippingDetails] = useState(
    userShippingDetails || {
      country: "",
      city: "",
      postalCode: "",
      address: "",
    }
  );

  const handleChange = (e) => {
    setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserAction({ shippingDetails }, userId));
    closeModal();
  };

  return (
    <Modal
      show={showModal}
      onHide={closeModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update User Shipping details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
          <Button type="submit" className="w-100 mt-5">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ShippingDetailsModal;
