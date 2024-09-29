import { CATEGORIES } from "./constants";

export type Category = (typeof CATEGORIES)[number];

export type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

type CartItem = {
  itemId: string;
  quantity: number;
};

export type Cart = {
  id: string;
  userId: string;
  products: CartItem[];
  checkedOut: boolean;
};

export type User = {
  id: string;
  username: string;
  password: string;
  email: string;
  cart: Cart;
  role: "customer" | "admin";
};
