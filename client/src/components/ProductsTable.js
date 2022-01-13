import { useEffect } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteProductAction,
  getAllProductsAction,
} from "../store/actions/productsActions";
import * as Icon from "react-bootstrap-icons";

const ProductsTable = () => {
  const dispatch = useDispatch();

  const { allProducts } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProductsAction());
  }, [dispatch]);

  const handleDeleteProduct = (id, imageId) => {
    dispatch(deleteProductAction(id, imageId));
  };

  return (
    <Container>
      <Row className="mt-5 align-items-center">
        <Col>
          <h5 className="text-transform-uppercase">Products list</h5>
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
      <Row className="mt-5">
        <Table bordered size="sm">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
              <th>Admin Controls</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((product) => (
              <tr key={product._id}>
                <td>{product.title}</td>
                <td>{product.category}</td>
                <td>${product.price}</td>
                <td className="d-flex justify-content-around align-items-center">
                  <Button
                    size="sm"
                    variant="warning"
                    as={Link}
                    to={`/edit-product/${product._id}`}
                  >
                    <Icon.Pen />
                  </Button>
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() =>
                      handleDeleteProduct(product._id, product.image.public_id)
                    }
                  >
                    <Icon.TrashFill className="" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default ProductsTable;
