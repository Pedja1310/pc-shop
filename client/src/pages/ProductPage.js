import { Container, Row } from "react-bootstrap";
import ProductDetails from "../components/ProductDetails";
import UserWishlist from "../components/UserWishlist";

const ProductPage = () => {
  return (
    <Container fluid className="p-0">
      <h1>Product Page</h1>
      <Row className="mt-5">
        <ProductDetails />
        <UserWishlist />
      </Row>
    </Container>
  );
};

export default ProductPage;
