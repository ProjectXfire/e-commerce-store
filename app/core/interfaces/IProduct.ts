import { ICategory } from './ICategory';

export interface IProduct {
  id: string;
  name: string;
  price: string;
  isFeatured: boolean;
  isArchived: boolean;
  category: ICategory;
  size: ISize;
  color: IColor;
  images: IImage[];
}

interface ISize {
  id: string;
  name: string;
  value: string;
}

interface IColor {
  id: string;
  name: string;
  value: string;
}

export interface IImage {
  id: string;
  url: string;
}
