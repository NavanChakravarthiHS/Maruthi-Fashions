import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function Newsletter() {
  const [done, setDone] = useState(false);
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass rounded-3xl p-10 md:p-16 text-center shadow-luxe relative overflow-hidden"
        >
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-64 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
          <span className="text-[11px] uppercase tracking-luxe text-gold">The Maruthi Letter</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-ivory leading-[1.05]">
            Inside the atelier, first.
          </h2>
          <p className="mt-4 text-ivory/60 max-w-md mx-auto">
            New drops, private previews, and the occasional film — quietly into your inbox.
          </p>

          <form
            onSubmit={(e) => { e.preventDefault(); setDone(true); }}
            className="mt-8 flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto"
          >
            <input
              required
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-full bg-noir/60 border border-white/10 px-5 py-3.5 text-sm text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-[11px] uppercase tracking-luxe text-noir font-semibold hover:bg-gold-soft transition-colors"
            >
              {done ? <><Check className="h-4 w-4" /> Subscribed</> : <>Subscribe <ArrowRight className="h-4 w-4" /></>}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
