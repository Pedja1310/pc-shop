export const numberOfCartItems = (cart) => {
  const numberOfItems = cart.reduce((prevItem, curItem) => {
    const total = prevItem + curItem.quantity;
    return total;
  }, 0);

  return numberOfItems;
};

export const calculateTotal = (cart) => {
  const total = cart.reduce((acc, item) => {
    const sum = acc + item.price * item.quantity;
    return sum;
  }, 0);

  return total.toFixed(2);
};
