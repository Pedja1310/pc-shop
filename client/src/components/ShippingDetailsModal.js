import { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { updateUserAction } from "../store/actions/usersActions";
import ShippingDetailsFrom from "./ShippingDetailsForm";

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
        <ShippingDetailsFrom
          shippingDetails={shippingDetails}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </Modal.Body>
    </Modal>
  );
};

export default ShippingDetailsModal;
