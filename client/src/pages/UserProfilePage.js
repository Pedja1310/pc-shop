import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import UserInfo from "../components/UserInfo";
import UserOrders from "../components/UserOrders";
import UserWishlist from "../components/UserWishlist";

const UserProfilePage = () => {
  const user = useSelector((state) => state.users.currentUser);

  return (
    <Container fluid className="p-0">
      <Row className="mt-5">
        <h3>Welcome {user.username}</h3>
      </Row>
      <Row className="mt-5">
        <Col sm="4">
          <UserInfo user={user} />
          <UserWishlist />
        </Col>
        <Col sm="8">
          <UserOrders />
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfilePage;
