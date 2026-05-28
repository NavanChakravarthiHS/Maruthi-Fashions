import { Link, useNavigate } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";
import { products } from "@/data/site";
import { getCartTotals, useStore } from "@/store/useStore";

export default function Cart() {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateCartQuantity, couponCode, setCouponCode } = useStore();
  const totals = getCartTotals(products, cart, couponCode);

  if (cart.length === 0) {
    return (
      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-10 text-center">
          <h1 className="font-display text-5xl text-ivory">Your cart is empty</h1>
          <p className="mt-3 text-ivory/65">Explore the collection and add premium pieces to your bag.</p>
          <Link
            to="/shop"
            className="mt-7 inline-flex rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-luxe text-noir"
          >
            Continue shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <h1 className="font-display text-5xl text-ivory">Shopping Cart</h1>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="space-y-4">
            {cart.map((item) => {
              const product = products.find((entry) => entry.id === item.productId);
              if (!product) {
                return null;
              }
              return (
                <article key={`${item.productId}-${item.size}-${item.color}`} className="rounded-2xl border border-white/10 p-4">
                  <div className="grid grid-cols-[100px_1fr] gap-4">
                    <img src={product.image} alt={product.name} className="h-28 w-full rounded-lg object-cover" />
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h2 className="font-display text-2xl text-ivory">{product.name}</h2>
                          <p className="mt-1 text-xs uppercase tracking-widest text-ivory/45">
                            Size {item.size} • {item.color}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.productId, item.size, item.color)}
                          className="text-rose-300 hover:text-rose-200"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                        <div className="inline-flex items-center rounded-full border border-white/20">
                          <button
                            className="px-3 py-2"
                            onClick={() =>
                              updateCartQuantity(item.productId, item.size, item.color, Math.max(1, item.quantity - 1))
                            }
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            className="px-3 py-2"
                            onClick={() => updateCartQuantity(item.productId, item.size, item.color, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="text-gold">₹{(product.price * item.quantity).toLocaleString("en-IN")}</p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <aside className="h-fit rounded-2xl border border-white/10 bg-charcoal/70 p-5 lg:sticky lg:top-24">
            <h3 className="font-display text-3xl text-ivory">Order Summary</h3>
            <div className="mt-5 space-y-2 text-sm">
              <div className="flex justify-between text-ivory/70">
                <span>Subtotal</span>
                <span>₹{totals.subtotal.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-ivory/70">
                <span>Shipping fee</span>
                <span>{totals.shipping === 0 ? "Free" : `₹${totals.shipping}`}</span>
              </div>
              <div className="flex justify-between text-emerald-300">
                <span>Discount</span>
                <span>-₹{Math.round(totals.couponDiscount).toLocaleString("en-IN")}</span>
              </div>
            </div>
            <div className="my-4 h-px bg-white/10" />
            <div className="flex justify-between text-base">
              <span>Total</span>
              <span className="text-gold">₹{Math.round(totals.total).toLocaleString("en-IN")}</span>
            </div>
            <input
              value={couponCode}
              onChange={(event) => setCouponCode(event.target.value)}
              placeholder="Coupon code (LUXE10 or FIRST15)"
              className="mt-4 h-11 w-full rounded-lg border border-white/20 bg-transparent px-3 text-sm text-ivory outline-none focus:border-gold"
            />
            <button
              onClick={() => navigate("/checkout")}
              className="mt-4 w-full rounded-full bg-gold px-5 py-3 text-xs font-semibold uppercase tracking-luxe text-noir"
            >
              Checkout
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}

