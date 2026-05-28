import heroImg from "@/assets/hero.jpg";
import catTees from "@/assets/cat-tees.jpg";
import catShirts from "@/assets/cat-shirts.jpg";
import catDenim from "@/assets/cat-denim.jpg";
import catHoodies from "@/assets/cat-hoodies.jpg";
import catEthnic from "@/assets/cat-ethnic.jpg";
import catAccessories from "@/assets/cat-accessories.jpg";
import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";
import p5 from "@/assets/product-5.jpg";
import p6 from "@/assets/product-6.jpg";
import p7 from "@/assets/product-7.jpg";
import p8 from "@/assets/product-8.jpg";
import look1 from "@/assets/look-1.jpg";
import look2 from "@/assets/look-2.jpg";
import look3 from "@/assets/look-3.jpg";
import ig1 from "@/assets/ig-1.jpg";
import ig2 from "@/assets/ig-2.jpg";
import ig3 from "@/assets/ig-3.jpg";
import ig4 from "@/assets/ig-4.jpg";
import ig5 from "@/assets/ig-5.jpg";
import ig6 from "@/assets/ig-6.jpg";
import aboutHero from "@/assets/about-hero.jpg";

export {
  heroImg, aboutHero,
  catTees, catShirts, catDenim, catHoodies, catEthnic, catAccessories,
  look1, look2, look3,
  ig1, ig2, ig3, ig4, ig5, ig6,
};

/** Update phoneDisplay and whatsappNumber here (WhatsApp: country code + number, digits only, e.g. 919876543210). */
export const contact = {
  phoneDisplay: "+91 63601 18735",
  whatsappNumber: "916360118735",
};

export const whatsappHref = `https://wa.me/${contact.whatsappNumber}`;

export const socialLinks = {
  instagram: "https://www.instagram.com/maruthi_fashion_mens/",
  facebook: "#",
  twitter: "#",
  youtube: "#",
} as const;

export const PRODUCT_SIZES = ["S", "M", "L", "XL", "XXL"] as const;
export type ProductSize = (typeof PRODUCT_SIZES)[number];

export type Category = {
  slug: string;
  name: string;
  count: number;
  image: string;
};

export const categories: Category[] = [
  { slug: "oversized-tees", name: "Oversized Tees", count: 42, image: catTees },
  { slug: "premium-shirts", name: "Premium Shirts", count: 36, image: catShirts },
  { slug: "denim", name: "Denim Collection", count: 28, image: catDenim },
  { slug: "hoodies", name: "Hoodies", count: 24, image: catHoodies },
  { slug: "ethnic", name: "Ethnic Wear", count: 18, image: catEthnic },
  { slug: "accessories", name: "Accessories", count: 31, image: catAccessories },
];

export type Product = {
  id: string;
  name: string;
  category: string;
  brand: string;
  description: string;
  specifications: string[];
  images: string[];
  colors: string[];
  sizes: ProductSize[];
  stock: number;
  offers: string[];
  rating: number;
  reviewsCount: number;
  price: number;
  mrp: number;
  image: string;
  badge?: "New" | "Trending" | "Limited";
};

export const products: Product[] = [
  {
    id: "p1",
    name: "Atelier Drop-Shoulder Tee",
    category: "oversized-tees",
    brand: "Maruthi Atelier",
    description: "An elevated oversized tee with a structured drape, clean neckline, and premium handfeel built for everyday luxury.",
    specifications: ["240 GSM combed cotton", "Drop shoulder fit", "Bio-wash finish", "Made in India"],
    images: [p1, catTees, p7, p2],
    colors: ["Onyx Black", "Stone Grey", "Ivory White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 5,
    offers: ["10% off on prepaid orders", "Buy 2 and get free shipping", "5% cashback on UPI payments"],
    rating: 4.7,
    reviewsCount: 128,
    price: 1499,
    mrp: 2499,
    image: p1,
    badge: "Trending",
  },
  {
    id: "p2",
    name: "Silk Noir Camp Shirt",
    category: "premium-shirts",
    brand: "Maruthi Signature",
    description: "A silk-touch camp collar shirt tailored with relaxed sophistication for evening outings and premium casual fits.",
    specifications: ["Silk blend weave", "Relaxed fit", "Camp collar", "Mother of pearl buttons"],
    images: [p2, catShirts, p7, p3],
    colors: ["Noir", "Olive", "Sand"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 9,
    offers: ["Flat 15% with code LUXE15", "Free premium gift wrap", "No cost EMI above ₹4,999"],
    rating: 4.8,
    reviewsCount: 86,
    price: 2999,
    mrp: 4499,
    image: p2,
    badge: "New",
  },
  {
    id: "p3",
    name: "Onyx Slim Denim",
    category: "denim",
    brand: "Maruthi Denim Works",
    description: "Streamlined slim denim crafted with stretch comfort and a deep onyx wash for all-day versatility.",
    specifications: ["11 oz stretch denim", "Slim taper fit", "Fade-resistant wash", "YKK zip"],
    images: [p3, catDenim, p1, p4],
    colors: ["Onyx", "Indigo", "Washed Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 14,
    offers: ["Extra 5% off on 2 denim pieces", "Free exchange in 7 days", "Instant bank discount up to ₹500"],
    rating: 4.6,
    reviewsCount: 64,
    price: 2799,
    mrp: 3999,
    image: p3,
  },
  {
    id: "p4",
    name: "Heritage Heavy Hoodie",
    category: "hoodies",
    brand: "Maruthi Street Luxe",
    description: "A heavyweight fleece hoodie with elevated detailing and a minimal silhouette inspired by premium streetwear.",
    specifications: ["420 GSM brushed fleece", "Double-lined hood", "Ribbed cuffs and hem", "Metal tip drawcords"],
    images: [p4, catHoodies, p1, p5],
    colors: ["Midnight", "Charcoal", "Sandstone"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 3,
    offers: ["Free shipping + COD", "Weekend flash deal 10% off", "Premium care guide included"],
    rating: 4.9,
    reviewsCount: 154,
    price: 3499,
    mrp: 4999,
    image: p4,
    badge: "Trending",
  },
  {
    id: "p5",
    name: "Maharaja Bandhgala",
    category: "ethnic",
    brand: "Maruthi Heritage",
    description: "A contemporary Bandhgala cut in rich suiting fabric, crafted for wedding celebrations and ceremonial evenings.",
    specifications: ["Italian blend suiting", "Structured shoulder", "Hand-finished piping", "Viscose lining"],
    images: [p5, catEthnic, p2, p8],
    colors: ["Royal Black", "Ivory", "Wine"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 2,
    offers: ["Complimentary alteration assistance", "Priority festive delivery", "Exchange available on size mismatch"],
    rating: 4.8,
    reviewsCount: 43,
    price: 8999,
    mrp: 12999,
    image: p5,
    badge: "Limited",
  },
  {
    id: "p6",
    name: "Tan Leather Bifold",
    category: "accessories",
    brand: "Maruthi Accessories",
    description: "Handcrafted bifold wallet with full-grain leather, precision stitching, and minimalist storage layout.",
    specifications: ["Full-grain leather", "6 card slots", "RFID safe", "Handcrafted edge paint"],
    images: [p6, catAccessories, p8, p2],
    colors: ["Tan", "Noir", "Chocolate"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 18,
    offers: ["Combo offer with belts", "5% prepaid discount", "Gift-ready packaging"],
    rating: 4.5,
    reviewsCount: 71,
    price: 1899,
    mrp: 2799,
    image: p6,
  },
  {
    id: "p7",
    name: "Olive Linen Overshirt",
    category: "premium-shirts",
    brand: "Maruthi Signature",
    description: "Breathable linen overshirt with a refined drape and understated texture designed for smart layering.",
    specifications: ["Premium linen blend", "Boxy overshirt fit", "Dual pocket front", "Soft enzyme wash"],
    images: [p7, catShirts, p2, p3],
    colors: ["Olive", "Stone", "Noir"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 7,
    offers: ["Flat ₹300 off above ₹2,999", "Free exchange on first order", "Loyalty points bonus"],
    rating: 4.7,
    reviewsCount: 97,
    price: 2499,
    mrp: 3499,
    image: p7,
    badge: "New",
  },
  {
    id: "p8",
    name: "Noir Chelsea Boots",
    category: "accessories",
    brand: "Maruthi Footwear",
    description: "Sleek Chelsea boots with polished uppers, elastic side panels, and a durable comfort sole for sharp styling.",
    specifications: ["Top-grain leather upper", "Cushioned insole", "TPR outsole", "Hand-polished finish"],
    images: [p8, catAccessories, p5, p3],
    colors: ["Noir", "Tan"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 4,
    offers: ["No cost EMI available", "Free premium shoe bag", "15-day returns"],
    rating: 4.6,
    reviewsCount: 52,
    price: 5499,
    mrp: 7999,
    image: p8,
  },
  {
    id: "p9",
    name: "Carbon Oversized Tee",
    category: "oversized-tees",
    brand: "Maruthi Atelier",
    description: "A monochrome oversized essential with premium fabric density and clean silhouette.",
    specifications: ["220 GSM cotton", "Relaxed fit", "Minimal seam finishing", "Colorfast dye"],
    images: [catTees, p1, p7, p2],
    colors: ["Carbon", "Off White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 12,
    offers: ["Buy any 2 tees, save ₹400", "Free shipping over ₹1,999", "UPI cashback"],
    rating: 4.4,
    reviewsCount: 38,
    price: 1299,
    mrp: 1999,
    image: catTees,
  },
  {
    id: "p10",
    name: "Pearl Cuff Shirt",
    category: "premium-shirts",
    brand: "Maruthi Signature",
    description: "Tailored formal shirt featuring contrast cuffs and refined finishing for evening and office wear.",
    specifications: ["Cotton sateen fabric", "Slim tailored fit", "Contrast cuff detail", "Wrinkle control finish"],
    images: [catShirts, p2, p7, p4],
    colors: ["Pearl White", "Powder Blue"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 11,
    offers: ["Flat 10% on formal edit", "Express delivery in metros", "Easy replacement"],
    rating: 4.5,
    reviewsCount: 41,
    price: 2699,
    mrp: 3699,
    image: catShirts,
  },
  {
    id: "p11",
    name: "Indigo Selvedge Jean",
    category: "denim",
    brand: "Maruthi Denim Works",
    description: "Premium selvedge denim with artisan-inspired detailing and comfortable stretch structure.",
    specifications: ["Selvedge weave", "Mid-rise", "Tapered leg", "Durable rivets"],
    images: [catDenim, p3, p1, p8],
    colors: ["Indigo", "Jet Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 8,
    offers: ["Combo savings on denim + shirts", "Free alteration guide", "7-day easy return"],
    rating: 4.6,
    reviewsCount: 33,
    price: 3299,
    mrp: 4599,
    image: catDenim,
  },
  {
    id: "p12",
    name: "Midnight Hood",
    category: "hoodies",
    brand: "Maruthi Street Luxe",
    description: "An all-season hoodie built with compact knit structure and premium comfort fit.",
    specifications: ["320 GSM fleece", "Kangaroo pocket", "Drop shoulder", "Anti-pilling finish"],
    images: [catHoodies, p4, p1, p2],
    colors: ["Midnight", "Graphite"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 6,
    offers: ["Flat ₹250 off", "Free shipping on prepaid", "Exclusive member pricing"],
    rating: 4.7,
    reviewsCount: 58,
    price: 2999,
    mrp: 4199,
    image: catHoodies,
    badge: "New",
  },
  {
    id: "p13",
    name: "Ivory Zari Sherwani",
    category: "ethnic",
    brand: "Maruthi Heritage",
    description: "Statement sherwani featuring subtle zari accents and handcrafted premium finishing.",
    specifications: ["Jacquard fabric", "Hand zardozi accents", "Structured shoulder", "Premium lining"],
    images: [catEthnic, p5, p2, p8],
    colors: ["Ivory", "Champagne"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 2,
    offers: ["Festive premium styling consult", "Priority shipping", "Easy size swap assistance"],
    rating: 4.9,
    reviewsCount: 22,
    price: 11999,
    mrp: 16999,
    image: catEthnic,
    badge: "Limited",
  },
  {
    id: "p14",
    name: "Gilded Timepiece",
    category: "accessories",
    brand: "Maruthi Accessories",
    description: "A classic minimal wristwatch with polished casework and understated luxury detailing.",
    specifications: ["Stainless steel case", "Japanese movement", "Scratch-resistant glass", "3 ATM water resistance"],
    images: [catAccessories, p6, p8, p3],
    colors: ["Gold Noir", "Silver Noir"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 16,
    offers: ["2-year warranty", "Free premium strap kit", "Pay later options"],
    rating: 4.5,
    reviewsCount: 65,
    price: 7499,
    mrp: 9999,
    image: catAccessories,
    badge: "Trending",
  },
  {
    id: "p15",
    name: "Stone Drop Tee",
    category: "oversized-tees",
    brand: "Maruthi Atelier",
    description: "A neutral-toned drop tee designed for elevated casual wardrobes with a soft premium touch.",
    specifications: ["230 GSM cotton", "Drop shoulder", "Pre-shrunk", "Ultra-soft wash"],
    images: [p1, catTees, p7, p2],
    colors: ["Stone", "Noir"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 10,
    offers: ["Bundle and save ₹500", "Free express shipping", "First-order 10% off"],
    rating: 4.3,
    reviewsCount: 47,
    price: 1399,
    mrp: 2199,
    image: p1,
  },
  {
    id: "p16",
    name: "Charcoal Wool Overshirt",
    category: "premium-shirts",
    brand: "Maruthi Signature",
    description: "Premium wool-blend overshirt with a structured fit and elevated detailing for winter layering.",
    specifications: ["Wool blend twill", "Relaxed structure", "Buttoned cuffs", "Premium lining details"],
    images: [p7, catShirts, p2, p4],
    colors: ["Charcoal", "Olive"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 5,
    offers: ["Seasonal 12% off", "Free insured shipping", "No-cost EMI above ₹3,000"],
    rating: 4.8,
    reviewsCount: 51,
    price: 3899,
    mrp: 5499,
    image: p7,
  },
];

export type Review = {
  id: string;
  name: string;
  city: string;
  rating: number;
  text: string;
};

export const reviews: Review[] = [
  { id: "r1", name: "Arjun Mehta", city: "Mumbai", rating: 5, text: "The fabric, the cut, the finish — Maruthi feels like a tailor I've known for years. Every piece earns its place in my wardrobe." },
  { id: "r2", name: "Vikram Iyer", city: "Bengaluru", rating: 5, text: "Wore the Maharaja Bandhgala to a reception. Three people asked where it was from before the night ended." },
  { id: "r3", name: "Rohan Kapoor", city: "Delhi", rating: 5, text: "Finally a luxury Indian label that gets restraint. Nothing shouts. Everything speaks." },
];

export const lookbook = [
  { src: look1, title: "Midnight Tailoring", caption: "FW '26 — The Marble Series" },
  { src: look2, title: "Heritage Reimagined", caption: "The Ivory Edit" },
  { src: look3, title: "Concrete Calm", caption: "Street Atelier" },
];

export const instagram = [ig1, ig2, ig3, ig4, ig5, ig6];
