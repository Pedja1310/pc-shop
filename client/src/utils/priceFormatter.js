export const priceFormatter = (price) => {
  return `$${(price / 100).toFixed(2)}`;
};
