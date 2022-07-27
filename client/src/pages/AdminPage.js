import { Link, useMatch, Routes, Route } from "react-router-dom";
import { Container, Row, Nav, Col } from "react-bootstrap";
import ProductsTable from "../components/ProductsTable";
import UsersTable from "../components/UsersTable";
import OrdersTable from "../components/OrdersTable";

const ProductsAdminPage = () => {
  const { path, url } = useMatch();

  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h3>Admin Page</h3>
        </Col>
        <Col>
          <Nav justify variant="tabs" defaultActiveKey={`${url}/products`}>
            <Nav.Item>
              <Nav.Link as={Link} to={`${url}/products`}>
                Products
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to={`${url}/orders`}>
                Orders
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to={`${url}/users`}>
                Users
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Row className="mt-5">
        <Routes>
          <Route exact path={path}>
            <h5 className="mt-5">
              Welcome to Admin page, please select data to display.
            </h5>
          </Route>
          <Route path={`${path}/products`} component={ProductsTable} />
          <Route path={`${path}/users`} component={UsersTable} />
          <Route path={`${path}/orders`} component={OrdersTable} />
        </Routes>
      </Row>
    </Container>
  );
};

export default ProductsAdminPage;
