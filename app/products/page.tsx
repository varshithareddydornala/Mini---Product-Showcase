import ProductList from "@/components/ProductList";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <main className="pageContainer">
      <div className="pageHeader">
        <p className="eyebrow">Our Collection</p>
        <h1>Products</h1>
        <p>
          Browse and discover our available products.
        </p>
      </div>

      <ProductList products={products} />
    </main>
  );
}