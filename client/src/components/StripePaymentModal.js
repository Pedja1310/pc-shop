import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Form, Modal, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getNewPaymentIntent } from "../api/orders.js";
import {
  createNewOrderAction,
  togglePaymentLoadingAction,
} from "../store/actions/ordersActions.js";

const StripePaymentModal = ({ showModal, closeModal, shippingDetails }) => {
  const [message, setMessage] = useState("");
  const elements = useElements();
  const stripe = useStripe();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { paymentLoading } = useSelector((state) => state.orders);

  // TODO refactor through redux
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    dispatch(togglePaymentLoadingAction());

    const { error: backendError, data } = await getNewPaymentIntent({
      paymentMethodType: "card",
      currency: "usd",
      cart: cart.cart,
    });

    if (backendError) {
      setMessage(backendError.message);
      return;
    }

    const { error: stripeError, paymentIntent } =
      await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

    if (stripeError) {
      setMessage(stripeError.message);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      const products = cart.cart.map((item) => {
        return { product: item._id, quantity: item.quantity };
      });

      const order = {
        products: products,
        shippingDetails: shippingDetails,
        total: {
          price: paymentIntent.amount,
          currency: paymentIntent.currency,
        },
      };

      dispatch(createNewOrderAction(order, navigate));
    }
  };

  return (
    <Modal
      show={showModal}
      onHide={closeModal}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="justify-content-center">
        <Modal.Title className="text-center">Payment Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="card-element" className="mb-2">
            <h5>Card</h5>
          </label>
          <CardElement
            className="mb-4"
            id="card-element"
            onChange={() => setMessage("")}
          />
          {message && <p className="text-danger text-center">{message}</p>}
          <Button type="submit" className="mt-3 w-100" onClick={handleSubmit}>
            {paymentLoading ? (
              <Spinner
                animation="border"
                role="status"
                className="spinner-border-sm"
              />
            ) : (
              "Finish Payment"
            )}
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <p className="text-center small">
          Use card number 4242 4242 4242 4242, any future date, any cvc code and
          any postal code.
        </p>
      </Modal.Footer>
    </Modal>
  );
};

export default StripePaymentModal;
