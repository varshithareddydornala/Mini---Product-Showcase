"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/Product";

interface ProductListProps {
  products: Product[];
}

export default function ProductList({
  products,
}: ProductListProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section>
      <div className="filterBar">
  <input
    className="searchInput"
    type="text"
    placeholder="Search products..."
    value={search}
    onChange={(event) => setSearch(event.target.value)}
  />

  <select
    className="categorySelect"
    value={category}
    onChange={(event) => setCategory(event.target.value)}
  >
    <option value="All">All Categories</option>
    <option value="Electronics">Electronics</option>
    <option value="Fashion">Fashion</option>
    <option value="Home">Home</option>
  </select>
</div>

      {filteredProducts.length > 0 ? (
  <div className="productGrid">
    {filteredProducts.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
      />
    ))}
  </div>
) : (
  <div className="emptyState">
    <h2>No products found</h2>
    <p>Try changing your search or category.</p>
  </div>
)}
    </section>
  );
}