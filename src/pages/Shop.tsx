import { useState } from "react";
import { motion } from "framer-motion";
import { categories, products } from "@/data/site";
import { ProductCard } from "@/components/site/ProductCard";

export default function Shop() {
  const [active, setActive] = useState<string>("all");
  const [sort, setSort] = useState<"featured" | "low" | "high">("featured");

  const filtered = products
    .filter((p) => active === "all" || p.category === active)
    .sort((a, b) => sort === "low" ? a.price - b.price : sort === "high" ? b.price - a.price : 0);

  return (
    <>
      {/* hero strip */}
      <section className="relative pt-36 pb-16 md:pt-48 md:pb-24 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="text-[11px] uppercase tracking-luxe text-gold">The Catalogue</span>
            </div>
            <h1 className="mt-5 font-display text-5xl md:text-7xl text-ivory leading-[1.02]">
              Shop the <span className="italic text-gradient-gold">Collection</span>
            </h1>
            <p className="mt-4 max-w-xl text-ivory/55">
              Everything from the atelier — filter by chapter or browse the full edit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* filters */}
      <section className="sticky top-[68px] z-30 glass-strong border-b border-white/5">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 py-4 flex items-center gap-3 overflow-x-auto">
          {[{ slug: "all", name: "All" }, ...categories].map((c) => {
            const isActive = c.slug === active;
            return (
              <button
                key={c.slug}
                onClick={() => setActive(c.slug)}
                className={`shrink-0 rounded-full px-4 py-2 text-[11px] uppercase tracking-luxe transition-all ${
                  isActive
                    ? "bg-gold text-noir font-semibold"
                    : "border border-white/15 text-ivory/70 hover:border-gold hover:text-gold"
                }`}
              >
                {c.name}
              </button>
            );
          })}
          <div className="ml-auto hidden md:flex items-center gap-2">
            <label className="text-[11px] uppercase tracking-luxe text-ivory/40">Sort</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as never)}
              className="bg-noir/60 border border-white/15 rounded-full px-4 py-2 text-[11px] uppercase tracking-luxe text-ivory focus:outline-none focus:border-gold"
            >
              <option value="featured">Featured</option>
              <option value="low">Price: Low → High</option>
              <option value="high">Price: High → Low</option>
            </select>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          {filtered.length === 0 ? (
            <p className="text-center text-ivory/50 py-24">Nothing in this edit yet.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7">
              {filtered.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
