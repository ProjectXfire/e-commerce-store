import { create } from 'zustand';
import { type IProduct } from '@/app/core/interfaces';
import { type IModal } from '@/app/shared/interfaces';

interface IModalStore extends IModal<IProduct> {
  data?: IProduct;
}

export const usePreviewModal = create<IModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  opening: (data) => set({ data, isOpen: true }),
  closing: () => set({ data: undefined, isOpen: false })
}));
