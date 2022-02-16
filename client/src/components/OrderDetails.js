import { useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import { calculateTotal, numberOfCartItems } from "../utils/cartHelpers";
import { useDispatch } from "react-redux";
import { clearCartAction } from "../store/actions/cartActions";
import StripePaymentModal from "./StripePaymentModal";

const OrderDetails = ({ cart }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { url } = useRouteMatch();

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const handleCancelOrderAndClearCart = () => {
    dispatch(clearCartAction());
    history.push("/");
  };

  return (
    <ListGroup className="h-100 sticky-top">
      <ListGroup.Item className="text-center">Order details</ListGroup.Item>
      <ListGroup.Item>Items total: {cart.length}</ListGroup.Item>
      <ListGroup.Item>Quantity total: {numberOfCartItems(cart)}</ListGroup.Item>
      <ListGroup.Item>Price: {calculateTotal(cart)}</ListGroup.Item>
      <ListGroup.Item>
        {url === "/cart" ? (
          <>
            <Button
              className={`w-100 ${!cart.length && "disabled"}`}
              variant="dark"
              as={Link}
              to="/checkout"
              disabled={!cart.length}
            >
              Checkout
            </Button>
            <Button
              className="w-100 mt-3"
              variant="danger"
              onClick={handleCancelOrderAndClearCart}
              disabled={!cart.length}
            >
              Clear Cart
            </Button>
          </>
        ) : (
          <>
            <StripePaymentModal showModal={showModal} closeModal={closeModal} />
            <Button
              className="w-100"
              variant="dark"
              disabled={!cart.length}
              onClick={openModal}
            >
              Finish Order
            </Button>
            <Button
              className="w-100 mt-3"
              variant="danger"
              onClick={handleCancelOrderAndClearCart}
              disabled={!cart.length}
            >
              Cancel Order
            </Button>
          </>
        )}
      </ListGroup.Item>
    </ListGroup>
  );
};

export default OrderDetails;
