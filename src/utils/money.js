export const formatPrice = (value) => {
  const priceInt = parseInt(value);
  const price = priceInt.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

  return price;
}
