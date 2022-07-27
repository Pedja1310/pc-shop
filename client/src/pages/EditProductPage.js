import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateProductAction } from "../store/actions/productsActions";

import { Container } from "react-bootstrap";
import { handleImageUpload } from "../api/products";
import { useSelector } from "react-redux";
import { getSingleProductAction } from "../store/actions/productsActions";
import ProductForm from "../components/ProductForm";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [imageLoading, setImageLoading] = useState(false);
  const [editProduct, setEditProduct] = useState({
    title: "",
    brand: "",
    category: "cpu",
    image: {
      public_id: "",
      secure_url: "",
    },
    price: 0,
    description: "",
    inStock: 0,
  });

  const { product } = useSelector((state) => state.products.singleProduct);

  // fetch product details after first render
  useEffect(() => {
    dispatch(getSingleProductAction(id));
  }, [dispatch, id]);

  // update state with product details after first useEffect returns data
  useEffect(() => {
    if (product) {
      setEditProduct({ ...product });
    }
  }, [product]);

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

        setEditProduct({ ...editProduct, image: data.image });
        setImageLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleChange = (e) => {
    setEditProduct({ ...editProduct, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProductAction(editProduct, navigate));
  };

  return (
    <Container fluid className="mt-5">
      <h3 className="mb-5">Edit Product</h3>
      <ProductForm
        typeOfForm={"edit"}
        product={editProduct}
        handleImage={handleImage}
        handleChange={handleChange}
        handleFormSubmit={handleFormSubmit}
        imageLoading={imageLoading}
      />
    </Container>
  );
};

export default EditProduct;
