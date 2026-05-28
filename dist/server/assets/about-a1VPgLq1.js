import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { l as look2, i as ig5 } from "./ig-5-miLdrnLx.js";
const aboutHero = "/assets/about-hero-OiWxs-Ih.jpg";
function About() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "relative pt-36 md:pt-48 pb-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 lg:px-10 grid md:grid-cols-12 gap-10 items-end", children: [
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 16
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.8
      }, className: "md:col-span-7", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-gold" }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-luxe text-gold", children: "The Maison" })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-5 font-display text-5xl md:text-7xl text-ivory leading-[1.02]", children: [
          "Quiet luxury, ",
          /* @__PURE__ */ jsx("span", { className: "italic text-gradient-gold", children: "tailored in India." })
        ] })
      ] }),
      /* @__PURE__ */ jsx(motion.p, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        duration: 0.8,
        delay: 0.2
      }, className: "md:col-span-5 text-ivory/65 leading-relaxed", children: "Maruthi Fashions is a maison built on restraint. We design for men who would rather be remembered for the fall of a sleeve than the size of a logo." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "relative", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-5 lg:px-10", children: /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      scale: 0.98
    }, whileInView: {
      opacity: 1,
      scale: 1
    }, viewport: {
      once: true,
      margin: "-80px"
    }, transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1]
    }, className: "relative overflow-hidden rounded-3xl ring-1 ring-white/10", children: [
      /* @__PURE__ */ jsx("img", { src: aboutHero, alt: "Maruthi Fashions atelier", className: "w-full h-[60vh] object-cover", loading: "lazy" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-noir/70 to-transparent" })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 lg:px-10 grid md:grid-cols-12 gap-12 items-center", children: [
      /* @__PURE__ */ jsx(motion.div, { initial: {
        opacity: 0,
        y: 24
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-80px"
      }, transition: {
        duration: 0.8
      }, className: "md:col-span-5", children: /* @__PURE__ */ jsx("div", { className: "aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-white/10", children: /* @__PURE__ */ jsx("img", { src: look2, alt: "Heritage Reimagined", className: "h-full w-full object-cover", loading: "lazy" }) }) }),
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 24
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-80px"
      }, transition: {
        duration: 0.8,
        delay: 0.1
      }, className: "md:col-span-7 md:pl-8", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-luxe text-gold", children: "Our Story" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-4xl md:text-5xl text-ivory leading-[1.05]", children: "From a small workshop to a quiet movement." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-5 text-ivory/65 leading-relaxed", children: [
          /* @__PURE__ */ jsx("p", { children: "Founded in 2019 in Bengaluru, Maruthi began as three tailors, four sewing machines, and a stubborn idea: that Indian menswear could be world-class without being loud." }),
          /* @__PURE__ */ jsx("p", { children: "Today the maison ships globally, but the rules haven't changed — every garment is cut in our own atelier, every seam pressed by hand, every fabric chosen for how it ages, not how it photographs." }),
          /* @__PURE__ */ jsx("p", { children: "What we sell is restraint. What you wear, becomes you." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 md:py-32 border-t border-white/5", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-5 lg:px-10", children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden", children: [{
      k: "Craft",
      v: "Cut and finished by hand in our Bengaluru atelier — a single seam can take an hour."
    }, {
      k: "Materials",
      v: "Selvedge denim, Egyptian cotton, Mulberry silk, Lucknow zardozi — sourced from one mill at a time."
    }, {
      k: "Vision",
      v: "To dress the next generation of Indian men in clothes that outlast the season — and the trend."
    }].map((c) => /* @__PURE__ */ jsxs("div", { className: "bg-noir p-10", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-luxe text-gold", children: c.k }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 font-display text-2xl text-ivory leading-snug", children: c.v })
    ] }, c.k)) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "pb-24", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-5 lg:px-10", children: /* @__PURE__ */ jsx(motion.div, { initial: {
      opacity: 0,
      y: 24
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      duration: 0.8
    }, className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: [ig5, look2, aboutHero, ig5].map((src, i) => /* @__PURE__ */ jsx("div", { className: "aspect-[3/4] overflow-hidden rounded-xl ring-1 ring-white/5", children: /* @__PURE__ */ jsx("img", { src, alt: "", className: "h-full w-full object-cover", loading: "lazy" }) }, i)) }) }) })
  ] });
}
export {
  About as component
};
