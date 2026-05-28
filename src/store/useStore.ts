import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product, ProductSize } from "@/data/site";

type CartItem = {
  productId: string;
  quantity: number;
  size: ProductSize;
  color: string;
};

type UserProfile = {
  name: string;
  email: string;
};

type AppStore = {
  cart: CartItem[];
  wishlist: string[];
  recentlyViewed: string[];
  user: UserProfile | null;
  darkMode: boolean;
  couponCode: string;
  setCouponCode: (code: string) => void;
  addToCart: (payload: CartItem) => void;
  updateCartQuantity: (productId: string, size: string, color: string, quantity: number) => void;
  removeFromCart: (productId: string, size: string, color: string) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  addRecentlyViewed: (productId: string) => void;
  login: (user: UserProfile) => void;
  logout: () => void;
  toggleDarkMode: () => void;
};

export const useStore = create<AppStore>()(
  persist(
    (set, get) => ({
      cart: [],
      wishlist: [],
      recentlyViewed: [],
      user: null,
      darkMode: true,
      couponCode: "",
      setCouponCode: (code) => set({ couponCode: code.trim().toUpperCase() }),
      addToCart: (payload) =>
        set((state) => {
          const existing = state.cart.find(
            (item) =>
              item.productId === payload.productId &&
              item.size === payload.size &&
              item.color === payload.color,
          );
          if (existing) {
            return {
              cart: state.cart.map((item) =>
                item === existing ? { ...item, quantity: item.quantity + payload.quantity } : item,
              ),
            };
          }
          return { cart: [...state.cart, payload] };
        }),
      updateCartQuantity: (productId, size, color, quantity) =>
        set((state) => ({
          cart: state.cart
            .map((item) =>
              item.productId === productId && item.size === size && item.color === color
                ? { ...item, quantity: Math.max(1, quantity) }
                : item,
            )
            .filter((item) => item.quantity > 0),
        })),
      removeFromCart: (productId, size, color) =>
        set((state) => ({
          cart: state.cart.filter(
            (item) => !(item.productId === productId && item.size === size && item.color === color),
          ),
        })),
      clearCart: () => set({ cart: [] }),
      toggleWishlist: (productId) =>
        set((state) => ({
          wishlist: state.wishlist.includes(productId)
            ? state.wishlist.filter((id) => id !== productId)
            : [...state.wishlist, productId],
        })),
      addRecentlyViewed: (productId) =>
        set((state) => ({
          recentlyViewed: [productId, ...state.recentlyViewed.filter((id) => id !== productId)].slice(0, 8),
        })),
      login: (user) => set({ user }),
      logout: () => set({ user: null }),
      toggleDarkMode: () => set({ darkMode: !get().darkMode }),
    }),
    { name: "maruthi-fashion-store" },
  ),
);

export const getCartTotals = (products: Product[], cart: CartItem[], couponCode: string) => {
  const subtotal = cart.reduce((acc, item) => {
    const product = products.find((p) => p.id === item.productId);
    if (!product) {
      return acc;
    }
    return acc + product.price * item.quantity;
  }, 0);

  const shipping = subtotal > 2999 || subtotal === 0 ? 0 : 99;
  const couponDiscount = couponCode === "LUXE10" ? subtotal * 0.1 : couponCode === "FIRST15" ? subtotal * 0.15 : 0;
  const total = Math.max(0, subtotal + shipping - couponDiscount);

  return { subtotal, shipping, couponDiscount, total };
};

