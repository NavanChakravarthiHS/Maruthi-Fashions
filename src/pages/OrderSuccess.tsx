import { Link } from "react-router-dom";
import { CircleCheckBig } from "lucide-react";

export default function OrderSuccess() {
  return (
    <section className="pt-36 pb-24">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <CircleCheckBig className="mx-auto h-16 w-16 text-emerald-300" />
        <h1 className="mt-5 font-display text-5xl text-ivory">Order confirmed</h1>
        <p className="mt-3 text-ivory/65">
          Thank you for shopping with Maruthi Fashions. We have sent your order details to your email.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link to="/shop" className="rounded-full border border-white/20 px-5 py-3 text-xs uppercase tracking-luxe text-ivory/80">
            Continue shopping
          </Link>
          <Link to="/" className="rounded-full bg-gold px-5 py-3 text-xs font-semibold uppercase tracking-luxe text-noir">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}

