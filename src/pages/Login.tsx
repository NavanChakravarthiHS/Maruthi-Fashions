import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useStore } from "@/store/useStore";
import { toast } from "sonner";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useStore();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="pt-32 pb-16">
      <div className="mx-auto max-w-md px-5">
        <div className="rounded-2xl border border-white/10 bg-charcoal/70 p-6">
          <h1 className="font-display text-4xl text-ivory">Login</h1>
          <p className="mt-2 text-sm text-ivory/60">Access your premium shopping experience.</p>
          <form
            className="mt-5 space-y-3"
            onSubmit={(event) => {
              event.preventDefault();
              if (!email || password.length < 6) {
                toast.error("Enter valid email and password");
                return;
              }
              login({ name: email.split("@")[0], email });
              toast.success("Logged in successfully");
              navigate("/");
            }}
          >
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
            <Link to="/forgot-password" className="block text-right text-xs text-gold">
              Forgot password?
            </Link>
            <button className="w-full rounded-full bg-gold px-5 py-3 text-xs font-semibold uppercase tracking-luxe text-noir">
              Login
            </button>
          </form>
          <div className="my-4 h-px bg-white/10" />
          <div className="grid grid-cols-2 gap-2">
            <button className="rounded-lg border border-white/20 py-2 text-xs text-ivory/80">Google</button>
            <button className="rounded-lg border border-white/20 py-2 text-xs text-ivory/80">Facebook</button>
          </div>
          <p className="mt-4 text-center text-sm text-ivory/60">
            New here?{" "}
            <Link to="/signup" className="text-gold">
              Create account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

