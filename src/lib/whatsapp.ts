import { contact } from "@/data/site";
import { type BookingPriceBreakdown, formatBookingPriceLines } from "@/lib/pricing";

export type WhatsAppBookingDetails = {
  productName: string;
  productImageUrl?: string;
  size: string;
  color?: string;
  pricing: BookingPriceBreakdown;
  customerMessage?: string;
};

/** Converts Vite asset paths or relative URLs into an absolute link for WhatsApp. */
export function toAbsoluteImageUrl(image: string): string {
  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }
  if (typeof window === "undefined") {
    return image.startsWith("/") ? image : `/${image}`;
  }
  const path = image.startsWith("/") ? image : `/${image}`;
  return `${window.location.origin}${path}`;
}

export function buildWhatsAppBookingMessage(details: WhatsAppBookingDetails): string {
  const lines = [
    "Hello, I want to book this product.",
    "",
    `Product: ${details.productName}`,
    `Size: ${details.size}`,
  ];

  if (details.color) {
    lines.push(`Color: ${details.color}`);
  }

  lines.push("", ...formatBookingPriceLines(details.pricing));

  if (details.productImageUrl) {
    lines.push("", "Product Image:", toAbsoluteImageUrl(details.productImageUrl));
  }

  lines.push("", details.customerMessage ?? "Please confirm availability.");

  return lines.join("\n");
}

export function buildWhatsAppBookingUrl(details: WhatsAppBookingDetails): string {
  const text = buildWhatsAppBookingMessage(details);
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
