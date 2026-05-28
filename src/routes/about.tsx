import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { aboutHero, look2, ig5 } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Maruthi Fashions" },
      { name: "description", content: "The Maruthi Fashions story — a quietly luxurious menswear maison tailored in India." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative pt-36 md:pt-48 pb-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid md:grid-cols-12 gap-10 items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="text-[11px] uppercase tracking-luxe text-gold">The Maison</span>
            </div>
            <h1 className="mt-5 font-display text-5xl md:text-7xl text-ivory leading-[1.02]">
              Quiet luxury, <span className="italic text-gradient-gold">tailored in India.</span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5 text-ivory/65 leading-relaxed"
          >
            Maruthi Fashions is a maison built on restraint. We design for men who would rather be remembered for the fall of a sleeve than the size of a logo.
          </motion.p>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl ring-1 ring-white/10"
          >
            <img src={aboutHero} alt="Maruthi Fashions atelier" className="w-full h-[60vh] object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-noir/70 to-transparent" />
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid md:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-white/10">
              <img src={look2} alt="Heritage Reimagined" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-7 md:pl-8"
          >
            <span className="text-[11px] uppercase tracking-luxe text-gold">Our Story</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-ivory leading-[1.05]">
              From a small workshop to a quiet movement.
            </h2>
            <div className="mt-6 space-y-5 text-ivory/65 leading-relaxed">
              <p>Founded in 2019 in Bengaluru, Maruthi began as three tailors, four sewing machines, and a stubborn idea: that Indian menswear could be world-class without being loud.</p>
              <p>Today the maison ships globally, but the rules haven't changed — every garment is cut in our own atelier, every seam pressed by hand, every fabric chosen for how it ages, not how it photographs.</p>
              <p>What we sell is restraint. What you wear, becomes you.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {[
              { k: "Craft", v: "Cut and finished by hand in our Bengaluru atelier — a single seam can take an hour." },
              { k: "Materials", v: "Selvedge denim, Egyptian cotton, Mulberry silk, Lucknow zardozi — sourced from one mill at a time." },
              { k: "Vision", v: "To dress the next generation of Indian men in clothes that outlast the season — and the trend." },
            ].map((c) => (
              <div key={c.k} className="bg-noir p-10">
                <p className="text-[11px] uppercase tracking-luxe text-gold">{c.k}</p>
                <p className="mt-4 font-display text-2xl text-ivory leading-snug">{c.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3"
          >
            {[ig5, look2, aboutHero, ig5].map((src, i) => (
              <div key={i} className="aspect-[3/4] overflow-hidden rounded-xl ring-1 ring-white/5">
                <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
