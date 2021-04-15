const toCurrency = (quantity, currency = "USD") => {
  let newQuantity = quantity;

  if(typeof newQuantity !== "number") newQuantity = parseFloat(newQuantity);

  return newQuantity.toLocaleString('en-US', {
    style: 'currency',
    currency
  });
}

export default toCurrency;