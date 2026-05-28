import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/site";
import { ProductCard } from "@/components/site/ProductCard";
import { SectionHeading } from "@/components/home/Categories";

export function Trending() {
  const items = products.filter(p => p.badge === "Trending").concat(products.slice(0, 6)).slice(0, 6);
  return (
    <section className="relative py-24 md:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading eyebrow="Most Coveted" title="Trending Collection" />
          <Link to="/shop" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-luxe text-ivory/70 hover:text-gold transition-colors">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* horizontal scroll carousel */}
        <div className="mt-12 -mx-5 lg:mx-0 overflow-x-auto pb-6 lg:overflow-visible">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-5 lg:px-0 flex gap-5 lg:grid lg:grid-cols-3 lg:gap-7"
          >
            {items.map((p, i) => (
              <div key={p.id + i} className="w-[78%] sm:w-[44%] lg:w-auto shrink-0">
                <ProductCard product={p} index={i} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function NewArrivals() {
  const items = products.slice(0, 8);
  return (
    <section className="relative py-24 md:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading
          eyebrow="Just In"
          title="New Arrivals"
          subtitle="Eight pieces fresh from the atelier. Limited counts, no restocks."
        />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7">
          {items.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
