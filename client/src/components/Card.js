import { Card } from "react-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Title>{product.title}</Card.Title>
    </Card>
  );
};

export default ProductCard;
