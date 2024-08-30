import { Product } from "../Shared/types";

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
