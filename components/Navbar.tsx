"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cartCount } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
          Cart ({mounted ? cartCount : 0})
        </Link>
      </div>
    </nav>
  );
}