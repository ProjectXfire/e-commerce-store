import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import toast from 'react-hot-toast';
import { type IProduct } from '@/app/core/interfaces';

interface ICartStore {
  items: IProduct[];
  addItem: (data: IProduct) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

export const useCart = create(
  persist<ICartStore>(
    (set, get) => ({
      items: [],
      addItem: (data) => {
        const currentItems = get().items;
        const existItem = currentItems.some((p) => p.id === data.id);
        if (existItem) return toast('Item already in cart');
        set({ items: [...get().items, data] });
        toast.success('Item added to cart');
      },
      removeItem: (id) => {
        const updateditems = get().items.filter((p) => p.id !== id);
        set({ items: updateditems });
        toast.success('Item removed from the cart');
      },
      removeAll: () => set({ items: [] })
    }),
    { name: 'cart-storage', storage: createJSONStorage(() => localStorage) }
  )
);
