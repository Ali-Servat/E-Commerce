export const api = {
     getItems: () => 'https://fakestoreapi.com/products',
     getItem: (id) => 'https://fakestoreapi.com/products/' + id,
     getUsers: () => 'https://fakestoreapi.com/users',
     getItemByCategory: (category) =>
          'https://fakestoreapi.com/products/category/' + category,
     getCarts: () => 'https://fakestoreapi.com/carts',
};
