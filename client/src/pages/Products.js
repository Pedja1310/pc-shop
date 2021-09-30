import { Col, Container, Row } from "react-bootstrap";
import ProductFilters from "../components/ProductFilters";
import ProductList from "../components/ProductList";

const Products = () => {
  return (
    <Container fluid className="p-0">
      <Row>
        <h1>Products</h1>
      </Row>
      <Row className="mt-4">
        <Col lg={3}>
          <ProductFilters />
        </Col>
        <Col lg={9}>
          <ProductList />
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
