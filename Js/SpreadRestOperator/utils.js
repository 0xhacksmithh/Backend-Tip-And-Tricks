export function calculateTotal(...products) {
  return products.reduce((sum, product) => {
    return sum + product.price;
  }, 0);
}
