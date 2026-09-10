import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/Product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <article className="productCard">
      <div className="productImageWrapper">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="productImage"
        />
      </div>

      <span className="category">
        {product.category}
      </span>

      <h2>{product.name}</h2>

      <p className="productDescription">
        {product.description}
      </p>

      <p className="price">
        ₹{product.price.toLocaleString("en-IN")}
      </p>

      <Link
        href={`/products/${product.id}`}
        className="productButton"
      >
        View Product
      </Link>
    </article>
  );
}