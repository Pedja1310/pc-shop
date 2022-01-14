import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const UserProfilePage = () => {
  const user = useSelector((state) => state.user);

  return (
    <Container fluid className="p-0">
      <Row className="mt-5">
        <h3>Welcome {user.username}</h3>
      </Row>
      <Row className="mt-5">
        <Col sm="5">
          <h5>User Info</h5>
          <ListGroup variant="flush" className="mt-4">
            <ListGroup.Item>Email: {user.email}</ListGroup.Item>
            <ListGroup.Item>
              Country: {user.shippingDetails.country || "No Info"}
            </ListGroup.Item>
            <ListGroup.Item>
              City: {user.shippingDetails.city || "No Info"}
            </ListGroup.Item>
            <ListGroup.Item>
              Postal Code: {user.shippingDetails.postalCode || "No Info"}
            </ListGroup.Item>
            <ListGroup.Item>
              Address: {user.shippingDetails.address || "No Info"}
            </ListGroup.Item>
          </ListGroup>
          <Button className="mt-4 w-100">Update Shipping Details</Button>
        </Col>
        <Col sm="7">User Orders</Col>
      </Row>
    </Container>
  );
};

export default UserProfilePage;
