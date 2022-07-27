import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Container } from "react-bootstrap";
import { handleImageUpload } from "../api/products";
import { createNewProductAction } from "../store/actions/productsActions";
import ProductForm from "../components/ProductForm";

const CreateProductPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [imageLoading, setImageLoading] = useState(false);

  const [product, setProduct] = useState({
    title: "",
    brand: "",
    category: "cpu",
    image: {
      public_id: "",
      secure_url: "",
    },
    price: "",
    description: "",
    inStock: "",
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
    dispatch(createNewProductAction(product, navigate));
  };

  return (
    <Container fluid className="mt-5">
      <h3 className="mb-5">Create New Product</h3>
      <ProductForm
        typeOfForm={"create"}
        product={product}
        handleFormSubmit={handleFormSubmit}
        handleChange={handleChange}
        handleImage={handleImage}
        imageLoading={imageLoading}
      />
    </Container>
  );
};

export default CreateProductPage;
