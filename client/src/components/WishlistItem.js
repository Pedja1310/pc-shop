import { Card } from "react-bootstrap";
import { Image as CloudinaryImage } from "cloudinary-react";
import { Link } from "react-router-dom";

const WishlistItem = ({ product }) => {
  return (
    <Card
      className="w-100 d-flex flex-row p-0 mb-2"
      style={{ overflow: "hidden", border: "none" }}
    >
      <Card.Img
        as={CloudinaryImage}
        style={{ width: "15%", objectFit: "contain", height: "4rem" }}
        publicId={product.image?.public_id}
        cloud_name="pedja1310"
        className="align-self-center"
      />
      <Card.Body className="ms-2 p-0 ps-3 d-flex align-items-center">
        <Link to={`/products/${product._id}`} className="stretched-link" />
        <Card.Text className="mb-0">{product?.title}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WishlistItem;
