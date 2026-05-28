import { motion } from "framer-motion";
import { lookbook } from "@/data/site";
import { SectionHeading } from "@/components/home/Categories";

export function Lookbook() {
  return (
    <section className="relative py-24 md:py-32 border-t border-white/5 bg-gradient-to-b from-noir via-charcoal/40 to-noir">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading
          eyebrow="Editorial"
          title="The Fashion Lookbook"
          subtitle="Three frames from the FW '26 campaign — atmosphere as much as garment."
        />

        <div className="mt-14 grid grid-cols-12 gap-4 md:gap-6">
          {lookbook.map((l, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative overflow-hidden rounded-2xl group ${
                i === 0 ? "col-span-12 md:col-span-7 md:row-span-2 aspect-[4/5] md:aspect-auto" :
                i === 1 ? "col-span-6 md:col-span-5 aspect-[3/4]" :
                "col-span-6 md:col-span-5 aspect-[3/4]"
              }`}
            >
              <img
                src={l.src}
                alt={l.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/90 via-noir/10 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                <p className="text-[10px] uppercase tracking-luxe text-gold/90">{l.caption}</p>
                <p className="mt-1.5 font-display text-2xl md:text-3xl text-ivory">{l.title}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
