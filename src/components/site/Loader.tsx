import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-noir"
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="h-20 w-20 rounded-full border border-gold/30 flex items-center justify-center">
              <span className="font-display text-4xl text-gold">M</span>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-t border-gold"
            />
          </motion.div>
          <p className="mt-6 font-display text-xl text-ivory">Maruthi <span className="text-gold">Fashions</span></p>
          <p className="mt-2 text-[10px] uppercase tracking-luxe text-ivory/40">Style That Defines You</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
