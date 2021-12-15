import API from "./index";

export const getAllProducts = () => API.get("/products");

export const getSingleProduct = (id) => API.get(`/products/${id}`);
