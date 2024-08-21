import { Product } from "../Shared/types";

export async function getProducts(): Promise<Product[] | null> {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) return null;
  const data = await res.json();
  return data;
}
