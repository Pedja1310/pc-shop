import API from "./index";

export const getNewPaymentIntent = (body) =>
  API.post("/orders/newPaymentIntent", body);
