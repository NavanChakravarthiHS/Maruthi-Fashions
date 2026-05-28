import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Heart, Minus, Plus, ShieldCheck, ShoppingCart, Truck } from "lucide-react";
import { products } from "@/data/site";
import { ProductCard } from "@/components/site/ProductCard";
import { RatingStars } from "@/components/site/RatingStars";
import { useStore } from "@/store/useStore";
import { toast } from "sonner";

const reviewUsers = [
  {
    id: "u1",
    name: "Aaryan Kapoor",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Aaryan+Kapoor&background=000000&color=ffffff",
    comment: "The fit, stitching, and premium finish are exactly what I wanted. Looks very luxury in person.",
  },
  {
    id: "u2",
    name: "Rahul Menon",
    rating: 4,
    image: "https://ui-avatars.com/api/?name=Rahul+Menon&background=111111&color=ffffff",
    comment: "Fabric quality is excellent and feels breathable for long hours. Worth the price.",
  },
  {
    id: "u3",
    name: "Karthik Raj",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Karthik+Raj&background=222222&color=ffffff",
    comment: "Delivery was fast and packaging was classy. This has become one of my favorite pieces.",
  },
];

export default function ProductDetails() {
  const { productId = "" } = useParams();
  const navigate = useNavigate();
  const product = useMemo(() => products.find((item) => item.id === productId), [productId]);
  const [activeImage, setActiveImage] = useState(0);
  const [size, setSize] = useState<"S" | "M" | "L" | "XL">("M");
  const [color, setColor] = useState(product?.colors[0] ?? "Noir");
  const [quantity, setQuantity] = useState(1);
  const [hoverPosition, setHoverPosition] = useState({ x: 50, y: 50 });
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(5);
  const [loading, setLoading] = useState(true);
  const { addToCart, wishlist, toggleWishlist, addRecentlyViewed, recentlyViewed } = useStore();

  useEffect(() => {
    setLoading(true);
    const timer = window.setTimeout(() => setLoading(false), 400);
    return () => window.clearTimeout(timer);
  }, [productId]);
  useEffect(() => {
    if (productId) {
      addRecentlyViewed(productId);
    }
  }, [addRecentlyViewed, productId]);

  if (!product) {
    return (
      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <p className="text-ivory/70">Product not found.</p>
          <Link to="/shop" className="mt-4 inline-flex text-gold">
            Back to shop
          </Link>
        </div>
      </section>
    );
  }
  if (loading) {
    return (
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid gap-8 lg:grid-cols-[1.2fr_0.9fr]">
          <div className="h-[560px] animate-pulse rounded-2xl bg-charcoal/70" />
          <div className="space-y-4 rounded-2xl border border-white/10 bg-charcoal/60 p-6">
            <div className="h-5 w-32 animate-pulse rounded bg-white/10" />
            <div className="h-10 w-64 animate-pulse rounded bg-white/10" />
            <div className="h-20 animate-pulse rounded bg-white/10" />
            <div className="h-11 animate-pulse rounded-full bg-white/10" />
          </div>
        </div>
      </section>
    );
  }

  const inWishlist = wishlist.includes(product.id);
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  const relatedProducts = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4);
  const recentProducts = recentlyViewed.length
    ? recentlyViewed
        .map((id) => products.find((item) => item.id === id))
        .filter((item): item is (typeof products)[number] => item !== undefined)
        .filter((item) => item.id !== product.id)
        .slice(0, 4)
    : products.filter((item) => item.id !== product.id).slice(0, 4);
  const stockWarning = product.stock < 6;

  const handleAddToCart = () => {
    addToCart({ productId: product.id, quantity, size, color });
    addRecentlyViewed(product.id);
    toast.success("Added to cart");
  };

  const handleBuyNow = () => {
    addToCart({ productId: product.id, quantity, size, color });
    addRecentlyViewed(product.id);
    navigate("/checkout");
  };

  return (
    <section className="pt-32 pb-16 md:pt-36 md:pb-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="mb-7 text-sm text-ivory/50">
          <Link to="/" className="hover:text-gold">
            Home
          </Link>{" "}
          /{" "}
          <Link to="/shop" className="hover:text-gold">
            Shop
          </Link>{" "}
          / <span className="text-ivory">{product.name}</span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.9fr]">
          <div>
            <div
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-charcoal"
              onMouseMove={(event) => {
                const rect = event.currentTarget.getBoundingClientRect();
                setHoverPosition({
                  x: ((event.clientX - rect.left) / rect.width) * 100,
                  y: ((event.clientY - rect.top) / rect.height) * 100,
                });
              }}
            >
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
                style={{ transformOrigin: `${hoverPosition.x}% ${hoverPosition.y}%` }}
              />
            </div>

            <div className="mt-4 grid grid-cols-4 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={image}
                  onClick={() => setActiveImage(index)}
                  className={`overflow-hidden rounded-xl border transition-all ${
                    index === activeImage ? "border-gold ring-1 ring-gold" : "border-white/10 hover:border-white/30"
                  }`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="aspect-square w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:h-fit space-y-5 rounded-2xl border border-white/10 bg-charcoal/70 p-6">
            <span className="inline-flex rounded-full bg-gold/20 px-3 py-1 text-[10px] uppercase tracking-luxe text-gold">
              {product.category.replace("-", " ")}
            </span>
            <div>
              <h1 className="font-display text-4xl text-ivory">{product.name}</h1>
              <p className="mt-2 text-sm text-ivory/60">{product.brand}</p>
              <div className="mt-3 flex items-center gap-2">
                <RatingStars rating={product.rating} />
                <span className="text-sm text-ivory/55">({product.reviewsCount} reviews)</span>
              </div>
            </div>
            <p className="text-ivory/70">{product.description}</p>

            <div className="flex items-end gap-3">
              <span className="text-2xl font-semibold text-gold">₹{product.price.toLocaleString("en-IN")}</span>
              <span className="text-base text-ivory/40 line-through">₹{product.mrp.toLocaleString("en-IN")}</span>
              <span className="rounded-full bg-green-500/20 px-2.5 py-1 text-xs text-green-300">-{discount}%</span>
            </div>

            <div className="rounded-xl border border-white/10 bg-noir/50 p-4">
              <p className="text-xs uppercase tracking-luxe text-ivory/50">Available offers</p>
              <ul className="mt-3 space-y-2 text-sm text-ivory/75">
                {product.offers.map((offer) => (
                  <li key={offer}>• {offer}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 text-xs uppercase tracking-luxe text-ivory/50">Size</p>
              <div className="flex gap-2">
                {product.sizes.map((item) => (
                  <button
                    key={item}
                    onClick={() => setSize(item)}
                    className={`h-10 w-10 rounded-lg border text-sm ${
                      size === item ? "border-gold text-gold" : "border-white/20 text-ivory/70"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 text-xs uppercase tracking-luxe text-ivory/50">Color</p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((item) => (
                  <button
                    key={item}
                    onClick={() => setColor(item)}
                    className={`rounded-full border px-4 py-2 text-xs uppercase tracking-wide ${
                      color === item ? "border-gold text-gold" : "border-white/20 text-ivory/65"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <p className="text-xs uppercase tracking-luxe text-ivory/50">Quantity</p>
              <div className="inline-flex items-center rounded-full border border-white/20">
                <button className="px-3 py-2 text-ivory/80" onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center text-sm">{quantity}</span>
                <button
                  className="px-3 py-2 text-ivory/80"
                  onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="text-sm">
              <p className="text-emerald-300">In stock ({product.stock} available)</p>
              {stockWarning && <p className="mt-1 text-amber-300">Only few left. Order soon.</p>}
            </div>

            <div className="grid gap-3">
              <button
                onClick={handleAddToCart}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold uppercase tracking-luxe text-noir hover:bg-gold-soft"
              >
                <ShoppingCart className="h-4 w-4" /> Add to cart
              </button>
              <button
                onClick={handleBuyNow}
                className="rounded-full border border-white/25 bg-noir px-5 py-3 text-sm uppercase tracking-luxe text-ivory hover:border-gold hover:text-gold"
              >
                Buy now
              </button>
              <button
                onClick={() => {
                  toggleWishlist(product.id);
                  toast.success(inWishlist ? "Removed from wishlist" : "Added to wishlist");
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm uppercase tracking-luxe text-ivory/80 hover:border-gold hover:text-gold"
              >
                <Heart className={`h-4 w-4 ${inWishlist ? "fill-gold text-gold" : ""}`} /> Wishlist
              </button>
            </div>
          </aside>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-charcoal/60 p-5">
            <p className="mb-3 text-sm font-semibold text-ivory">Product specifications</p>
            <ul className="space-y-2 text-sm text-ivory/75">
              {product.specifications.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-charcoal/60 p-5">
              <p className="mb-2 inline-flex items-center gap-2 text-sm text-ivory">
                <Truck className="h-4 w-4 text-gold" /> Delivery information
              </p>
              <p className="text-sm text-ivory/70">Ships in 24 hours. Standard delivery in 3-5 business days across India.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-charcoal/60 p-5">
              <p className="mb-2 inline-flex items-center gap-2 text-sm text-ivory">
                <ShieldCheck className="h-4 w-4 text-gold" /> Return and refund policy
              </p>
              <p className="text-sm text-ivory/70">Easy returns within 7 days and instant refund initiation after quality check.</p>
            </div>
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-white/10 bg-charcoal/60 p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-display text-3xl text-ivory">Customer reviews & ratings</h2>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2">
              <RatingStars rating={product.rating} />
              <span className="text-sm text-ivory/70">{product.rating.toFixed(1)} / 5</span>
            </div>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[5, 4, 3, 2, 1].map((rate) => (
              <div key={rate} className="md:col-span-1">
                <div className="mb-1 flex justify-between text-sm text-ivory/70">
                  <span>{rate} stars</span>
                  <span>{Math.max(5, 28 - rate * 4)}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-2 rounded-full bg-gold" style={{ width: `${Math.max(5, 28 - rate * 4)}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {reviewUsers.map((review) => (
              <article key={review.id} className="rounded-xl border border-white/10 bg-noir/50 p-4">
                <div className="mb-3 flex items-center gap-3">
                  <img src={review.image} alt={review.name} className="h-10 w-10 rounded-full" />
                  <div>
                    <p className="text-sm text-ivory">{review.name}</p>
                    <RatingStars rating={review.rating} />
                  </div>
                </div>
                <p className="text-sm text-ivory/70">{review.comment}</p>
              </article>
            ))}
          </div>

          <form
            className="mt-8 rounded-xl border border-white/10 bg-noir/50 p-4"
            onSubmit={(event) => {
              event.preventDefault();
              setReviewText("");
              setReviewRating(5);
              toast.success("Review submitted. Thank you!");
            }}
          >
            <p className="mb-3 text-sm text-ivory">Add your review</p>
            <div className="mb-3 flex gap-2">
              {[1, 2, 3, 4, 5].map((rate) => (
                <button
                  key={rate}
                  type="button"
                  onClick={() => setReviewRating(rate)}
                  className={`rounded-md border px-3 py-1.5 text-sm ${
                    reviewRating === rate ? "border-gold text-gold" : "border-white/20 text-ivory/65"
                  }`}
                >
                  {rate}
                </button>
              ))}
            </div>
            <textarea
              required
              value={reviewText}
              onChange={(event) => setReviewText(event.target.value)}
              className="min-h-24 w-full rounded-lg border border-white/20 bg-transparent p-3 text-sm text-ivory outline-none focus:border-gold"
              placeholder="Share your experience..."
            />
            <button className="mt-3 rounded-full bg-gold px-5 py-2.5 text-xs font-semibold uppercase tracking-luxe text-noir">
              Submit review
            </button>
          </form>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 font-display text-3xl text-ivory">Related products</h3>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {relatedProducts.map((item, index) => (
              <ProductCard key={item.id} product={item} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 font-display text-3xl text-ivory">Recently viewed products</h3>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {recentProducts.map((item, index) => (
              <ProductCard key={item.id} product={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

