import { Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

import data from "../test-data/data.json";

const ProductList = () => {
  return (
    <Row>
      {data.map((item) => (
        <Col lg={4} md={6} sm={6} xs={12} className="mb-4" key={item.id}>
          <ProductCard product={item} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
