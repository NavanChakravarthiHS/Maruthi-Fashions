import { l as look2, i as ig5 } from "./ig-5-miLdrnLx.js";
import { jsxs, jsx } from "react/jsx-runtime";
import { Heart, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
const catTees = "/assets/cat-tees-syqYFmgy.jpg";
const catShirts = "/assets/cat-shirts-rZEhFpf9.jpg";
const catDenim = "/assets/cat-denim-uufC30kc.jpg";
const catHoodies = "/assets/cat-hoodies-D4HVbAwv.jpg";
const catEthnic = "/assets/cat-ethnic-B4rkXoOP.jpg";
const catAccessories = "/assets/cat-accessories-CB7FngsX.jpg";
const p1 = "/assets/product-1-C-_WB5SJ.jpg";
const p2 = "/assets/product-2-BPIChI-U.jpg";
const p3 = "/assets/product-3-VrdMmuFv.jpg";
const p4 = "/assets/product-4-B119DRFl.jpg";
const p5 = "/assets/product-5-l2QHf2an.jpg";
const p6 = "/assets/product-6-CmbMEd2T.jpg";
const p7 = "/assets/product-7-9208-m0g.jpg";
const p8 = "/assets/product-8-_oERh2-d.jpg";
const look1 = "/assets/look-1-Bfhc1LcM.jpg";
const look3 = "/assets/look-3-DDP_mO6Z.jpg";
const ig1 = "/assets/ig-1-gw77fGdE.jpg";
const ig2 = "/assets/ig-2-D4qipy-Y.jpg";
const ig3 = "/assets/ig-3-B6FQcvbA.jpg";
const ig4 = "/assets/ig-4-Ck-41jR5.jpg";
const ig6 = "/assets/ig-6-CGI9PC_p.jpg";
const categories = [
  { slug: "oversized-tees", name: "Oversized Tees", count: 42, image: catTees },
  { slug: "premium-shirts", name: "Premium Shirts", count: 36, image: catShirts },
  { slug: "denim", name: "Denim Collection", count: 28, image: catDenim },
  { slug: "hoodies", name: "Hoodies", count: 24, image: catHoodies },
  { slug: "ethnic", name: "Ethnic Wear", count: 18, image: catEthnic },
  { slug: "accessories", name: "Accessories", count: 31, image: catAccessories }
];
const products = [
  { id: "p1", name: "Atelier Drop-Shoulder Tee", category: "oversized-tees", price: 1499, mrp: 2499, image: p1, badge: "Trending" },
  { id: "p2", name: "Silk Noir Camp Shirt", category: "premium-shirts", price: 2999, mrp: 4499, image: p2, badge: "New" },
  { id: "p3", name: "Onyx Slim Denim", category: "denim", price: 2799, mrp: 3999, image: p3 },
  { id: "p4", name: "Heritage Heavy Hoodie", category: "hoodies", price: 3499, mrp: 4999, image: p4, badge: "Trending" },
  { id: "p5", name: "Maharaja Bandhgala", category: "ethnic", price: 8999, mrp: 12999, image: p5, badge: "Limited" },
  { id: "p6", name: "Tan Leather Bifold", category: "accessories", price: 1899, mrp: 2799, image: p6 },
  { id: "p7", name: "Olive Linen Overshirt", category: "premium-shirts", price: 2499, mrp: 3499, image: p7, badge: "New" },
  { id: "p8", name: "Noir Chelsea Boots", category: "accessories", price: 5499, mrp: 7999, image: p8 },
  { id: "p9", name: "Carbon Oversized Tee", category: "oversized-tees", price: 1299, mrp: 1999, image: catTees },
  { id: "p10", name: "Pearl Cuff Shirt", category: "premium-shirts", price: 2699, mrp: 3699, image: catShirts },
  { id: "p11", name: "Indigo Selvedge Jean", category: "denim", price: 3299, mrp: 4599, image: catDenim },
  { id: "p12", name: "Midnight Hood", category: "hoodies", price: 2999, mrp: 4199, image: catHoodies, badge: "New" },
  { id: "p13", name: "Ivory Zari Sherwani", category: "ethnic", price: 11999, mrp: 16999, image: catEthnic, badge: "Limited" },
  { id: "p14", name: "Gilded Timepiece", category: "accessories", price: 7499, mrp: 9999, image: catAccessories, badge: "Trending" },
  { id: "p15", name: "Stone Drop Tee", category: "oversized-tees", price: 1399, mrp: 2199, image: p1 },
  { id: "p16", name: "Charcoal Wool Overshirt", category: "premium-shirts", price: 3899, mrp: 5499, image: p7 }
];
const reviews = [
  { id: "r1", name: "Arjun Mehta", city: "Mumbai", rating: 5, text: "The fabric, the cut, the finish — Maruthi feels like a tailor I've known for years. Every piece earns its place in my wardrobe." },
  { id: "r2", name: "Vikram Iyer", city: "Bengaluru", rating: 5, text: "Wore the Maharaja Bandhgala to a reception. Three people asked where it was from before the night ended." },
  { id: "r3", name: "Rohan Kapoor", city: "Delhi", rating: 5, text: "Finally a luxury Indian label that gets restraint. Nothing shouts. Everything speaks." }
];
const lookbook = [
  { src: look1, title: "Midnight Tailoring", caption: "FW '26 — The Marble Series" },
  { src: look2, title: "Heritage Reimagined", caption: "The Ivory Edit" },
  { src: look3, title: "Concrete Calm", caption: "Street Atelier" }
];
const instagram = [ig1, ig2, ig3, ig4, ig5, ig6];
function ProductCard({ product, index = 0 }) {
  const discount = Math.round((product.mrp - product.price) / product.mrp * 100);
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-60px" },
      transition: { duration: 0.6, delay: index % 4 * 0.06, ease: [0.22, 1, 0.36, 1] },
      className: "group relative",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-2xl bg-charcoal ring-1 ring-white/5", children: [
          /* @__PURE__ */ jsx("div", { className: "aspect-[4/5] overflow-hidden", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: product.image,
              alt: product.name,
              loading: "lazy",
              className: "h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-noir/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
          /* @__PURE__ */ jsxs("div", { className: "absolute top-3 left-3 flex flex-col gap-2", children: [
            product.badge && /* @__PURE__ */ jsx("span", { className: "inline-flex items-center rounded-full bg-noir/70 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-luxe text-gold border border-gold/30", children: product.badge }),
            discount > 0 && /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center rounded-full bg-gold px-3 py-1 text-[10px] uppercase tracking-luxe text-noir font-semibold", children: [
              "-",
              discount,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              "aria-label": "Wishlist",
              className: "absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-noir/60 backdrop-blur text-ivory hover:text-gold hover:bg-noir/80 transition-all",
              children: /* @__PURE__ */ jsx(Heart, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-x-3 bottom-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500", children: /* @__PURE__ */ jsxs("button", { className: "w-full inline-flex items-center justify-center gap-2 rounded-full bg-ivory text-noir py-2.5 text-[11px] uppercase tracking-luxe font-semibold hover:bg-gold transition-colors", children: [
            /* @__PURE__ */ jsx(ShoppingBag, { className: "h-3.5 w-3.5" }),
            " Add to Cart"
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 px-1", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-lg text-ivory leading-tight", children: product.name }),
          /* @__PURE__ */ jsxs("div", { className: "mt-1.5 flex items-baseline gap-2", children: [
            /* @__PURE__ */ jsxs("span", { className: "text-sm text-gold font-medium", children: [
              "₹",
              product.price.toLocaleString("en-IN")
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "text-xs text-ivory/40 line-through", children: [
              "₹",
              product.mrp.toLocaleString("en-IN")
            ] })
          ] })
        ] })
      ]
    }
  );
}
export {
  ProductCard as P,
  categories as c,
  instagram as i,
  lookbook as l,
  products as p,
  reviews as r
};
