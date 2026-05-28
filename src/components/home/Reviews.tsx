import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { reviews } from "@/data/site";
import { SectionHeading } from "@/components/home/Categories";

export function Reviews() {
  return (
    <section className="relative py-24 md:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading
          eyebrow="In Their Words"
          title="What Clients Say"
          subtitle="Read by the people who wear it best."
        />

        <div className="mt-14 grid gap-5 md:gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-2xl p-8 shadow-luxe relative"
            >
              <Quote className="h-8 w-8 text-gold/40" />
              <div className="mt-4 flex items-center gap-1 text-gold">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-gold" />
                ))}
              </div>
              <blockquote className="mt-5 font-display text-xl leading-snug text-ivory/90">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-white/10">
                <p className="text-sm text-ivory">{r.name}</p>
                <p className="text-[11px] uppercase tracking-luxe text-ivory/40 mt-0.5">{r.city}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
