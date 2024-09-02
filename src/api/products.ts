import { Product } from "../Shared/types";
import Parse from "parse/dist/parse.min.js";
import { transformProduct } from "./transformer";

export async function getProducts() {
  const Product = Parse.Object.extend("Product");
  const query = new Parse.Query(Product);

  query.exists("objectId");
  const results = await query.find();

  const products: Product[] = results.map((result) => transformProduct(result));

  return products;
}
