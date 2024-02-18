import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartStoreInterface {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  incQuantity: (itemId: string) => void;
  decQuantity: (itemId: string) => void;
  emptyCart: () => void;
}

export const useCartStore = create<CartStoreInterface>()(
  persist(
    (set) => ({
      items: [],
      isOpen: false,
      addToCart: (item) =>
        set(({ items }) => {
          const isPresent = items.find((i) => i.id === item.id);
          if (!isPresent) {
            return { items: [...items, item] };
          }
          const updatedItem = items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          );

          return { items: updatedItem };
        }),
      removeItem: (id) =>
        set(({ items }) => ({ items: items.filter((i) => i.id !== id) })),
      incQuantity: (id) =>
        set(({ items }) => {
          const updatedItem = items.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity + 1 } : i
          );

          return { items: updatedItem };
        }),
      decQuantity: (id) =>
        set(({ items }) => {
          const updatedItem = items.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity - 1 } : i
          );
          return { items: updatedItem };
        }),
      emptyCart: () => set(() => ({ items: [] })),
    }),
    {
      name: "cart-sotre",
    }
  )
);

interface QuantityStoreInterface {
  quantity: number;
  incQuantity: () => void;
  decQuantity: () => void;
}

export const useQuantigyStore = create<QuantityStoreInterface>((set) => ({
  quantity: 1,
  incQuantity: () => set((state) => ({ quantity: state.quantity + 1 })),
  decQuantity: () => set((state) => ({ quantity: state.quantity - 1 })),
}));
