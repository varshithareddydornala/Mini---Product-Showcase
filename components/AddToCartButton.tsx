"use client";

import { Product } from "@/types/Product";
import { useCart } from "@/context/CartContext";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({
  product,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button
      className="addCartButton"
      onClick={() => addToCart(product)}
    >
      Add to Cart
    </button>
  );
}