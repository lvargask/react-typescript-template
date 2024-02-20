import { Product } from "../interfaces/interfaces";

const product = {
  id: "123",
  title: "Coffee Mug",
  img: "../public/coffee-mug.png",
};

const product2 = {
  id: "456",
  title: "Coffee Mug",
  img: "../public/coffee-mug2.png",
};

export const products: Product[] = [product, product2];
