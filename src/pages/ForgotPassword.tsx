import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    toast.success("Reset link sent to your email");
    setEmail("");
  };

  return (
    <section className="pt-32 pb-16">
      <div className="mx-auto max-w-md px-5">
        <div className="rounded-2xl border border-white/10 bg-charcoal/70 p-6">
          <h1 className="font-display text-4xl text-ivory">Forgot Password</h1>
          <p className="mt-2 text-sm text-ivory/60">Enter your email to receive a password reset link.</p>
          <form onSubmit={handleSubmit} className="mt-5 space-y-3">
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email address"
              className="h-11 w-full rounded-lg border border-white/20 bg-transparent px-3 text-sm outline-none focus:border-gold"
            />
            <button className="w-full rounded-full bg-gold px-5 py-3 text-xs font-semibold uppercase tracking-luxe text-noir">
              Send Reset Link
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-ivory/60">
            Back to{" "}
            <Link to="/login" className="text-gold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

