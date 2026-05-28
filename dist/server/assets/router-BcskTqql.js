import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useRouterState, Link, createRootRouteWithContext, useRouter, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Search, Heart, ShoppingBag, Menu, X, Instagram, Facebook, Twitter, Youtube, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const appCss = "/assets/styles-xhwRWwVa.css";
const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      motion.header,
      {
        initial: { y: -20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "glass-strong py-3" : "bg-transparent py-5"}`,
        children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 lg:px-10 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/", className: "group flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-gold font-display text-lg", children: "M" }),
            /* @__PURE__ */ jsxs("span", { className: "font-display text-lg md:text-xl tracking-wide text-ivory", children: [
              "Maruthi ",
              /* @__PURE__ */ jsx("span", { className: "text-gold", children: "Fashions" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-10", children: links.map((l) => {
            const active = location.pathname === l.to;
            return /* @__PURE__ */ jsxs(
              Link,
              {
                to: l.to,
                className: "group relative text-[13px] uppercase tracking-luxe text-ivory/80 hover:text-ivory transition-colors",
                children: [
                  l.label,
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: `absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-500 ${active ? "w-full" : "w-0 group-hover:w-full"}`
                    }
                  )
                ]
              },
              l.to
            );
          }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 md:gap-2", children: [
            /* @__PURE__ */ jsx("button", { "aria-label": "Search", className: "p-2.5 text-ivory/80 hover:text-gold transition-colors", children: /* @__PURE__ */ jsx(Search, { className: "h-[18px] w-[18px]" }) }),
            /* @__PURE__ */ jsx("button", { "aria-label": "Wishlist", className: "hidden md:inline-flex p-2.5 text-ivory/80 hover:text-gold transition-colors", children: /* @__PURE__ */ jsx(Heart, { className: "h-[18px] w-[18px]" }) }),
            /* @__PURE__ */ jsxs("button", { "aria-label": "Cart", className: "relative p-2.5 text-ivory/80 hover:text-gold transition-colors", children: [
              /* @__PURE__ */ jsx(ShoppingBag, { className: "h-[18px] w-[18px]" }),
              /* @__PURE__ */ jsx("span", { className: "absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-gold text-noir text-[10px] font-semibold flex items-center justify-center", children: "2" })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                "aria-label": "Menu",
                className: "md:hidden p-2.5 text-ivory",
                onClick: () => setOpen(true),
                children: /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-[60] md:hidden",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-noir/80 backdrop-blur-xl", onClick: () => setOpen(false) }),
          /* @__PURE__ */ jsxs(
            motion.aside,
            {
              initial: { x: "100%" },
              animate: { x: 0 },
              exit: { x: "100%" },
              transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
              className: "absolute right-0 top-0 h-full w-[78%] max-w-sm bg-charcoal border-l border-white/10 p-6 flex flex-col",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxs("span", { className: "font-display text-xl text-ivory", children: [
                    "Maruthi ",
                    /* @__PURE__ */ jsx("span", { className: "text-gold", children: "Fashions" })
                  ] }),
                  /* @__PURE__ */ jsx("button", { onClick: () => setOpen(false), className: "text-ivory/70", children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "hairline mt-6" }),
                /* @__PURE__ */ jsx("nav", { className: "mt-8 flex flex-col gap-6", children: links.map((l) => /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: l.to,
                    className: "font-display text-3xl text-ivory hover:text-gold transition-colors",
                    children: l.label
                  },
                  l.to
                )) }),
                /* @__PURE__ */ jsx("div", { className: "mt-auto text-[11px] uppercase tracking-luxe text-ivory/40", children: "Crafted in India" })
              ]
            }
          )
        ]
      }
    ) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "relative mt-32 border-t border-white/5 bg-noir", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 lg:px-10 py-20 grid gap-12 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold font-display text-xl", children: "M" }),
          /* @__PURE__ */ jsxs("span", { className: "font-display text-2xl text-ivory", children: [
            "Maruthi ",
            /* @__PURE__ */ jsx("span", { className: "text-gold", children: "Fashions" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-sm leading-relaxed text-ivory/55 max-w-sm", children: "Quietly luxurious menswear. Tailored in India, designed for a generation that lets the fabric speak." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex items-center gap-3", children: [Instagram, Facebook, Twitter, Youtube].map((Icon, i) => /* @__PURE__ */ jsx(
          "a",
          {
            href: "#",
            "aria-label": "social",
            className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ivory/70 hover:border-gold/50 hover:text-gold transition-all",
            children: /* @__PURE__ */ jsx(Icon, { className: "h-[15px] w-[15px]" })
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ jsx(FooterCol, { title: "Shop", links: [
        { label: "New Arrivals", to: "/shop" },
        { label: "Trending", to: "/shop" },
        { label: "Oversized Tees", to: "/shop" },
        { label: "Ethnic Wear", to: "/shop" },
        { label: "Accessories", to: "/shop" }
      ] }),
      /* @__PURE__ */ jsx(FooterCol, { title: "Maison", links: [
        { label: "Our Story", to: "/about" },
        { label: "Atelier", to: "/about" },
        { label: "Sustainability", to: "/about" },
        { label: "Press", to: "/about" }
      ] }),
      /* @__PURE__ */ jsx(FooterCol, { title: "Assistance", links: [
        { label: "Contact", to: "/contact" },
        { label: "Shipping", to: "/contact" },
        { label: "Returns", to: "/contact" },
        { label: "Size Guide", to: "/contact" },
        { label: "FAQ", to: "/contact" }
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-white/5", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] uppercase tracking-luxe text-ivory/40", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Maruthi Fashions. All rights reserved."
      ] }),
      /* @__PURE__ */ jsx("span", { children: "Crafted with discipline in India" })
    ] }) })
  ] });
}
function FooterCol({ title, links: links2 }) {
  return /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
    /* @__PURE__ */ jsx("h4", { className: "font-sans text-[11px] uppercase tracking-luxe text-gold mb-5", children: title }),
    /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: links2.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: l.to, className: "text-sm text-ivory/65 hover:text-ivory transition-colors", children: l.label }) }, l.label)) })
  ] });
}
function WhatsAppFab() {
  return /* @__PURE__ */ jsx(
    motion.a,
    {
      href: "https://wa.me/919999999999",
      target: "_blank",
      rel: "noreferrer",
      "aria-label": "Chat on WhatsApp",
      initial: { scale: 0, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: { delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
      className: "pulse-gold fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-luxe hover:scale-105 transition-transform",
      children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-6 w-6" })
    }
  );
}
function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(t);
  }, []);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: show && /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.6 },
      className: "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-noir",
      children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { scale: 0.7, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            className: "relative",
            children: [
              /* @__PURE__ */ jsx("div", { className: "h-20 w-20 rounded-full border border-gold/30 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "font-display text-4xl text-gold", children: "M" }) }),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  animate: { rotate: 360 },
                  transition: { duration: 2.2, repeat: Infinity, ease: "linear" },
                  className: "absolute inset-0 rounded-full border-t border-gold"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs("p", { className: "mt-6 font-display text-xl text-ivory", children: [
          "Maruthi ",
          /* @__PURE__ */ jsx("span", { className: "text-gold", children: "Fashions" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-[10px] uppercase tracking-luxe text-ivory/40", children: "Style That Defines You" })
      ]
    }
  ) });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-noir px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-display text-8xl text-gold", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-2xl text-ivory", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-ivory/55", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-[11px] uppercase tracking-luxe text-noir font-semibold hover:bg-gold-soft transition-colors",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-noir px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl text-ivory", children: "Something went wrong" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-ivory/55", children: "Try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "rounded-full bg-gold px-6 py-3 text-[11px] uppercase tracking-luxe text-noir font-semibold hover:bg-gold-soft transition-colors",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx("a", { href: "/", className: "rounded-full border border-ivory/30 px-6 py-3 text-[11px] uppercase tracking-luxe text-ivory hover:border-gold hover:text-gold transition-colors", children: "Go home" })
    ] })
  ] }) });
}
const Route$4 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Maruthi Fashions — Style That Defines You" },
      { name: "description", content: "Maruthi Fashions — quietly luxurious menswear. Premium shirts, denim, hoodies, ethnic wear and accessories, tailored in India." },
      { name: "author", content: "Maruthi Fashions" },
      { property: "og:title", content: "Maruthi Fashions — Style That Defines You" },
      { property: "og:description", content: "Maruthi Fashions — quietly luxurious menswear. Premium shirts, denim, hoodies, ethnic wear and accessories, tailored in India." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Maruthi Fashions — Style That Defines You" },
      { name: "twitter:description", content: "Maruthi Fashions — quietly luxurious menswear. Premium shirts, denim, hoodies, ethnic wear and accessories, tailored in India." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/fe52eae3-a01f-4f75-98d9-5fe15833bdfe" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/fe52eae3-a01f-4f75-98d9-5fe15833bdfe" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600;700&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { className: "bg-noir text-ivory antialiased", children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient: queryClient2 } = Route$4.useRouteContext();
  return /* @__PURE__ */ jsxs(QueryClientProvider, { client: queryClient2, children: [
    /* @__PURE__ */ jsx(Loader, {}),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "min-h-screen", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(WhatsAppFab, {})
  ] });
}
const $$splitComponentImporter$3 = () => import("./shop-8SiEnLxb.js");
const Route$3 = createFileRoute("/shop")({
  head: () => ({
    meta: [{
      title: "Shop — Maruthi Fashions"
    }, {
      name: "description",
      content: "Browse the full Maruthi Fashions catalogue — oversized tees, premium shirts, denim, hoodies, ethnic wear and accessories."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-Bpz2qmMo.js");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Maruthi Fashions"
    }, {
      name: "description",
      content: "Reach the Maruthi Fashions atelier — for orders, press, partnerships and bespoke menswear."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-a1VPgLq1.js");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Maruthi Fashions"
    }, {
      name: "description",
      content: "The Maruthi Fashions story — a quietly luxurious menswear maison tailored in India."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-Bniu_oQn.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Maruthi Fashions — Style That Defines You"
    }, {
      name: "description",
      content: "Premium menswear: oversized tees, shirts, denim, hoodies, ethnic wear and accessories — tailored in India."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ShopRoute = Route$3.update({
  id: "/shop",
  path: "/shop",
  getParentRoute: () => Route$4
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$4
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$4
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$4
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  ShopRoute
};
const routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
const queryClient = new QueryClient();
const router = createRouter({
  routeTree,
  context: {
    queryClient
  }
});
function getRouter() {
  return router;
}
export {
  getRouter,
  router
};
