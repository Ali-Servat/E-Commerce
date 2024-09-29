import Parse from "parse";
import { Product } from "../Shared/types";
import { transformProduct } from "./transformer";

export async function getProducts() {
  const Product = Parse.Object.extend("Product");
  const query = new Parse.Query(Product);

  query.exists("objectId");
  const results = await query.find();

  const products: Product[] = results.map((result) => transformProduct(result));

  return products;
}

export async function getProductById(productId: string) {
  const Product = Parse.Object.extend("Product");
  const query = new Parse.Query(Product);

  query.equalTo("objectId", productId);
  const result = await query.first();

  if (!result) {
    throw new Error("Could not find product with id: " + productId);
  }

  const product: Product = transformProduct(result);
  return product;
}
