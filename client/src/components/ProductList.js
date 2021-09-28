import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";

import data from "../test-data/data.json";

const ProductList = () => {
  return (
    <Container fluid className="p-0">
      <Row>
        <Col lg={2}>
          <h5>Filters</h5>
        </Col>
        <Col lg={10}>
          <Row>
            {data.map((item) => (
              <Col lg={4} md={6} sm={6} xs={12} className="mb-4">
                <ProductCard product={item} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductList;
