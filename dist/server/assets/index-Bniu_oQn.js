import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, ArrowUpRight, Quote, Star, Instagram, Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { c as categories, p as products, P as ProductCard, l as lookbook, r as reviews, i as instagram } from "./ProductCard-C6V6K_z1.js";
import { useState } from "react";
import "./ig-5-miLdrnLx.js";
const heroImg = "/assets/hero-CmjzqEPe.jpg";
function Hero() {
  return /* @__PURE__ */ jsxs("section", { className: "relative min-h-[100svh] w-full overflow-hidden bg-noir", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: heroImg,
          alt: "Maruthi Fashions hero — male model in tailored overcoat",
          className: "h-full w-full object-cover object-[60%_center] md:object-[70%_center]"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-noir via-noir/70 to-transparent" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-noir via-noir/20 to-noir/40" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto max-w-7xl px-5 lg:px-10 pt-40 md:pt-48 pb-24 min-h-[100svh] flex flex-col justify-center", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 1.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          className: "flex items-center gap-3",
          children: [
            /* @__PURE__ */ jsx("span", { className: "h-px w-12 bg-gold" }),
            /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-luxe text-gold", children: "FW '26 Edition" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.h1,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 1.7, duration: 1, ease: [0.22, 1, 0.36, 1] },
          className: "mt-6 font-display text-[44px] sm:text-6xl md:text-7xl lg:text-[88px] leading-[1.02] tracking-tight text-ivory max-w-3xl",
          children: [
            "Maruthi ",
            /* @__PURE__ */ jsx("span", { className: "italic text-gradient-gold", children: "Men's" }),
            " Fashion"
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 1.95, duration: 0.8 },
          className: "mt-6 max-w-md text-base md:text-lg text-ivory/70 font-light",
          children: "Style that defines you — quietly luxurious menswear, tailored with discipline and finished by hand."
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 2.15, duration: 0.8 },
          className: "mt-10 flex flex-wrap items-center gap-4",
          children: [
            /* @__PURE__ */ jsxs(
              Link,
              {
                to: "/shop",
                className: "group inline-flex items-center gap-3 rounded-full bg-gold px-7 py-3.5 text-[12px] uppercase tracking-luxe text-noir font-semibold hover:bg-gold-soft transition-all shadow-luxe",
                children: [
                  "Explore Collection",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/shop",
                className: "inline-flex items-center gap-3 rounded-full border border-ivory/30 bg-noir/30 backdrop-blur px-7 py-3.5 text-[12px] uppercase tracking-luxe text-ivory hover:border-gold hover:text-gold transition-all",
                children: "Shop Now"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 2.6, duration: 1 },
          className: "hidden lg:flex absolute bottom-12 right-10 items-center gap-8 text-ivory/60",
          children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-luxe text-gold/80", children: "Volume 04" }),
              /* @__PURE__ */ jsx("p", { className: "font-display text-2xl text-ivory", children: "The Marble Series" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "h-12 w-px bg-ivory/15" }),
            /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-luxe text-gold/80", children: "Photographed" }),
              /* @__PURE__ */ jsx("p", { className: "font-display text-2xl text-ivory", children: "Mumbai · 2026" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1, y: [0, 8, 0] },
          transition: { delay: 2.8, duration: 2, repeat: Infinity },
          className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-ivory/50",
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-luxe", children: "Scroll" }),
            /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 mt-1" })
          ]
        }
      )
    ] })
  ] });
}
function Categories() {
  return /* @__PURE__ */ jsx("section", { className: "relative py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 lg:px-10", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "The Edit",
        title: "Premium Categories",
        subtitle: "Six chapters of quiet menswear — each cut, washed and finished to a singular standard."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-14 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5", children: categories.map((c, i) => /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.7, delay: i % 3 * 0.08, ease: [0.22, 1, 0.36, 1] },
        children: /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/shop",
            className: "group relative block overflow-hidden rounded-2xl bg-charcoal ring-1 ring-white/5",
            children: [
              /* @__PURE__ */ jsx("div", { className: "aspect-[3/4] overflow-hidden", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: c.image,
                  alt: c.name,
                  loading: "lazy",
                  className: "h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                }
              ) }),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-noir via-noir/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" }),
              /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 p-5 md:p-7 flex flex-col justify-end", children: [
                /* @__PURE__ */ jsxs("p", { className: "text-[10px] uppercase tracking-luxe text-gold/90", children: [
                  c.count,
                  " pieces"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mt-2 flex items-end justify-between gap-3", children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl md:text-3xl text-ivory leading-tight", children: c.name }),
                  /* @__PURE__ */ jsx("span", { className: "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ivory/30 text-ivory translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:border-gold group-hover:text-gold transition-all duration-500", children: /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4" }) })
                ] })
              ] })
            ]
          }
        )
      },
      c.slug
    )) })
  ] }) });
}
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left"
}) {
  const center = align === "center";
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      className: center ? "text-center max-w-2xl mx-auto" : "max-w-2xl",
      children: [
        /* @__PURE__ */ jsxs("div", { className: `flex items-center gap-3 ${center ? "justify-center" : ""}`, children: [
          /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-gold" }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-luxe text-gold", children: eyebrow })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "mt-5 font-display text-4xl md:text-5xl lg:text-6xl text-ivory leading-[1.05]", children: title }),
        subtitle && /* @__PURE__ */ jsx("p", { className: "mt-4 text-base text-ivory/55 max-w-xl", children: subtitle })
      ]
    }
  );
}
function Trending() {
  const items = products.filter((p) => p.badge === "Trending").concat(products.slice(0, 6)).slice(0, 6);
  return /* @__PURE__ */ jsx("section", { className: "relative py-24 md:py-32 border-t border-white/5", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 lg:px-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Most Coveted", title: "Trending Collection" }),
      /* @__PURE__ */ jsxs(Link, { to: "/shop", className: "inline-flex items-center gap-2 text-[11px] uppercase tracking-luxe text-ivory/70 hover:text-gold transition-colors", children: [
        "View all ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 -mx-5 lg:mx-0 overflow-x-auto pb-6 lg:overflow-visible", children: /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "px-5 lg:px-0 flex gap-5 lg:grid lg:grid-cols-3 lg:gap-7",
        children: items.map((p, i) => /* @__PURE__ */ jsx("div", { className: "w-[78%] sm:w-[44%] lg:w-auto shrink-0", children: /* @__PURE__ */ jsx(ProductCard, { product: p, index: i }) }, p.id + i))
      }
    ) })
  ] }) });
}
function NewArrivals() {
  const items = products.slice(0, 8);
  return /* @__PURE__ */ jsx("section", { className: "relative py-24 md:py-32 border-t border-white/5", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 lg:px-10", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "Just In",
        title: "New Arrivals",
        subtitle: "Eight pieces fresh from the atelier. Limited counts, no restocks."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7", children: items.map((p, i) => /* @__PURE__ */ jsx(ProductCard, { product: p, index: i }, p.id)) })
  ] }) });
}
function Lookbook() {
  return /* @__PURE__ */ jsx("section", { className: "relative py-24 md:py-32 border-t border-white/5 bg-gradient-to-b from-noir via-charcoal/40 to-noir", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 lg:px-10", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "Editorial",
        title: "The Fashion Lookbook",
        subtitle: "Three frames from the FW '26 campaign — atmosphere as much as garment."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-14 grid grid-cols-12 gap-4 md:gap-6", children: lookbook.map((l, i) => /* @__PURE__ */ jsxs(
      motion.figure,
      {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
        className: `relative overflow-hidden rounded-2xl group ${i === 0 ? "col-span-12 md:col-span-7 md:row-span-2 aspect-[4/5] md:aspect-auto" : i === 1 ? "col-span-6 md:col-span-5 aspect-[3/4]" : "col-span-6 md:col-span-5 aspect-[3/4]"}`,
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: l.src,
              alt: l.title,
              loading: "lazy",
              className: "absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-noir/90 via-noir/10 to-transparent" }),
          /* @__PURE__ */ jsxs("figcaption", { className: "absolute inset-x-0 bottom-0 p-5 md:p-7", children: [
            /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-luxe text-gold/90", children: l.caption }),
            /* @__PURE__ */ jsx("p", { className: "mt-1.5 font-display text-2xl md:text-3xl text-ivory", children: l.title })
          ] })
        ]
      },
      i
    )) })
  ] }) });
}
function Reviews() {
  return /* @__PURE__ */ jsx("section", { className: "relative py-24 md:py-32 border-t border-white/5", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 lg:px-10", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "In Their Words",
        title: "What Clients Say",
        subtitle: "Read by the people who wear it best."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-5 md:gap-6 md:grid-cols-3", children: reviews.map((r, i) => /* @__PURE__ */ jsxs(
      motion.figure,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
        className: "glass rounded-2xl p-8 shadow-luxe relative",
        children: [
          /* @__PURE__ */ jsx(Quote, { className: "h-8 w-8 text-gold/40" }),
          /* @__PURE__ */ jsx("div", { className: "mt-4 flex items-center gap-1 text-gold", children: Array.from({ length: r.rating }).map((_, j) => /* @__PURE__ */ jsx(Star, { className: "h-3.5 w-3.5 fill-gold" }, j)) }),
          /* @__PURE__ */ jsxs("blockquote", { className: "mt-5 font-display text-xl leading-snug text-ivory/90", children: [
            '"',
            r.text,
            '"'
          ] }),
          /* @__PURE__ */ jsxs("figcaption", { className: "mt-6 pt-5 border-t border-white/10", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-ivory", children: r.name }),
            /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-luxe text-ivory/40 mt-0.5", children: r.city })
          ] })
        ]
      },
      r.id
    )) })
  ] }) });
}
function InstagramGrid() {
  return /* @__PURE__ */ jsx("section", { className: "relative py-24 md:py-32 border-t border-white/5", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 lg:px-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "@maruthifashions", title: "The Feed", subtitle: "Follow the atelier on Instagram." }),
      /* @__PURE__ */ jsxs("a", { href: "#", className: "inline-flex items-center gap-2 text-[11px] uppercase tracking-luxe text-ivory/70 hover:text-gold transition-colors", children: [
        /* @__PURE__ */ jsx(Instagram, { className: "h-4 w-4" }),
        " Follow us"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4", children: instagram.map((src, i) => /* @__PURE__ */ jsxs(
      motion.a,
      {
        href: "#",
        initial: { opacity: 0, scale: 0.96 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.6, delay: i % 6 * 0.05 },
        className: "group relative aspect-square overflow-hidden rounded-xl bg-charcoal ring-1 ring-white/5",
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src,
              alt: `Instagram post ${i + 1}`,
              loading: "lazy",
              className: "h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-noir/0 group-hover:bg-noir/60 transition-colors flex items-center justify-center", children: /* @__PURE__ */ jsx(Instagram, { className: "h-7 w-7 text-ivory opacity-0 group-hover:opacity-100 transition-opacity" }) })
        ]
      },
      i
    )) })
  ] }) });
}
function Newsletter() {
  const [done, setDone] = useState(false);
  return /* @__PURE__ */ jsx("section", { className: "relative py-24 md:py-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-4xl px-5 lg:px-10", children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
      className: "glass rounded-3xl p-10 md:p-16 text-center shadow-luxe relative overflow-hidden",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-64 bg-gold/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-luxe text-gold", children: "The Maruthi Letter" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-4xl md:text-5xl text-ivory leading-[1.05]", children: "Inside the atelier, first." }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-ivory/60 max-w-md mx-auto", children: "New drops, private previews, and the occasional film — quietly into your inbox." }),
        /* @__PURE__ */ jsxs(
          "form",
          {
            onSubmit: (e) => {
              e.preventDefault();
              setDone(true);
            },
            className: "mt-8 flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto",
            children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  required: true,
                  type: "email",
                  placeholder: "your@email.com",
                  className: "flex-1 rounded-full bg-noir/60 border border-white/10 px-5 py-3.5 text-sm text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-gold transition-colors"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "submit",
                  className: "inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-[11px] uppercase tracking-luxe text-noir font-semibold hover:bg-gold-soft transition-colors",
                  children: done ? /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }),
                    " Subscribed"
                  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                    "Subscribe ",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
                  ] })
                }
              )
            ]
          }
        )
      ]
    }
  ) }) });
}
function Home() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Categories, {}),
    /* @__PURE__ */ jsx(Trending, {}),
    /* @__PURE__ */ jsx(NewArrivals, {}),
    /* @__PURE__ */ jsx(Lookbook, {}),
    /* @__PURE__ */ jsx(Reviews, {}),
    /* @__PURE__ */ jsx(InstagramGrid, {}),
    /* @__PURE__ */ jsx(Newsletter, {})
  ] });
}
export {
  Home as component
};
