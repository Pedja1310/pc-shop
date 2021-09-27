import { Link } from "react-router-dom";
import { Bag } from "react-bootstrap-icons";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  const user = false;
  return (
    <Navbar expand="sm" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          PC Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-toggle" />
        <Navbar.Collapse id="basic-navbar-toggle">
          <Nav className="ms-auto">
            {!user ? (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Signup
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/cart">
                  Cart
                </Nav.Link>
                <NavDropdown title="User">
                  <NavDropdown.Item as={Link} to={"/profile"}>
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to={"/"}>
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
