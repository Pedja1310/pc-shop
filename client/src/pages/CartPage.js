import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import BackToShoppingButton from "../components/BackToShoppingButton";
import CartItem from "../components/CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <BackToShoppingButton />
      <Container fluid className="px-0 mt-5">
        <Row>
          <Col>
            {cart.length > 0 ? (
              cart.map((item) => <CartItem product={item} key={item.id} />)
            ) : (
              <h4>Cart is currently empty.</h4>
            )}
          </Col>
          {/* <Col lg={3}>
            <ListGroup>
              <ListGroup.Item>Order details</ListGroup.Item>
              <ListGroup.Item>Price: $55.00</ListGroup.Item>
              <ListGroup.Item>
                <Button className="w-100" variant="dark">
                  Checkout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col> */}
        </Row>
      </Container>
    </>
  );
};

export default Cart;
