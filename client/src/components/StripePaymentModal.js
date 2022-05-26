import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

import { Button, Form, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getNewPaymentIntent } from "../api/orders.js";

const StripePaymentModal = ({ showModal, closeModal }) => {
  const [message, setMessage] = useState("");
  const elements = useElements();
  const stripe = useStripe();

  const cart = useSelector((state) => state.cart);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const body = { paymentMethodType: "card", currency: "usd", cart };

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
          <Button type="submit" className="w-100">
            Pay
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
