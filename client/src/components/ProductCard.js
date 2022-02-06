import { Link } from "react-router-dom";
import { Image as CloudinaryImage } from "cloudinary-react";
import { Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addToCartAction } from "../store/actions/cartActions";
import { priceFormatter } from "../utils/priceFormatterer";

const ProductCard = ({ product }) => {
  const user = useSelector((state) => state.users.currentUser);

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
        as={CloudinaryImage}
        variant="top"
        style={{ width: "100%", height: "20vh", objectFit: "contain" }}
        publicId={product.image.public_id}
        cloud_name="pedja1310"
      ></Card.Img>
      <Card.Body className="d-flex flex-column">
        <Link to={`/products/${product._id}`} className="stretched-link" />
        <Card.Title as="p">{priceFormatter(product.price)}</Card.Title>
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
