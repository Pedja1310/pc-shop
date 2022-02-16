import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import OrderDetails from "../components/OrderDetails";
import ProductListItem from "../components/ProductListItem";
import ShippingDetailsFrom from "../components/ShippingDetailsForm";

const CheckoutPage = () => {
  const [shippingDetails, setShippingDetails] = useState({
    country: "",
    city: "",
    postalCode: "",
    address: "",
  });

  const { cart } = useSelector((state) => state.cart);
  const { shippingDetails: userShippingDetails } = useSelector(
    (state) => state.users.currentUser
  );

  const useUserShippingInfo = () => {
    setShippingDetails(userShippingDetails);
  };

  const handleChange = (e) => {
    setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value });
  };

  return (
    <Container className="mt-5">
      <h4 className="mb-5">Checkout</h4>
      <Row>
        <Col lg={3}>
          <h5 className="mb-4 text-center">Shipping Address</h5>
          <ShippingDetailsFrom
            shippingDetails={shippingDetails}
            handleChange={handleChange}
            page={"checkout"}
          />
          <Button
            variant="dark"
            onClick={useUserShippingInfo}
            className="w-100 mt-3 mb-5"
          >
            Use my shipping Info
          </Button>
        </Col>
        <Col lg={6}>
          <h5 className="mb-4 text-center">Order Items</h5>
          {cart.length > 0 ? (
            cart.map((item) => (
              <ProductListItem
                page={"checkout"}
                product={item}
                key={item._id}
              />
            ))
          ) : (
            <h5>Cart is currently empty.</h5>
          )}
        </Col>
        <Col lg={3}>
          <OrderDetails cart={cart} />
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;
