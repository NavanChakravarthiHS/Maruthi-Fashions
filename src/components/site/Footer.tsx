import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/5 bg-noir">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 py-20 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold font-display text-xl">M</span>
            <span className="font-display text-2xl text-ivory">Maruthi <span className="text-gold">Fashions</span></span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-ivory/55 max-w-sm">
            Quietly luxurious menswear. Tailored in India, designed for a generation that lets the fabric speak.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ivory/70 hover:border-gold/50 hover:text-gold transition-all"
              >
                <Icon className="h-[15px] w-[15px]" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Shop" links={[
          { label: "New Arrivals", to: "/shop" },
          { label: "Trending", to: "/shop" },
          { label: "Oversized Tees", to: "/shop" },
          { label: "Ethnic Wear", to: "/shop" },
          { label: "Accessories", to: "/shop" },
        ]} />
        <FooterCol title="Maison" links={[
          { label: "Our Story", to: "/about" },
          { label: "Atelier", to: "/about" },
          { label: "Sustainability", to: "/about" },
          { label: "Press", to: "/about" },
        ]} />
        <FooterCol title="Assistance" links={[
          { label: "Contact", to: "/contact" },
          { label: "Shipping", to: "/contact" },
          { label: "Returns", to: "/contact" },
          { label: "Size Guide", to: "/contact" },
          { label: "FAQ", to: "/contact" },
        ]} />
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] uppercase tracking-luxe text-ivory/40">
          <span>© {new Date().getFullYear()} Maruthi Fashions. All rights reserved.</span>
          <span>Crafted with discipline in India</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div className="md:col-span-2">
      <h4 className="font-sans text-[11px] uppercase tracking-luxe text-gold mb-5">{title}</h4>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-sm text-ivory/65 hover:text-ivory transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
