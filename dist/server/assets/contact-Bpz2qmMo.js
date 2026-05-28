import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { useState } from "react";
import { Check, ArrowRight, MapPin, Mail, Phone, Instagram, Facebook, Twitter } from "lucide-react";
function Contact() {
  const [sent, setSent] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "pt-36 md:pt-48 pb-12", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-5 lg:px-10", children: /* @__PURE__ */ jsxs(motion.div, { initial: {
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
        /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-luxe text-gold", children: "Reach the Atelier" })
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "mt-5 font-display text-5xl md:text-7xl text-ivory leading-[1.02]", children: [
        "Let's ",
        /* @__PURE__ */ jsx("span", { className: "italic text-gradient-gold", children: "talk." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-xl text-ivory/55", children: "For orders, press, partnerships and bespoke commissions — leave a note. We answer every message within a day." })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "pb-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-12 gap-10", children: [
      /* @__PURE__ */ jsxs(motion.form, { initial: {
        opacity: 0,
        y: 24
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.8
      }, onSubmit: (e) => {
        e.preventDefault();
        setSent(true);
      }, className: "lg:col-span-7 glass rounded-3xl p-8 md:p-10 shadow-luxe space-y-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsx(Field, { label: "Name", name: "name", placeholder: "Your full name" }),
          /* @__PURE__ */ jsx(Field, { label: "Email", name: "email", type: "email", placeholder: "you@email.com" })
        ] }),
        /* @__PURE__ */ jsx(Field, { label: "Subject", name: "subject", placeholder: "Press, order, partnership…" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-[11px] uppercase tracking-luxe text-ivory/50 mb-2", children: "Message" }),
          /* @__PURE__ */ jsx("textarea", { required: true, rows: 6, placeholder: "Tell us a little about what you're after.", className: "w-full rounded-2xl bg-noir/60 border border-white/10 px-5 py-4 text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-gold transition-colors resize-none" })
        ] }),
        /* @__PURE__ */ jsx("button", { type: "submit", className: "inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-[11px] uppercase tracking-luxe text-noir font-semibold hover:bg-gold-soft transition-colors", children: sent ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }),
          " Message sent"
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          "Send message ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(motion.aside, { initial: {
        opacity: 0,
        y: 24
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.8,
        delay: 0.1
      }, className: "lg:col-span-5 space-y-6", children: [
        /* @__PURE__ */ jsx(InfoCard, { icon: MapPin, label: "Atelier", value: "24 Cunningham Road\nBengaluru, India 560052" }),
        /* @__PURE__ */ jsx(InfoCard, { icon: Mail, label: "Email", value: "hello@maruthifashions.com" }),
        /* @__PURE__ */ jsx(InfoCard, { icon: Phone, label: "Phone", value: "+91 99999 99999" }),
        /* @__PURE__ */ jsxs("div", { className: "glass rounded-3xl p-6", children: [
          /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-luxe text-gold mb-4", children: "Follow" }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3", children: [Instagram, Facebook, Twitter].map((Icon, i) => /* @__PURE__ */ jsx("a", { href: "#", className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ivory/70 hover:border-gold hover:text-gold transition-all", children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" }) }, i)) })
        ] })
      ] })
    ] }) })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  placeholder
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("label", { className: "block text-[11px] uppercase tracking-luxe text-ivory/50 mb-2", children: label }),
    /* @__PURE__ */ jsx("input", { required: true, name, type, placeholder, className: "w-full rounded-full bg-noir/60 border border-white/10 px-5 py-3.5 text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-gold transition-colors" })
  ] });
}
function InfoCard({
  icon: Icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxs("div", { className: "glass rounded-3xl p-6 flex items-start gap-4", children: [
    /* @__PURE__ */ jsx("span", { className: "inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold shrink-0", children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-luxe text-ivory/50", children: label }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-ivory whitespace-pre-line", children: value })
    ] })
  ] });
}
export {
  Contact as component
};
