import { useState } from "react";

import { Button, ListGroup } from "react-bootstrap";
import ShippingDetailsModal from "./ShippingDetailsModal";

const UserInfo = ({ user }) => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div className="mb-5">
      <h5 className="text-center">Shipping Details</h5>
      <ListGroup variant="flush" className="mt-4">
        <ListGroup.Item>Email: {user.email}</ListGroup.Item>
        <ListGroup.Item>
          Country: {user.shippingDetails?.country || "No Info"}
        </ListGroup.Item>
        <ListGroup.Item>
          City: {user.shippingDetails?.city || "No Info"}
        </ListGroup.Item>
        <ListGroup.Item>
          Postal Code: {user.shippingDetails?.postalCode || "No Info"}
        </ListGroup.Item>
        <ListGroup.Item>
          Address: {user.shippingDetails?.address || "No Info"}
        </ListGroup.Item>
        <Button className="mt-4 w-100" onClick={openModal}>
          Update Shipping Details
        </Button>
      </ListGroup>
      <ShippingDetailsModal
        showModal={showModal}
        closeModal={closeModal}
        userShippingDetails={user.shippingDetails}
        userId={user._id}
      />
    </div>
  );
};

export default UserInfo;
