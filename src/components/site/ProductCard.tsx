import { Heart, ShoppingBag, Eye } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "@/data/site";
import { useNavigate } from "react-router-dom";
import { useStore } from "@/store/useStore";
import { toast } from "sonner";

export function ProductCard({
  product,
  index = 0,
  onQuickView,
}: {
  product: Product;
  index?: number;
  onQuickView?: (product: Product) => void;
}) {
  const navigate = useNavigate();
  const { toggleWishlist, wishlist, addToCart } = useStore();
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  const inWishlist = wishlist.includes(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative cursor-pointer"
      onClick={() => navigate(`/shop/${product.id}`)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-charcoal ring-1 ring-white/5">
        <div className="aspect-4/5 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-1200 ease-out group-hover:scale-110"
          />
        </div>

        {/* gradient overlay on hover */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-noir/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.badge && (
            <span className="inline-flex items-center rounded-full bg-noir/70 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-luxe text-gold border border-gold/30">
              {product.badge}
            </span>
          )}
          {discount > 0 && (
            <span className="inline-flex items-center rounded-full bg-gold px-3 py-1 text-[10px] uppercase tracking-luxe text-noir font-semibold">
              -{discount}%
            </span>
          )}
        </div>

        {/* wishlist */}
        <button
          aria-label="Wishlist"
          onClick={(event) => {
            event.stopPropagation();
            toggleWishlist(product.id);
            toast.success(inWishlist ? "Removed from wishlist" : "Added to wishlist");
          }}
          className={`absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-noir/60 backdrop-blur hover:bg-noir/80 transition-all ${
            inWishlist ? "text-gold" : "text-ivory"
          }`}
        >
          <Heart className={`h-4 w-4 ${inWishlist ? "fill-gold" : ""}`} />
        </button>

        <div className="absolute inset-x-3 bottom-3 grid grid-cols-2 gap-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <button
            onClick={(event) => {
              event.stopPropagation();
              addToCart({ productId: product.id, color: product.colors[0], size: "M", quantity: 1 });
              toast.success("Added to cart");
            }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ivory text-noir py-2.5 text-[11px] uppercase tracking-luxe font-semibold hover:bg-gold transition-colors"
          >
            <ShoppingBag className="h-3.5 w-3.5" /> Add to Cart
          </button>
          <button
            onClick={(event) => {
              event.stopPropagation();
              onQuickView?.(product);
            }}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-noir/70 text-ivory py-2.5 text-[11px] uppercase tracking-luxe font-semibold hover:border-gold hover:text-gold transition-colors"
          >
            <Eye className="h-3.5 w-3.5" /> Quick View
          </button>
        </div>
      </div>

      <div className="mt-4 px-1">
        <h3 className="font-display text-lg text-ivory leading-tight">{product.name}</h3>
        <div className="mt-1.5 flex items-baseline gap-2">
          <span className="text-sm text-gold font-medium">₹{product.price.toLocaleString("en-IN")}</span>
          <span className="text-xs text-ivory/40 line-through">₹{product.mrp.toLocaleString("en-IN")}</span>
        </div>
      </div>
    </motion.div>
  );
}
