import { Cart, Product, User } from "../Shared/types";

export function transformProduct(remoteProduct: Parse.Object): Product {
  const { title, price, description, category, image, rating, ratingCount } =
    remoteProduct.attributes;

  return {
    id: remoteProduct.id,
    title,
    price,
    description,
    category,
    image: image._url,
    rating: { rate: rating, count: ratingCount },
  };
}

export function transformUser(remoteUser: Parse.Object): User {
  const { username, password, email, role, cart } = remoteUser.attributes;
  return {
    id: remoteUser.id,
    username,
    password,
    email,
    role,
    cart,
  };
}

export function transformCart(remoteCart: Parse.Object): Cart {
  const userId = remoteCart.get("userId");
  const checkedOut = remoteCart.get("checkedOut");
  const products = remoteCart.get("products");

  return {
    id: remoteCart.id,
    userId,
    checkedOut,
    products,
  };
}
