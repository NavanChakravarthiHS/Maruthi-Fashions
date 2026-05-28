import { Link } from "react-router-dom";
import { products } from "@/data/site";
import { ProductCard } from "@/components/site/ProductCard";
import { useStore } from "@/store/useStore";

export default function Wishlist() {
  const { wishlist } = useStore();
  const list = products.filter((product) => wishlist.includes(product.id));

  return (
    <section className="pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <h1 className="font-display text-5xl text-ivory">Wishlist</h1>
        {list.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-white/10 p-8 text-center">
            <p className="text-ivory/60">No products in your wishlist yet.</p>
            <Link to="/shop" className="mt-4 inline-flex text-gold">
              Explore products
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-4">
            {list.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

