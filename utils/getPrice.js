export const getPrice = (price, discountPercentage) => {
  const discountAmount = price * (discountPercentage / 100);
  const totalPrice = price - discountAmount;
  const mainPrice = totalPrice.toFixed(2);

  return mainPrice;
};
