import { type BookingPriceBreakdown } from "@/lib/pricing";
import { cn } from "@/lib/utils";

const inr = (n: number) => `₹${Math.round(n).toLocaleString("en-IN")}`;

export function BookingPriceSummary({
  breakdown,
  className,
}: {
  breakdown: BookingPriceBreakdown;
  className?: string;
}) {
  return (
    <div className={cn("rounded-xl border border-white/10 bg-noir/50 p-4 text-sm", className)}>
      <p className="text-xs uppercase tracking-luxe text-ivory/50">Order estimate</p>
      <div className="mt-3 space-y-1.5 text-ivory/75">
        <div className="flex justify-between">
          <span>
            {breakdown.quantity} × {inr(breakdown.unitPrice)}
          </span>
          <span>{inr(breakdown.linePrice)}</span>
        </div>
        {breakdown.productDiscountAmount > 0 && (
          <div className="flex justify-between text-emerald-300">
            <span>MRP savings (-{breakdown.productDiscountPercent}%)</span>
            <span>-{inr(breakdown.productDiscountAmount)}</span>
          </div>
        )}
        {breakdown.quantityDiscountAmount > 0 && (
          <div className="flex justify-between text-emerald-300">
            <span>Quantity offer</span>
            <span>-{inr(breakdown.quantityDiscountAmount)}</span>
          </div>
        )}
        {breakdown.extraDiscountAmount > 0 && (
          <div className="flex justify-between text-emerald-300">
            <span>{breakdown.extraDiscountLabel ?? "Extra discount"}</span>
            <span>-{inr(breakdown.extraDiscountAmount)}</span>
          </div>
        )}
      </div>
      <div className="my-3 h-px bg-white/10" />
      <div className="flex justify-between font-semibold text-gold">
        <span>Total payable</span>
        <span>{inr(breakdown.totalPayable)}</span>
      </div>
      {breakdown.lineMrp > breakdown.totalPayable && (
        <p className="mt-1 text-xs text-ivory/45 line-through">MRP total: {inr(breakdown.lineMrp)}</p>
      )}
    </div>
  );
}
