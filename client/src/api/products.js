import API from "./index";

export const getAllProducts = () => API.get("/products");

export const getSingleProduct = (id) => API.get(`/products/${id}`);

export const createNewProduct = (product) => API.post("/products", product);

export const handleImageUpload = (formData, config) =>
  API.post("/products/handleProductImage", formData, config);
