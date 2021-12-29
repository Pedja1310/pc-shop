import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const DataTable = () => {
  const { dataSet } = useParams();

  return (
    <Container>
      <Row className="mt-5 align-items-center">
        <Col>
          <h5 className="text-transform-uppercase ">{dataSet} list</h5>
        </Col>
        <Col className="d-flex justify-content-end">
          <Button
            variant="dark"
            className="text-transform-uppercase"
            as={Link}
            to="/create-product"
          >
            Add Product
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default DataTable;
