import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  const featuredProducts = products.filter(
    (product) => product.featured
  );

  return (
    <main>
      <section className="hero">
        <div className="heroContent">
          <p className="eyebrow">Welcome to MiniShop</p>

          <h1>Find products you&apos;ll love.</h1>

          <p className="heroText">
            Explore our collection of electronics, fashion,
            and home products selected for everyday use.
          </p>

          <Link href="/products" className="heroButton">
            Shop Products
          </Link>
        </div>
      </section>

      <section className="featuredSection">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">Featured</p>
            <h2>Popular Products</h2>
          </div>

          <Link href="/products" className="viewAllLink">
            View All Products →
          </Link>
        </div>

        <div className="productGrid">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </main>
  );
}