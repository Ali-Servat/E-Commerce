export const api = {
  getItems: () => "https://fakestoreapi.com/products",
  getItem: (id) => "https://fakestoreapi.com/products/" + id,
  getUsers: () => "https://fakestoreapi.com/users",
  getItemByCategory: (category) =>
    "https://fakestoreapi.com/products/category/" + category,
  getCarts: (userId) => "https://fakestoreapi.com/carts/user/" + userId,
  addProductToCart: (cartId) => "https://fakestoreapi.com/carts/" + cartId,
  updateCart: (cartId) => "https://fakestoreapi.com/carts/" + cartId,
};
