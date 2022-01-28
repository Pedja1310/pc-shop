import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Image as CloudinaryImage } from "cloudinary-react";
import { useDispatch } from "react-redux";
import {
  removeFromCartAction,
  increaseQuantityAction,
  decreaseQuantityAction,
} from "../store/actions/cartActions";
import { MdClear } from "react-icons/md";
import { IoCaretBack, IoCaretForward } from "react-icons/io5";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCartAction(product._id));
  };

  const handleQuantityIncrease = () => {
    dispatch(increaseQuantityAction(product._id));
  };

  const handleQuantityDecrease = () => {
    dispatch(decreaseQuantityAction(product._id));
  };

  return (
    <Card
      className="w-100 d-flex flex-row p-3 mb-3"
      style={{ overflow: "hidden" }}
    >
      <Card.Img
        as={CloudinaryImage}
        style={{ width: "15%", objectFit: "contain", height: "4rem" }}
        publicId={product.image?.public_id}
        cloud_name="pedja1310"
        className="align-self-center"
      />
      <Card.Body className="ms-2">
        <Container>
          <Row className="d-flex flex-column flex-lg-row">
            <Col
              sm="9"
              className="d-flex flex-row  justify-content-between align-items-center w-100"
            >
              <Card.Text as="h5" className="mb-0">
                {product?.title}
              </Card.Text>
              <Card.Text>
                <MdClear
                  style={{ width: "32px", height: "32px" }}
                  onClick={handleRemoveFromCart}
                />
              </Card.Text>
            </Col>
            <Col
              sm="3"
              className="mt-3 d-flex flex-sm-row justify-content-between align-items-center w-100"
            >
              <Card.Text as="span">Price: ${product.price}</Card.Text>
              <Card.Text as="span">
                Quantity:{" "}
                <Button className="p-0 me-2" disabled={product.quantity <= 1}>
                  <IoCaretBack onClick={handleQuantityDecrease} />
                </Button>
                {product?.quantity}
                <Button className="p-0 ms-2">
                  <IoCaretForward onClick={handleQuantityIncrease} />
                </Button>
              </Card.Text>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default CartItem;
