import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-noir px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-gold">404</h1>
        <h2 className="mt-4 font-display text-2xl text-ivory">Page not found</h2>
        <p className="mt-2 text-sm text-ivory/55">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-[11px] uppercase tracking-luxe text-noir font-semibold hover:bg-gold-soft transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
