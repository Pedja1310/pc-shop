import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import ProductFilters from "../components/ProductFilters";
import ProductList from "../components/ProductList";
import { getAllProductsAction } from "../store/actions/productsActions";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsAction());
  });

  return (
    <Container fluid className="p-0">
      <Row>
        <h1>Products</h1>
      </Row>
      <Row className="mt-5">
        <Col lg={2}>
          <ProductFilters />
        </Col>
        <Col lg={10}>
          <ProductList />
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
