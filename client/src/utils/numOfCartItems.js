const numOfCartItems = (cart) => {
  return cart.reduce((prevItem, curItem) => {
    const total = prevItem + curItem.quantity;
    return total;
  }, 0);
};

export default numOfCartItems;
