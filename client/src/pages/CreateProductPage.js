import { useState } from "react";
import { Image as CloudinaryImage, Transformation } from "cloudinary-react";

import {
  Col,
  Container,
  Form,
  Row,
  Button,
  Figure,
  Spinner,
} from "react-bootstrap";
import { createNewProduct, handleImageUpload } from "../api/products";

const CreateProductPage = () => {
  const [previewSource, setPreviewSource] = useState(
    "https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg"
  );
  const [imageLoading, setImageLoading] = useState(false);

  const [product, setProduct] = useState({
    title: "",
    brand: "",
    category: "",
    image: {
      public_id: "",
      secure_url: "",
    },
    price: "",
    description: "",
    inStock: true,
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImage = async (e) => {
    if (e.target.files.length) {
      const img = e.target.files[0];

      const formData = new FormData();
      formData.append("image", img);
      formData.append("previousImage", product.image.public_id);

      try {
        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };

        setImageLoading(true);
        const { data } = await handleImageUpload(formData, config);

        setProduct({ ...product, image: data.image });
        setImageLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    createNewProduct(product);
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
            <Form.Label>Amount In Stock</Form.Label>
            <Form.Control
              name="inStock"
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
              defaultValue="desktop"
              name="category"
              onChange={handleChange}
            >
              <option value="gpu">GPU</option>
              <option value="cpu">CPU</option>
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
          <Col
            className="d-flex flex-column mt-3 justify-content-center"
            md={6}
          >
            {imageLoading ? (
              <Spinner
                animation="grow"
                variant="dark"
                size="lg"
                className="align-self-center"
              />
            ) : (
              <Figure className="align-self-center">
                <CloudinaryImage
                  src={product.image.secure_url}
                  width="300"
                  crop="scale"
                  responsive
                  responsiveUseBreakpoints="true"
                ></CloudinaryImage>
              </Figure>
            )}
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
