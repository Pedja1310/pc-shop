import API from "./index";

export const userRegister = (credentials) =>
  API.post("/auth/register", credentials);

export const userLogin = (credentials) => API.post("/auth/login", credentials);
