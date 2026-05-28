import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { heroImg } from "@/data/site";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-noir">
      {/* image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Maruthi Fashions hero — male model in tailored overcoat"
          className="h-full w-full object-cover object-[60%_center] md:object-[70%_center]"
        />
        {/* layered cinematic gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-noir via-noir/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/20 to-noir/40" />
      </div>

      {/* content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-10 pt-40 md:pt-48 pb-24 min-h-[100svh] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-12 bg-gold" />
          <span className="text-[11px] uppercase tracking-luxe text-gold">FW '26 Edition</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-display text-[44px] sm:text-6xl md:text-7xl lg:text-[88px] leading-[1.02] tracking-tight text-ivory max-w-3xl"
        >
          Maruthi <span className="italic text-gradient-gold">Men's</span> Fashion
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.95, duration: 0.8 }}
          className="mt-6 max-w-md text-base md:text-lg text-ivory/70 font-light"
        >
          Style that defines you — quietly luxurious menswear, tailored with discipline and finished by hand.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.15, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            to="/shop"
            className="group inline-flex items-center gap-3 rounded-full bg-gold px-7 py-3.5 text-[12px] uppercase tracking-luxe text-noir font-semibold hover:bg-gold-soft transition-all shadow-luxe"
          >
            Explore Collection
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 rounded-full border border-ivory/30 bg-noir/30 backdrop-blur px-7 py-3.5 text-[12px] uppercase tracking-luxe text-ivory hover:border-gold hover:text-gold transition-all"
          >
            Shop Now
          </Link>
        </motion.div>

        {/* meta strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6, duration: 1 }}
          className="hidden lg:flex absolute bottom-12 right-10 items-center gap-8 text-ivory/60"
        >
          <div>
            <p className="text-[10px] uppercase tracking-luxe text-gold/80">Volume 04</p>
            <p className="font-display text-2xl text-ivory">The Marble Series</p>
          </div>
          <div className="h-12 w-px bg-ivory/15" />
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-luxe text-gold/80">Photographed</p>
            <p className="font-display text-2xl text-ivory">Mumbai · 2026</p>
          </div>
        </motion.div>

        {/* scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 2.8, duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-ivory/50"
        >
          <span className="text-[10px] uppercase tracking-luxe">Scroll</span>
          <ChevronDown className="h-4 w-4 mt-1" />
        </motion.div>
      </div>
    </section>
  );
}
