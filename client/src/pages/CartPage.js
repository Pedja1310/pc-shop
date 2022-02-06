import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BackToShoppingButton from "../components/BackToShoppingButton";
import CartItem from "../components/CartItem";
import { calculateTotal, numberOfCartItems } from "../utils/cartHelpers";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <BackToShoppingButton />
      <Container fluid className="px-0 mt-5">
        <Row>
          <h4>Shopping Cart</h4>
        </Row>
        <Row className="mt-5">
          <Col md={9}>
            {cart.length > 0 ? (
              cart.map((item) => <CartItem product={item} key={item._id} />)
            ) : (
              <h5>Cart is currently empty.</h5>
            )}
          </Col>
          <Col md={3}>
            <ListGroup>
              <ListGroup.Item>Order details</ListGroup.Item>
              <ListGroup.Item>Items: {numberOfCartItems(cart)}</ListGroup.Item>
              <ListGroup.Item>Price: {calculateTotal(cart)}</ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="w-100"
                  variant="dark"
                  as={Link}
                  to="/checkout"
                >
                  Checkout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cart;
