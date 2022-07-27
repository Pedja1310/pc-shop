import API from "./index";

export const getNewPaymentIntent = (body) =>
  API.post("/orders/newPaymentIntent", body);

export const createNewOrder = (order) => API.post("/orders", order);
