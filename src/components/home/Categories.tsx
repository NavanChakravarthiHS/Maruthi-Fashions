import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/site";

export function Categories() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading
          eyebrow="The Edit"
          title="Premium Categories"
          subtitle="Six chapters of quiet menswear — each cut, washed and finished to a singular standard."
        />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {categories.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to="/shop"
                className="group relative block overflow-hidden rounded-2xl bg-charcoal ring-1 ring-white/5"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                <div className="absolute inset-0 p-5 md:p-7 flex flex-col justify-end">
                  <p className="text-[10px] uppercase tracking-luxe text-gold/90">{c.count} pieces</p>
                  <div className="mt-2 flex items-end justify-between gap-3">
                    <h3 className="font-display text-2xl md:text-3xl text-ivory leading-tight">{c.name}</h3>
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ivory/30 text-ivory translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:border-gold group-hover:text-gold transition-all duration-500">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow, title, subtitle, align = "left",
}: { eyebrow: string; title: string; subtitle?: string; align?: "left" | "center" }) {
  const center = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}
    >
      <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
        <span className="h-px w-8 bg-gold" />
        <span className="text-[11px] uppercase tracking-luxe text-gold">{eyebrow}</span>
      </div>
      <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl text-ivory leading-[1.05]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-ivory/55 max-w-xl">{subtitle}</p>
      )}
    </motion.div>
  );
}
