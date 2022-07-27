import { Link, Routes, Route, useLocation } from "react-router-dom";
import { Container, Row, Nav, Col } from "react-bootstrap";
import ProductsTable from "../components/ProductsTable";
import UsersTable from "../components/UsersTable";
import OrdersTable from "../components/OrdersTable";

const ProductsAdminPage = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h3>Admin Page</h3>
        </Col>
        <Col>
          <Nav justify variant="tabs" defaultActiveKey={`/products`}>
            <Nav.Item>
              <Nav.Link as={Link} to={`products`}>
                Products
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to={`orders`}>
                Orders
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to={`users`}>
                Users
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Row className="mt-5">
        {pathname === "/admin" && (
          <h5 className="mt-5">
            Welcome to Admin page, please select data to display.
          </h5>
        )}
        <Routes>
          {/* <Route exact path={path}> */}
          {/* </Route> */}
          <Route path={`products`} element={<ProductsTable />} />
          <Route path={`users`} element={<UsersTable />} />
          <Route path={`orders`} element={<OrdersTable />} />
        </Routes>
      </Row>
    </Container>
  );
};

export default ProductsAdminPage;
