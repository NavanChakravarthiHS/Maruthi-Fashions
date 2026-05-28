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
  price: number;
  mrp: number;
  image: string;
  badge?: "New" | "Trending" | "Limited";
};

export const products: Product[] = [
  { id: "p1", name: "Atelier Drop-Shoulder Tee", category: "oversized-tees", price: 1499, mrp: 2499, image: p1, badge: "Trending" },
  { id: "p2", name: "Silk Noir Camp Shirt", category: "premium-shirts", price: 2999, mrp: 4499, image: p2, badge: "New" },
  { id: "p3", name: "Onyx Slim Denim", category: "denim", price: 2799, mrp: 3999, image: p3 },
  { id: "p4", name: "Heritage Heavy Hoodie", category: "hoodies", price: 3499, mrp: 4999, image: p4, badge: "Trending" },
  { id: "p5", name: "Maharaja Bandhgala", category: "ethnic", price: 8999, mrp: 12999, image: p5, badge: "Limited" },
  { id: "p6", name: "Tan Leather Bifold", category: "accessories", price: 1899, mrp: 2799, image: p6 },
  { id: "p7", name: "Olive Linen Overshirt", category: "premium-shirts", price: 2499, mrp: 3499, image: p7, badge: "New" },
  { id: "p8", name: "Noir Chelsea Boots", category: "accessories", price: 5499, mrp: 7999, image: p8 },
  { id: "p9", name: "Carbon Oversized Tee", category: "oversized-tees", price: 1299, mrp: 1999, image: catTees },
  { id: "p10", name: "Pearl Cuff Shirt", category: "premium-shirts", price: 2699, mrp: 3699, image: catShirts },
  { id: "p11", name: "Indigo Selvedge Jean", category: "denim", price: 3299, mrp: 4599, image: catDenim },
  { id: "p12", name: "Midnight Hood", category: "hoodies", price: 2999, mrp: 4199, image: catHoodies, badge: "New" },
  { id: "p13", name: "Ivory Zari Sherwani", category: "ethnic", price: 11999, mrp: 16999, image: catEthnic, badge: "Limited" },
  { id: "p14", name: "Gilded Timepiece", category: "accessories", price: 7499, mrp: 9999, image: catAccessories, badge: "Trending" },
  { id: "p15", name: "Stone Drop Tee", category: "oversized-tees", price: 1399, mrp: 2199, image: p1 },
  { id: "p16", name: "Charcoal Wool Overshirt", category: "premium-shirts", price: 3899, mrp: 5499, image: p7 },
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
