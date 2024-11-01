export function discountAmount(price, discountPercentage) {
  const discountAmount = ((price * discountPercentage) / 100).toFixed(2);

  return discountAmount;
}

export function finalPrice(price, discountPercentage) {
  const discountAmount = (price * discountPercentage) / 100;
  const finalPrice = (price - discountAmount).toFixed(2);

  return finalPrice;
}