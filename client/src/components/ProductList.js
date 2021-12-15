import { Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const ProductList = () => {
  const products = useSelector((state) => state.products.allProducts);

  return (
    <Row>
      {products.map((product) => (
        <Col lg={4} md={6} sm={6} xs={12} className="mb-4" key={product._id}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
