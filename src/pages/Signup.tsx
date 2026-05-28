import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useStore } from "@/store/useStore";
import { toast } from "sonner";

export default function Signup() {
  const navigate = useNavigate();
  const { login } = useStore();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="pt-32 pb-16">
      <div className="mx-auto max-w-md px-5">
        <div className="rounded-2xl border border-white/10 bg-charcoal/70 p-6">
          <h1 className="font-display text-4xl text-ivory">Create Account</h1>
          <p className="mt-2 text-sm text-ivory/60">Join and unlock premium member benefits.</p>
          <form
            className="mt-5 space-y-3"
            onSubmit={(event) => {
              event.preventDefault();
              if (!name || !email || password.length < 6) {
                toast.error("Please complete all fields correctly");
                return;
              }
              login({ name, email });
              toast.success("Account created successfully");
              navigate("/");
            }}
          >
            <input
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Full name"
              className="h-11 w-full rounded-lg border border-white/20 bg-transparent px-3 text-sm outline-none focus:border-gold"
            />
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email address"
              className="h-11 w-full rounded-lg border border-white/20 bg-transparent px-3 text-sm outline-none focus:border-gold"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                minLength={6}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
                className="h-11 w-full rounded-lg border border-white/20 bg-transparent px-3 pr-10 text-sm outline-none focus:border-gold"
              />
              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-ivory/60"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            <button className="w-full rounded-full bg-gold px-5 py-3 text-xs font-semibold uppercase tracking-luxe text-noir">
              Signup
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-ivory/60">
            Already have an account?{" "}
            <Link to="/login" className="text-gold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

