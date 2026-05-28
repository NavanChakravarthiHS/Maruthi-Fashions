import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppFab() {
  return (
    <motion.a
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="pulse-gold fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-luxe hover:scale-105 transition-transform"
    >
      <MessageCircle className="h-6 w-6" />
    </motion.a>
  );
}
