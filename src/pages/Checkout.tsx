import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "@/data/site";
import { getCartTotals, useStore } from "@/store/useStore";

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, couponCode, setCouponCode, clearCart } = useStore();
  const totals = getCartTotals(products, cart, couponCode);
  const [paymentMethod, setPaymentMethod] = useState("card");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    clearCart();
    navigate("/checkout/success");
  };

  return (
    <section className="pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <h1 className="font-display text-5xl text-ivory">Checkout</h1>
        <form onSubmit={handleSubmit} className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 p-5">
              <h2 className="font-display text-3xl">Shipping Address</h2>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {["First Name", "Last Name", "City", "PIN Code", "State", "Country"].map((field) => (
                  <input
                    key={field}
                    required
                    placeholder={field}
                    className="h-11 rounded-lg border border-white/20 bg-transparent px-3 text-sm outline-none focus:border-gold"
                  />
                ))}
              </div>
              <textarea
                required
                placeholder="Address"
                className="mt-3 min-h-24 w-full rounded-lg border border-white/20 bg-transparent p-3 text-sm outline-none focus:border-gold"
              />
            </div>
            <div className="rounded-2xl border border-white/10 p-5">
              <h2 className="font-display text-3xl">Contact Details</h2>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <input required placeholder="Email Address" type="email" className="h-11 rounded-lg border border-white/20 bg-transparent px-3 text-sm outline-none focus:border-gold" />
                <input required placeholder="Phone Number" className="h-11 rounded-lg border border-white/20 bg-transparent px-3 text-sm outline-none focus:border-gold" />
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 p-5">
              <h2 className="font-display text-3xl">Payment Method</h2>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {[
                  { id: "card", label: "Credit/Debit Card" },
                  { id: "upi", label: "UPI" },
                  { id: "cod", label: "Cash on Delivery" },
                ].map((method) => (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => setPaymentMethod(method.id)}
                    className={`rounded-lg border px-4 py-3 text-sm ${
                      paymentMethod === method.id ? "border-gold text-gold" : "border-white/20 text-ivory/70"
                    }`}
                  >
                    {method.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-2xl border border-white/10 bg-charcoal/70 p-5 lg:sticky lg:top-24">
            <h3 className="font-display text-3xl">Order Summary</h3>
            <div className="mt-4 space-y-2 text-sm text-ivory/70">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{totals.subtotal.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{totals.shipping === 0 ? "Free" : `₹${totals.shipping}`}</span>
              </div>
              <div className="flex justify-between text-emerald-300">
                <span>Discount</span>
                <span>-₹{Math.round(totals.couponDiscount).toLocaleString("en-IN")}</span>
              </div>
              <div className="my-4 h-px bg-white/10" />
              <div className="flex justify-between text-base text-ivory">
                <span>Total</span>
                <span className="text-gold">₹{Math.round(totals.total).toLocaleString("en-IN")}</span>
              </div>
            </div>
            <input
              value={couponCode}
              onChange={(event) => setCouponCode(event.target.value)}
              placeholder="Coupon code"
              className="mt-4 h-11 w-full rounded-lg border border-white/20 bg-transparent px-3 text-sm outline-none focus:border-gold"
            />
            <button className="mt-4 w-full rounded-full bg-gold px-5 py-3 text-xs font-semibold uppercase tracking-luxe text-noir">
              Place Order
            </button>
          </aside>
        </form>
      </div>
    </section>
  );
}

