import { Button, Card, Col, Row } from "react-bootstrap";
import { Image as CloudinaryImage } from "cloudinary-react";
import { useDispatch } from "react-redux";
import {
  removeFromCartAction,
  increaseQuantityAction,
  decreaseQuantityAction,
} from "../store/actions/cartActions";
import { priceFormatter } from "../utils/priceFormatter";
import { MdClear } from "react-icons/md";
import { IoCaretBack, IoCaretForward } from "react-icons/io5";

const ProductListItem = ({ product, page, quantity }) => {
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
      className="w-100 d-flex flex-row p-0 mb-5"
      style={{ overflow: "hidden", border: "none", maxWidth: "880px" }}
    >
      <Card.Img
        as={CloudinaryImage}
        style={{ width: "10%", objectFit: "contain", height: "5rem" }}
        publicId={product.image?.public_id}
        cloud_name="pedja1310"
        className="align-self-center"
      />
      <Card.Body className="ms-2 p-0 ps-3">
        <Row className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
          <Col
            sm="9"
            className="d-flex flex-row justify-content-between align-items-center w-100"
          >
            <Card.Text as="h5" className="mb-0 align-self-center">
              {product?.title}
            </Card.Text>
            {page === "cart" && (
              <Card.Text className="ms-2">
                <MdClear
                  style={{ width: "32px", height: "32px" }}
                  onClick={handleRemoveFromCart}
                />
              </Card.Text>
            )}
          </Col>

          <Col
            sm="3"
            className="mt-1 d-flex flex-column flex-lg-row justify-content-between align-items-start w-100"
          >
            <Card.Text as="span" className="mt-2">
              Price: {priceFormatter(product.price)}
            </Card.Text>
            <>
              <Card.Text as="span" className="mt-2">
                Quantity:{" "}
                {page === "cart" && (
                  <Button className="p-0 me-2" disabled={product.quantity <= 1}>
                    <IoCaretBack onClick={handleQuantityDecrease} />
                  </Button>
                )}
                {product?.quantity || quantity}
                {page === "cart" && (
                  <Button className="p-0 ms-2">
                    <IoCaretForward onClick={handleQuantityIncrease} />
                  </Button>
                )}
              </Card.Text>
              <Card.Text className="mt-2">
                Item Total:{" "}
                {priceFormatter(
                  product.price * product.quantity || product.price * quantity
                )}
              </Card.Text>
            </>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ProductListItem;
