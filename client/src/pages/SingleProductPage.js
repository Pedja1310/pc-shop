import { Container, Row, Col } from "react-bootstrap";
import BackToShoppingButton from "../components/BackToShoppingButton";
import ProductDetails from "../components/ProductDetails";
import UserWishlist from "../components/UserWishlist";

const ProductPage = () => {
  return (
    <Container fluid className="p-0">
      <BackToShoppingButton />
      <Row className="mt-5">
        <Col lg={9}>
          <ProductDetails />
        </Col>
        <Col lg={3}>
          <UserWishlist />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
