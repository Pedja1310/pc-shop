import { CART_ADD } from "../actionTypes";

const initialState = [
  {
    id: "615de303d5fb7c0c662986b8",
    title: "NVIDIA GeForce RTX 3060 Ti Founders Edition 8GB",
    image: "https://i.ebayimg.com/images/g/XtYAAOSwuxJf9GCu/s-l640.jpg",
    price: 9999.99,
    quantity: 3,
  },
  {
    id: "615de303d5fb7c0c662986b7",
    title: "Crucial Ballistix 3200MHz DDR4 16GB (8GBx2)",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTv38h5qxt0-m2uZiHzNag7aXfJfWEU3LGxQ&usqp=CAU",
    price: 82.99,
    quantity: 2,
  },
  {
    id: "615de303d5fb7c0c662986b6",
    title: "Intel Core i7-10700KF Desktop Processor",
    image:
      "https://cdn.pcexpress.co.za/media/catalog/product/i/n/intel_core_i7_-_10th_gen.jpg",
    price: 308.94,
    quantity: 1,
  },
];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD:
      const orderItem = action.payload;
      const inCart = state.findIndex((item) => item.id === orderItem.id);

      if (inCart !== -1) {
        const newOrders = [...state];
        newOrders[inCart].quantity += 1;
        return newOrders;
      }
      return [...state, orderItem];
    default:
      return state;
  }
};

export default cartReducer;
