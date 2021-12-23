import { useState } from "react";
import { Col, Container, Form, Row, Button, Figure } from "react-bootstrap";
import { createNewProduct } from "../api/products";

const CreateProductPage = () => {
  // const noImagePlaceholder
  const [previewSource, setPreviewSource] = useState(
    "https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg"
  );

  const [product, setProduct] = useState({
    title: "",
    brand: "",
    category: "",
    type: "",
    image: "",
    price: "",
    description: "",
    inStock: true,
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const productWithImage = { ...product, image: previewSource };

    createNewProduct(productWithImage);
  };

  const handleRemoveImage = () => {
    setPreviewSource(
      "https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg"
    );
    setProduct({ ...product, image: "" });
  };

  return (
    <Container fluid className="mt-5">
      <h3 className="mb-5">Create New Product</h3>
      <Form onSubmit={handleFormSubmit}>
        <Row className="mx-auto">
          <Form.Group as={Col} controlId="title" md={6} className="mt-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              type="text"
              placeholder="Product title"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="brand" md={6} className="mt-3">
            <Form.Label>Brand</Form.Label>
            <Form.Control
              name="brand"
              type="text"
              placeholder="Product brand"
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <Row className="mx-auto">
          <Form.Group as={Col} controlId="category" md={6} className="mt-3">
            <Form.Label>Product category</Form.Label>
            <Form.Select
              defaultValue="desktop"
              name="category"
              onChange={handleChange}
            >
              <option value="desktop">desktop</option>
              <option value="laptop">laptop</option>
              <option value="accessories">accessories</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="type" md={6} className="mt-3">
            <Form.Label>Product type</Form.Label>
            <Form.Control
              name="type"
              type="text"
              placeholder="Cpu, gpu, headphones..."
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <Row className="mx-auto">
          <Form.Group as={Col} controlId="price" md={6} className="mt-3">
            <Form.Label>Product price</Form.Label>
            <Form.Control
              name="price"
              type="number"
              min="0"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="inStock" md={6} className="mt-3">
            <Form.Label>Product in stock</Form.Label>
            <Form.Select
              defaultValue={true}
              name="inStock"
              onChange={handleChange}
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row className="mx-auto">
          <Form.Group controlId="description" className="mt-3">
            <Form.Label>Product description</Form.Label>
            <Form.Control
              name="description"
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
            <Form.Control
              type="file"
              onChange={handleFileInputChange}
              name="image"
            />
          </Form.Group>
          <Col className="d-flex flex-column mt-3" md={6}>
            <Figure className="align-self-center">
              <Figure.Image
                src={previewSource}
                width={300}
                height={500}
                fluid
              />
            </Figure>
            <Button
              type="button"
              variant="danger"
              className="mt-2"
              onClick={handleRemoveImage}
            >
              Remove Image
            </Button>
          </Col>
        </Row>
        <Row>
          <Button variant="primary" type="submit" className="mt-5">
            Create product
          </Button>
        </Row>
      </Form>
    </Container>
  );
};

export default CreateProductPage;
