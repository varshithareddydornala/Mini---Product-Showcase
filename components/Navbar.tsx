"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        MiniShop
      </Link>

      <div className="navLinks">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/about">About</Link>
        <Link href="/login">Login</Link>

        <Link href="/cart">
          Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
}