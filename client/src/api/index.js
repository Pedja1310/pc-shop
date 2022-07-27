import axios from "axios";

const localhost = "https://mern-pc-shop.herokuapp.com/api/v1";

const API = axios.create({ baseURL: localhost });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("userToken")) {
    req.headers.authorization = `Bearer ${JSON.parse(
      localStorage.getItem("userToken")
    )}`;
  }

  return req;
});

export default API;
