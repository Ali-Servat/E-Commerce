import { Product, User } from "../Shared/types";

export function transformProduct(remoteProduct): Product {
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

export function transformUser(remoteUser): User {
  const { username, password, email, role, carts } = remoteUser.attributes;
  return {
    id: remoteUser.id,
    username,
    password,
    email,
    role,
    carts,
  };
}
