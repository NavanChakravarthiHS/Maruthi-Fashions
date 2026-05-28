export type ProductPricingInput = {
  price: number;
  mrp: number;
  offers: string[];
  category?: string;
};

export type BookingPriceBreakdown = {
  quantity: number;
  unitPrice: number;
  unitMrp: number;
  lineMrp: number;
  linePrice: number;
  productDiscountPercent: number;
  productDiscountAmount: number;
  quantityDiscountAmount: number;
  quantityDiscountLabel?: string;
  extraDiscountAmount: number;
  extraDiscountLabel?: string;
  totalPayable: number;
  appliedOffers: string[];
};

const formatInr = (amount: number) => `₹${Math.round(amount).toLocaleString("en-IN")}`;

export function getProductDiscountPercent(mrp: number, price: number): number {
  if (mrp <= 0 || price >= mrp) {
    return 0;
  }
  return Math.round(((mrp - price) / mrp) * 100);
}

function parseFixedSaveOffer(
  offers: string[],
  quantity: number,
): { amount: number; label: string } | null {
  for (const offer of offers) {
    const saveMatch = offer.match(/save\s*₹\s*([\d,]+)/i);
    if (!saveMatch) {
      continue;
    }
    const amount = parseInt(saveMatch[1].replace(/,/g, ""), 10);
    const buyMatch = offer.match(/buy\s+(?:any\s+)?(\d+)/i);
    const minQty = buyMatch ? parseInt(buyMatch[1], 10) : offer.toLowerCase().includes("bundle") ? 2 : 1;

    if (quantity >= minQty) {
      return { amount, label: offer };
    }
  }
  return null;
}

function parsePrepaidPercentOffer(
  offers: string[],
  baseAmount: number,
): { amount: number; percent: number; label: string } | null {
  for (const offer of offers) {
    if (/code\s+/i.test(offer)) {
      continue;
    }
    const match = offer.match(/(\d+)%\s*off/i);
    if (match && /prepaid|upi|whatsapp/i.test(offer)) {
      const percent = parseInt(match[1], 10);
      return {
        percent,
        amount: Math.round((baseAmount * percent) / 100),
        label: offer,
      };
    }
  }
  return null;
}

/** WhatsApp bookings are treated as prepaid — extra % offers apply on top of sale price. */
export function calculateBookingPrice(
  product: ProductPricingInput,
  quantity: number,
): BookingPriceBreakdown {
  const qty = Math.max(1, quantity);
  const unitPrice = product.price;
  const unitMrp = product.mrp;
  const lineMrp = unitMrp * qty;
  const linePrice = unitPrice * qty;
  const productDiscountPercent = getProductDiscountPercent(unitMrp, unitPrice);
  const productDiscountAmount = Math.max(0, lineMrp - linePrice);

  const appliedOffers: string[] = [];
  let quantityDiscountAmount = 0;
  let quantityDiscountLabel: string | undefined;

  const quantityOffer = parseFixedSaveOffer(product.offers, qty);
  if (quantityOffer) {
    quantityDiscountAmount = quantityOffer.amount;
    quantityDiscountLabel = quantityOffer.label;
    appliedOffers.push(quantityOffer.label);
  }

  const afterQuantity = Math.max(0, linePrice - quantityDiscountAmount);

  let extraDiscountAmount = 0;
  let extraDiscountLabel: string | undefined;

  const prepaidOffer = parsePrepaidPercentOffer(product.offers, afterQuantity);
  if (prepaidOffer) {
    extraDiscountAmount = prepaidOffer.amount;
    extraDiscountLabel = `${prepaidOffer.percent}% prepaid discount`;
    appliedOffers.push(prepaidOffer.label);
  }

  const totalPayable = Math.max(0, afterQuantity - extraDiscountAmount);

  return {
    quantity: qty,
    unitPrice,
    unitMrp,
    lineMrp,
    linePrice,
    productDiscountPercent,
    productDiscountAmount,
    quantityDiscountAmount,
    quantityDiscountLabel,
    extraDiscountAmount,
    extraDiscountLabel,
    totalPayable,
    appliedOffers,
  };
}

export function formatBookingPriceLines(breakdown: BookingPriceBreakdown): string[] {
  const lines = [
    `Quantity: ${breakdown.quantity}`,
    `Unit Price: ${formatInr(breakdown.unitPrice)}`,
    `MRP (per unit): ${formatInr(breakdown.unitMrp)}`,
    "",
    `Subtotal (MRP): ${formatInr(breakdown.lineMrp)}`,
  ];

  if (breakdown.productDiscountAmount > 0) {
    lines.push(
      `Product Discount (-${breakdown.productDiscountPercent}%): -${formatInr(breakdown.productDiscountAmount)}`,
      `Sale Subtotal: ${formatInr(breakdown.linePrice)}`,
    );
  } else {
    lines.push(`Sale Subtotal: ${formatInr(breakdown.linePrice)}`);
  }

  if (breakdown.quantityDiscountAmount > 0) {
    lines.push(`Quantity Offer: -${formatInr(breakdown.quantityDiscountAmount)}`);
  }

  if (breakdown.extraDiscountAmount > 0) {
    lines.push(`${breakdown.extraDiscountLabel ?? "Extra Discount"}: -${formatInr(breakdown.extraDiscountAmount)}`);
  }

  lines.push("", `Total Payable: ${formatInr(breakdown.totalPayable)}`);

  if (breakdown.appliedOffers.length > 0) {
    lines.push("", "Applied Offers:");
    breakdown.appliedOffers.forEach((offer) => lines.push(`• ${offer}`));
  }

  return lines;
}
