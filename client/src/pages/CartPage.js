import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import BackToShoppingButton from "../components/BackToShoppingButton";
import ProductListItem from "../components/ProductListItem";
import OrderDetails from "../components/OrderDetails";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <>
      <BackToShoppingButton />
      <Container fluid className="px-0 mt-5">
        <Row>
          <h4>Shopping Cart</h4>
        </Row>
        <Row className="mt-5 d-flex flex-column flex-lg-row">
          <Col lg={9}>
            {cart.length > 0 ? (
              cart.map((item) => (
                <ProductListItem page={"cart"} product={item} key={item._id} />
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
    </>
  );
};

export default Cart;
