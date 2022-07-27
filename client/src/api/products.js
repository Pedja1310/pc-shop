import API from "./index";

export const getAllProducts = () => API.get("/products");

export const searchProducts = (searchQuery) =>
  API.get(
    `/products/search?query=${searchQuery.query || "none"}&category=${
      searchQuery.categories
    }&brand=${searchQuery.brands}`
  );

export const getSingleProduct = (id) => API.get(`/products/${id}`);

export const createNewProduct = (product) => API.post("/products", product);

export const updateProduct = (product, id) =>
  API.patch(`/products/${id}`, product);

export const deleteProduct = (id, imageId) =>
  API.delete(`/products/${id}`, { data: { imageId } });

export const handleImageUpload = (formData, config) =>
  API.post("/products/handleProductImage", formData, config);
