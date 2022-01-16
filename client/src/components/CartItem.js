import { Card } from "react-bootstrap";

const CartItem = ({ product }) => {
  return (
    <Card
      className="w-100 d-flex flex-row p-3 mb-3"
      style={{ overflow: "hidden" }}
    >
      <Card.Img src={product.image.secure_url} style={{ width: "10%" }} />
      <Card.Body className="flex ms-2">
        <Card.Title as="h5" className="">
          {product.title}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CartItem;
