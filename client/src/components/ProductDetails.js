import { Col, Container, Image, Row, Button } from "react-bootstrap";
import { useParams } from "react-router";
import data from "../test-data/data.json";

const ProductDetails = () => {
  const { id } = useParams();

  const product = data.find((item) => item.id === id);

  return (
    <Col lg="8">
      <Container fluid className="px-0">
        <Row>
          <Col lg="4">
            <Image src={product.image} style={{ maxWidth: "100%" }} />
          </Col>
          <Col lg="8" className="px-lg-5 d-flex flex-column">
            <h4>{product.title}</h4>
            <h5 className="mt-4">Price: ${product.price}</h5>
            <h6>In Stock: {product.inStock}</h6>
            <Row className="mt-auto">
              <Col>
                <Button variant="outline-danger" style={{ width: "100%" }}>
                  Add to Wishlist
                </Button>
              </Col>
              <Col>
                <Button variant="outline-dark" style={{ width: "100%" }}>
                  Add to Cart
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-5">
          <h4 className="mt-4">Product Description</h4>
          <p className="mt-4">{product.description}</p>
        </Row>
      </Container>
    </Col>
  );
};

export default ProductDetails;
