import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { instagram, socialLinks } from "@/data/site";
import { SectionHeading } from "@/components/home/Categories";

export function InstagramGrid() {
  return (
    <section className="relative py-24 md:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading eyebrow="@maruthi_fashion_mens" title="The Feed" subtitle="Follow the atelier on Instagram." />
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-luxe text-ivory/70 hover:text-gold transition-colors"
          >
            <Instagram className="h-4 w-4" /> Follow us
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {instagram.map((src, i) => (
            <motion.a
              key={i}
              href={socialLinks.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="View on Instagram"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 6) * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-xl bg-charcoal ring-1 ring-white/5"
            >
              <img
                src={src}
                alt={`Instagram post ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/60 transition-colors flex items-center justify-center">
                <Instagram className="h-7 w-7 text-ivory opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
