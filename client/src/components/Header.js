import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Badge } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutAction } from "../store/actions/authActions";

const Header = () => {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userLogoutAction());
  };

  return (
    <Navbar expand="sm" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          PC Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-toggle" />
        <Navbar.Collapse id="basic-navbar-toggle">
          <Nav className="ms-auto">
            {!user.email ? (
              <>
                <Nav.Link as={Link} to="/auth">
                  Login
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/cart">
                  Cart{" "}
                  {cart.length > 0 && (
                    <Badge bg="dark" text="light">
                      {cart.length}
                    </Badge>
                  )}
                </Nav.Link>
                <Nav.Link as={Link} to={"/profile"}>
                  Profile
                </Nav.Link>
                <Nav.Link as={Link} to={"/"} onClick={handleLogout}>
                  Logout
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
