import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { priceFormatter } from "../utils/priceFormatter";
import { formatDate } from "../utils/formatDate";
import ProductListItem from "../components/ProductListItem";
import { useParams } from "react-router-dom";

const OrderPage = () => {
  const { id } = useParams();

  const { currentUser } = useSelector((state) => state.users);

  const order = currentUser.orders.filter((order) => order._id === id);

  const totalNumberOfItems = order[0].products.reduce(
    (prev, curr) => prev + curr.quantity,
    0
  );

  return (
    <Container className="mt-5">
      <h3 className="mb-5">Order: {order[0]._id}</h3>
      <Row>
        <Col>
          <h4>Shipping Details</h4>
          <p>
            User: {currentUser.username}, Email: {currentUser.email}
            <br />
            Shipping Address: {order[0].shippingDetails?.address},{" "}
            {order[0].shippingDetails?.postalCode},{" "}
            {order[0].shippingDetails?.city},{" "}
            {order[0].shippingDetails?.country}
            <br />
            Order Date: {formatDate(order[0].createdAt)}
          </p>
        </Col>
        <Col className="d-flex justify-content-end">
          <div>
            <h4 className="align-self-end">Total</h4>
            <h2>{priceFormatter(order[0].total.price)}</h2>
          </div>
        </Col>
      </Row>
      <hr />
      <Row>
        <h5>
          Total number of items: {totalNumberOfItems}{" "}
          {totalNumberOfItems === 1 ? "item" : "items"}.
        </h5>
      </Row>
      <hr />
      <Row className="mt-5">
        <Col className="mx-3">
          {order[0].products.map((product) => (
            <ProductListItem
              key={product._id}
              product={product.product}
              quantity={product.quantity}
            />
          ))}
        </Col>
      </Row>
      <hr />
    </Container>
  );
};

export default OrderPage;
