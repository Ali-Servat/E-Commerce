import { Product } from "../Shared/types";
import Parse from "parse/dist/parse.min.js";

export async function getProducts(): Promise<Product[] | null> {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) return null;
  const data = await res.json();
  return data;
}

export async function getProductsBack() {
  const Product = Parse.Object.extend("Product");
  const query = new Parse.Query(Product);

  query.exists("objectId");
  const results = await query.find();
  console.log(results);
}
