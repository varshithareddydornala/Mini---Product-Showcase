"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || cartItems.length === 0) {
    return (
      <main className="pageContainer">
        <div className="emptyState">
          <h1>Your Cart is Empty</h1>

          <p>
            You have not added any products yet.
          </p>

          <Link
            href="/products"
            className="productButton"
          >
            Browse Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pageContainer">
      <div className="pageHeader">
        <p className="eyebrow">Shopping Cart</p>
        <h1>Your Cart</h1>
      </div>

      <div className="cartLayout">
        <section className="cartItems">
          {cartItems.map((item) => (
            <article
              key={item.id}
              className="cartItem"
            >
              <div className="cartItemInfo">
                <p className="category">
                  {item.category}
                </p>

                <h2>{item.name}</h2>

                <p>
                  ₹{item.price.toLocaleString("en-IN")}
                </p>

                <div className="quantityControls">
                    <button
                        onClick={() =>
                        updateQuantity(
                            item.id,
                            item.quantity - 1
                        )
                        }
                    >
                        −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                        onClick={() =>
                        updateQuantity(
                            item.id,
                            item.quantity + 1
                        )
                        }
                    >
                        +
                    </button>
                </div>

                <button
                  className="removeButton"
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                >
                  Remove
                </button>
              </div>

              <strong className="cartItemTotal">
                ₹
                {(
                  item.price * item.quantity
                ).toLocaleString("en-IN")}
              </strong>
            </article>
          ))}
        </section>

        <aside className="cartSummary">
          <h2>Order Summary</h2>

          <div className="summaryRow">
            <span>Total</span>

            <strong>
              ₹{cartTotal.toLocaleString("en-IN")}
            </strong>
          </div>

          <button className="checkoutButton">
            Proceed to Checkout
          </button>
        </aside>
      </div>
    </main>
  );
}