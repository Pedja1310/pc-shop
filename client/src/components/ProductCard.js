import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addToCartAction } from "../store/actions/cartActions";

const ProductCard = ({ product }) => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCartAction(product));
  };

  return (
    <Card
      style={{ width: "100%", padding: "1rem", height: "100%", zIndex: "1" }}
    >
      <Card.Header>{product.brand}</Card.Header>
      <Card.Img
        variant="top"
        src={product.image.imageUrl}
        style={{ width: "100%", height: "30vh", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Link to={`/products/${product._id}`} className="stretched-link" />
        <Card.Title as="p">${product.price}</Card.Title>
        <Card.Text style={{ marginTop: "1rem" }}>{product.title}</Card.Text>
      </Card.Body>
      <Button
        variant="dark"
        className="mt-2"
        style={{ zIndex: "2" }}
        disabled={!user.email}
        onClick={handleAddToCart}
      >
        Add to Cart
      </Button>
    </Card>
  );
};

export default ProductCard;
