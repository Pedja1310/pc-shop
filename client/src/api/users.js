import API from "./index";

export const userRegister = (credentials) =>
  API.post("/auth/register", credentials);

export const userLogin = (credentials) => API.post("/auth/login", credentials);

export const getAllUsers = () => API.get("/users");

export const updateUser = (data, id) => API.patch(`/users/${id}`, data);

export const updateUserWishlist = (data, id) =>
  API.patch(`/users/${id}/wishlist`, data);
