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

export type Cart = {};

export type User = {
  id: string;
  username: string;
  password: string;
  email: string;
  carts: Cart[];
  role: "customer" | "admin";
};
