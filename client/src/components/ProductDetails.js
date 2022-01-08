import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row, Button, Spinner } from "react-bootstrap";
import { Image as CloudinaryImage, Transformation } from "cloudinary-react";
import { addToCartAction } from "../store/actions/cartActions";
import { useEffect } from "react";
import { getSingleProductAction } from "../store/actions/productsActions";
import { useParams } from "react-router";

const ProductDetails = () => {
  const user = useSelector((state) => state.user);
  const { id } = useParams();

  const dispatch = useDispatch();

  const { loading, product, error } = useSelector(
    (state) => state.products.singleProduct
  );

  useEffect(() => {
    dispatch(getSingleProductAction(id));
  }, []);

  const handleAddToCart = () => {
    dispatch(addToCartAction(product));
  };

  return (
    <Container fluid className="px-0">
      {loading ? (
        <Row>
          <Spinner animation="grow" />
        </Row>
      ) : (
        <>
          <Row>
            <Col lg="4">
              {!product.image ? (
                <Spinner animation="grow" />
              ) : (
                <CloudinaryImage
                  style={{ maxWidth: "100%" }}
                  publicId={product.image.public_id}
                  cloud_name="pedja1310"
                >
                  <Transformation width="250" height="250" />
                </CloudinaryImage>
              )}
            </Col>
            <Col lg="8" className="px-lg-5 d-flex flex-column">
              <h4>{product.title}</h4>
              <h5 className="mt-4">Price: ${product.price}</h5>
              <h6>In Stock: {product.inStock}</h6>
              <Row className="mt-auto">
                <Col>
                  <Button
                    variant="outline-danger"
                    style={{ width: "100%" }}
                    disabled={!user.email}
                  >
                    Add to Wishlist
                  </Button>
                </Col>
                <Col>
                  <Button
                    variant="outline-dark"
                    style={{ width: "100%" }}
                    disabled={!user.email}
                    onClick={handleAddToCart}
                  >
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
        </>
      )}
    </Container>
  );
};

export default ProductDetails;
