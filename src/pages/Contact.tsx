import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone, Check, Instagram, Facebook, Twitter } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="pt-36 md:pt-48 pb-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="text-[11px] uppercase tracking-luxe text-gold">Reach the Atelier</span>
            </div>
            <h1 className="mt-5 font-display text-5xl md:text-7xl text-ivory leading-[1.02]">
              Let's <span className="italic text-gradient-gold">talk.</span>
            </h1>
            <p className="mt-4 max-w-xl text-ivory/55">
              For orders, press, partnerships and bespoke commissions — leave a note. We answer every message within a day.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-12 gap-10">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-7 glass rounded-3xl p-8 md:p-10 shadow-luxe space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" placeholder="Your full name" />
              <Field label="Email" name="email" type="email" placeholder="you@email.com" />
            </div>
            <Field label="Subject" name="subject" placeholder="Press, order, partnership…" />
            <div>
              <label className="block text-[11px] uppercase tracking-luxe text-ivory/50 mb-2">Message</label>
              <textarea
                required
                rows={6}
                placeholder="Tell us a little about what you're after."
                className="w-full rounded-2xl bg-noir/60 border border-white/10 px-5 py-4 text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-gold transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-[11px] uppercase tracking-luxe text-noir font-semibold hover:bg-gold-soft transition-colors"
            >
              {sent ? <><Check className="h-4 w-4" /> Message sent</> : <>Send message <ArrowRight className="h-4 w-4" /></>}
            </button>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            <InfoCard icon={MapPin} label="Atelier" value={"24 Cunningham Road\nBengaluru, India 560052"} />
            <InfoCard icon={Mail} label="Email" value="hello@maruthifashions.com" />
            <InfoCard icon={Phone} label="Phone" value="+91 99999 99999" />

            <div className="glass rounded-3xl p-6">
              <p className="text-[11px] uppercase tracking-luxe text-gold mb-4">Follow</p>
              <div className="flex items-center gap-3">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ivory/70 hover:border-gold hover:text-gold transition-all">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-luxe text-ivory/50 mb-2">{label}</label>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-full bg-noir/60 border border-white/10 px-5 py-3.5 text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-gold transition-colors"
      />
    </div>
  );
}

function InfoCard({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div className="glass rounded-3xl p-6 flex items-start gap-4">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold shrink-0">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="text-[11px] uppercase tracking-luxe text-ivory/50">{label}</p>
        <p className="mt-1 text-ivory whitespace-pre-line">{value}</p>
      </div>
    </div>
  );
}
