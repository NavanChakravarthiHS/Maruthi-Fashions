import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
import { p as products, c as categories, P as ProductCard } from "./ProductCard-C6V6K_z1.js";
import "./ig-5-miLdrnLx.js";
import "lucide-react";
function Shop() {
  const [active, setActive] = useState("all");
  const [sort, setSort] = useState("featured");
  const filtered = products.filter((p) => active === "all" || p.category === active).sort((a, b) => sort === "low" ? a.price - b.price : sort === "high" ? b.price - a.price : 0);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "relative pt-36 pb-16 md:pt-48 md:pb-24 border-b border-white/5", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-5 lg:px-10", children: /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      y: 16
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.7
    }, children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-gold" }),
        /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-luxe text-gold", children: "The Catalogue" })
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "mt-5 font-display text-5xl md:text-7xl text-ivory leading-[1.02]", children: [
        "Shop the ",
        /* @__PURE__ */ jsx("span", { className: "italic text-gradient-gold", children: "Collection" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-xl text-ivory/55", children: "Everything from the atelier — filter by chapter or browse the full edit." })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "sticky top-[68px] z-30 glass-strong border-b border-white/5", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 lg:px-10 py-4 flex items-center gap-3 overflow-x-auto", children: [
      [{
        slug: "all",
        name: "All"
      }, ...categories].map((c) => {
        const isActive = c.slug === active;
        return /* @__PURE__ */ jsx("button", { onClick: () => setActive(c.slug), className: `shrink-0 rounded-full px-4 py-2 text-[11px] uppercase tracking-luxe transition-all ${isActive ? "bg-gold text-noir font-semibold" : "border border-white/15 text-ivory/70 hover:border-gold hover:text-gold"}`, children: c.name }, c.slug);
      }),
      /* @__PURE__ */ jsxs("div", { className: "ml-auto hidden md:flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("label", { className: "text-[11px] uppercase tracking-luxe text-ivory/40", children: "Sort" }),
        /* @__PURE__ */ jsxs("select", { value: sort, onChange: (e) => setSort(e.target.value), className: "bg-noir/60 border border-white/15 rounded-full px-4 py-2 text-[11px] uppercase tracking-luxe text-ivory focus:outline-none focus:border-gold", children: [
          /* @__PURE__ */ jsx("option", { value: "featured", children: "Featured" }),
          /* @__PURE__ */ jsx("option", { value: "low", children: "Price: Low → High" }),
          /* @__PURE__ */ jsx("option", { value: "high", children: "Price: High → Low" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-5 lg:px-10", children: filtered.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-center text-ivory/50 py-24", children: "Nothing in this edit yet." }) : /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7", children: filtered.map((p, i) => /* @__PURE__ */ jsx(ProductCard, { product: p, index: i }, p.id)) }) }) })
  ] });
}
export {
  Shop as component
};
