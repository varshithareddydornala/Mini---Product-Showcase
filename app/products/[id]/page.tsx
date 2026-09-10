import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import AddToCartButton from "@/components/AddToCartButton";

interface ProductDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { id } = await params;

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    notFound();
  }

  return (
  <main className="pageContainer">
    <Link href="/products" className="backLink">
      ← Back to Products
    </Link>

    <section className="productDetails">
      <div className="detailsImage">
        <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={500}
            className="detailsProductImage"
        />
      </div>

      <div className="detailsContent">
        <p className="eyebrow">{product.category}</p>

        <h1>{product.name}</h1>

        <p className="detailsDescription">
          {product.description}
        </p>

        <p className="detailsPrice">
          ₹{product.price.toLocaleString("en-IN")}
        </p>

        <AddToCartButton product={product} />
      </div>
    </section>
  </main>
)
}