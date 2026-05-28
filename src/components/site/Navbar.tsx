import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Search, ShoppingBag, Heart, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-strong py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-10 flex items-center justify-between">
          <Link to="/" className="group flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-gold font-display text-lg">
              M
            </span>
            <span className="font-display text-lg md:text-xl tracking-wide text-ivory">
              Maruthi <span className="text-gold">Fashions</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => {
              const active = location.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className="group relative text-[13px] uppercase tracking-luxe text-ivory/80 hover:text-ivory transition-colors"
                >
                  {l.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-500 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1 md:gap-2">
            <button aria-label="Search" className="p-2.5 text-ivory/80 hover:text-gold transition-colors">
              <Search className="h-[18px] w-[18px]" />
            </button>
            <button aria-label="Wishlist" className="hidden md:inline-flex p-2.5 text-ivory/80 hover:text-gold transition-colors">
              <Heart className="h-[18px] w-[18px]" />
            </button>
            <button aria-label="Cart" className="relative p-2.5 text-ivory/80 hover:text-gold transition-colors">
              <ShoppingBag className="h-[18px] w-[18px]" />
              <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-gold text-noir text-[10px] font-semibold flex items-center justify-center">
                2
              </span>
            </button>
            <button
              aria-label="Menu"
              className="md:hidden p-2.5 text-ivory"
              onClick={() => setOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            <div className="absolute inset-0 bg-noir/80 backdrop-blur-xl" onClick={() => setOpen(false)} />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 h-full w-[78%] max-w-sm bg-charcoal border-l border-white/10 p-6 flex flex-col"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-xl text-ivory">Maruthi <span className="text-gold">Fashions</span></span>
                <button onClick={() => setOpen(false)} className="text-ivory/70"><X className="h-5 w-5" /></button>
              </div>
              <div className="hairline mt-6" />
              <nav className="mt-8 flex flex-col gap-6">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="font-display text-3xl text-ivory hover:text-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto text-[11px] uppercase tracking-luxe text-ivory/40">
                Crafted in India
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
