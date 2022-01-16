import { Container, Row, Col } from "react-bootstrap";
import BackToShoppingButton from "../components/BackToShoppingButton";
import ProductDetails from "../components/ProductDetails";
import UserWishlist from "../components/UserWishlist";

const ProductPage = () => {
  return (
    <Container fluid className="p-0">
      <BackToShoppingButton />
      <Row className="mt-5">
        <Col lg={8}>
          <ProductDetails />
        </Col>
        <Col lg={4}>
          <UserWishlist />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
