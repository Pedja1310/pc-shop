import { Row, Col, Spinner } from "react-bootstrap";
import ProductCard from "./ProductCard";
import AlertComponent from "./AlertComponent";
import { useSelector } from "react-redux";

const ProductsList = () => {
  const { products, loading, error } = useSelector((state) => state.products);

  return loading ? (
    <Row className="w-100 h-50 d-flex justify-content-center align-items-center">
      <Spinner animation="grow" className="" />
    </Row>
  ) : (
    <Row>
      {error && <AlertComponent message={error} variant="danger" />}
      {products.length === 0 && (
        <h2 className="ms-5 mt-5">No products found.</h2>
      )}
      {products.map((product) => (
        <Col lg={4} md={6} sm={6} xs={12} className="mb-4" key={product._id}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductsList;
