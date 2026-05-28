import { motion } from "framer-motion";
import { toast } from "sonner";
import { type BookingPriceBreakdown } from "@/lib/pricing";
import { buildWhatsAppBookingUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export type WhatsAppBookingButtonProps = {
  productName: string;
  productImage?: string;
  size: string | null;
  color?: string;
  pricing: BookingPriceBreakdown;
  className?: string;
  customerMessage?: string;
};

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function WhatsAppBookingButton({
  productName,
  productImage,
  size,
  color,
  pricing,
  className,
  customerMessage,
}: WhatsAppBookingButtonProps) {
  const disabled = !size;

  const handleClick = () => {
    if (!size) {
      toast.error("Please select a size before booking");
      return;
    }

    toast.success("Opening WhatsApp to complete your booking…");

    const url = buildWhatsAppBookingUrl({
      productName,
      productImageUrl: productImage,
      size,
      color,
      pricing,
      customerMessage,
    });

    window.setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
    }, 650);
  };

  return (
    <motion.button
      type="button"
      disabled={disabled}
      onClick={handleClick}
      whileHover={disabled ? undefined : { scale: 1.02, y: -1 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full px-5 py-3.5 text-sm font-semibold uppercase tracking-luxe transition-all duration-300",
        disabled
          ? "cursor-not-allowed border border-white/10 bg-white/5 text-ivory/35"
          : "bg-[#25D366] text-white shadow-luxe hover:bg-[#20bd5a] hover:shadow-[0_12px_40px_-12px_rgba(37,211,102,0.55)]",
        className,
      )}
      aria-label={disabled ? "Select a size to book on WhatsApp" : "Book on WhatsApp"}
    >
      {!disabled && (
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      )}
      <WhatsAppIcon className={cn("h-5 w-5 shrink-0", disabled ? "opacity-40" : "")} />
      <span>Book on WhatsApp</span>
    </motion.button>
  );
}
