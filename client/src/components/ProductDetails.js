import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row, Button, Spinner } from "react-bootstrap";
import { Image as CloudinaryImage, Transformation } from "cloudinary-react";
import { addToCartAction } from "../store/actions/cartActions";
import { useEffect } from "react";
import { getSingleProductAction } from "../store/actions/productsActions";
import { useParams } from "react-router";
import { updateUserWishlistAction } from "../store/actions/usersActions";
import { priceFormatter } from "../utils/priceFormatter";

const ProductDetails = () => {
  const user = useSelector((state) => state.users.currentUser);
  const { id } = useParams();

  const dispatch = useDispatch();

  const { loading, product } = useSelector(
    (state) => state.products.singleProduct
  );

  useEffect(() => {
    dispatch(getSingleProductAction(id));
  }, [dispatch, id]);

  const inWishlist = user.wishlist?.map(({ _id }) => _id).includes(product._id);

  const handleAddToCart = () => {
    dispatch(addToCartAction(product));
  };

  const handleUserWishlistUpdate = () => {
    dispatch(updateUserWishlistAction({ productId: product._id }, user._id));
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
            <Col
              lg="4"
              className="d-flex align-items-center justify-content-center mb-3"
            >
              {!product.image ? (
                <Spinner animation="grow" />
              ) : (
                <CloudinaryImage
                  style={{ maxWidth: "100%" }}
                  publicId={product.image.public_id}
                  cloud_name="pedja1310"
                >
                  <Transformation width="300" crop="scale" />
                </CloudinaryImage>
              )}
            </Col>
            <Col lg="8" className="px-lg-5 d-flex flex-column">
              <h4>{product.title}</h4>
              <h5 className="mt-4">Price: {priceFormatter(product.price)}</h5>
              <h6>In Stock: {product.inStock}</h6>
              <Row className="mt-3 d-flex flex-column">
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
                <Col className="mt-3">
                  {inWishlist ? (
                    <Button
                      variant="danger"
                      style={{ width: "100%" }}
                      disabled={!user.email}
                      onClick={handleUserWishlistUpdate}
                    >
                      Remove from Wishlist
                    </Button>
                  ) : (
                    <Button
                      variant="outline-danger"
                      style={{ width: "100%" }}
                      disabled={!user.email}
                      onClick={handleUserWishlistUpdate}
                    >
                      Add to Wishlist
                    </Button>
                  )}
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
