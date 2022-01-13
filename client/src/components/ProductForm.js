import { Button, Col, Figure, Form, Row, Spinner } from "react-bootstrap";
import { Image as CloudinaryImage } from "cloudinary-react";

const ProductForm = ({
  typeOfForm,
  product,
  handleFormSubmit,
  handleChange,
  handleImage,
  imageLoading,
  dataLoading,
}) => {
  return (
    <Form onSubmit={handleFormSubmit}>
      <Row className="mx-auto">
        <Form.Group as={Col} controlId="title" md={6} className="mt-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="title"
            type="text"
            value={product.title}
            placeholder="Product title"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="brand" md={6} className="mt-3">
          <Form.Label>Brand</Form.Label>
          <Form.Control
            name="brand"
            type="text"
            value={product.brand}
            placeholder="Product brand"
            onChange={handleChange}
          />
        </Form.Group>
      </Row>
      <Row className="mx-auto">
        <Form.Group as={Col} controlId="price" md={6} className="mt-3">
          <Form.Label>Product price</Form.Label>
          <Form.Control
            name="price"
            value={product.price}
            type="number"
            min="0"
            onChange={handleChange}
            step="0.01"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="inStock" md={6} className="mt-3">
          <Form.Label>Amount In Stock</Form.Label>
          <Form.Control
            name="inStock"
            value={product.inStock}
            type="number"
            min="0"
            onChange={handleChange}
          />
        </Form.Group>
      </Row>
      <Row className="mx-auto">
        <Form.Group as={Col} controlId="category" className="mt-3">
          <Form.Label>Product category</Form.Label>
          <Form.Select
            value={product.category}
            name="category"
            onChange={handleChange}
          >
            <option value="cpu">CPU</option>
            <option value="gpu">GPU</option>
            <option value="storage">Storage</option>
            <option value="ram">RAM</option>
            <option value="monitor">Monitor</option>
            <option value="cooler">Cooler</option>
            <option value="psu">Power Supply Unit</option>
            <option value="accessories">Accessories</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mx-auto">
        <Form.Group controlId="description" className="mt-3">
          <Form.Label>Product description</Form.Label>
          <Form.Control
            name="description"
            value={product.description}
            as="textarea"
            placeholder="Enter product description..."
            style={{ height: "10rem", maxHeight: "10rem" }}
            onChange={handleChange}
          />
        </Form.Group>
      </Row>
      <Row className="mx-auto">
        <Form.Group as={Col} controlId="formFile" md={6} className="mt-3">
          <Form.Label>Product image</Form.Label>
          <Form.Control type="file" onChange={handleImage} name="image" />
        </Form.Group>
        <Col className="d-flex flex-column mt-3 justify-content-center" md={6}>
          {imageLoading ? (
            <Spinner
              animation="grow"
              variant="dark"
              size="lg"
              className="align-self-center"
            />
          ) : (
            <Figure className="align-self-center">
              {product.image?.secure_url ? (
                <CloudinaryImage
                  src={product.image?.secure_url}
                  width="auto"
                  height="250px"
                  crop="scale"
                  responsive
                  responsiveUseBreakpoints="true"
                ></CloudinaryImage>
              ) : (
                <Figure.Image
                  src={"/images/defaultProductImage.jpg"}
                  width="300"
                />
              )}
            </Figure>
          )}
        </Col>
      </Row>
      <Row>
        <Button variant="primary" type="submit" className="mt-5">
          {typeOfForm === "edit" ? "Update" : "Create"} product
        </Button>
      </Row>
    </Form>
  );
};

export default ProductForm;
