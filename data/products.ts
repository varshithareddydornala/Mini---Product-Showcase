import { Product } from "@/types/Product";

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    description:
      "Comfortable wireless headphones with clear sound and long battery life.",
    price: 2999,
    category: "Electronics",
    image: "/products/headphones.jpg",
    featured: true,
  },
  {
    id: 2,
    name: "Classic Backpack",
    description:
      "A lightweight backpack suitable for work, college, and everyday travel.",
    price: 1499,
    category: "Fashion",
    image: "/products/backpack.jpg",
    featured: true,
  },
  {
    id: 3,
    name: "Smart Watch",
    description:
      "A stylish smart watch for activity tracking and everyday notifications.",
    price: 4999,
    category: "Electronics",
    image: "/products/watch.jpg",
    featured: true,
  },
  {
    id: 4,
    name: "Running Shoes",
    description:
      "Comfortable running shoes designed for daily workouts and casual use.",
    price: 2499,
    category: "Fashion",
    image: "/products/shoes.jpg",
    featured: false,
  },
  {
    id: 5,
    name: "Coffee Mug",
    description:
      "A simple ceramic coffee mug suitable for home and office use.",
    price: 499,
    category: "Home",
    image: "/products/mug.jpg",
    featured: false,
  },
  {
    id: 6,
    name: "Desk Lamp",
    description:
      "A compact desk lamp with adjustable lighting for work and study.",
    price: 1299,
    category: "Home",
    image: "/products/lamp.jpg",
    featured: false,
  },
];