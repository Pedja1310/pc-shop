import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import { Container, Row, Nav, Col } from "react-bootstrap";
import DataTable from "../components/DataTable";

const ProductsAdminPage = () => {
  const { path, url } = useRouteMatch();

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
      <Row>
        <Switch>
          <Route exact path={path}>
            <h5 className="mt-5">Please select data to display</h5>
          </Route>
          <Route path={`${path}/:dataSet`}>
            <DataTable />
          </Route>
        </Switch>
      </Row>
    </Container>
  );
};

export default ProductsAdminPage;
