import Parse from "parse/dist/parse.min.js";
import { transformCart } from "./transformer";

export async function createCart(userId: string) {
  const Cart = Parse.Object.extend("Cart");
  const cart = new Cart();

  cart.set("userId", userId);
  cart.set("products", []);
  cart.set("checkedOut", false);

  const response = await cart.save();
  return transformCart(response);
}

export async function getUserCart(userId: string) {
  const Cart = Parse.Object.extend("Cart");
  const query = new Parse.Query(Cart);

  let cart = await query
    .equalTo("userId", userId)
    .equalTo("checkedOut", false)
    .first();

  if (cart === undefined) {
    return await createCart(userId);
  }

  return transformCart(cart);
}

export async function addProductToCart(cartId: string, productId: string) {
  const Cart = Parse.Object.extend("Cart");
  const cart = new Cart();

  cart.set("objectId", cartId);
  const response = await cart.save();
  response.add("products", { itemId: productId, quantity: 1 });
  const updatedCart = await response.save();

  return transformCart(updatedCart);
}
