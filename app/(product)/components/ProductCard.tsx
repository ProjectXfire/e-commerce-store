'use client';

import NextImage from 'next/image';
import { type MouseEventHandler } from 'react';
import { useRouter } from 'next/navigation';
import { Expand, ShoppingCart } from 'lucide-react';
import { usePreviewModal } from '../states';
import { type IProduct } from '@/app/core/interfaces';
import { Button, Currency } from '@/app/shared/components/ui';
import { useCart } from '@/app/core/states';

interface Props {
  data: IProduct;
}

function ProductCard({ data }: Props): JSX.Element {
  const router = useRouter();
  const { addItem } = useCart();
  const { opening } = usePreviewModal();

  const handleClick = (): void => {
    router.push(`/product/${data.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (e): void => {
    e.stopPropagation();
    opening(data);
  };

  const addToCart: MouseEventHandler<HTMLButtonElement> = (e): void => {
    e.stopPropagation();
    addItem(data);
  };

  return (
    <article
      onClick={handleClick}
      className='bg-white group cursor-pointer rounded-xl border p-3 space-y-4'
    >
      <div className='aspect-square rounded-xl bg-gray-100 relative overflow-hidden'>
        <NextImage className='object-cover' fill src={data.images[0].url} alt={data.name} />
        <div className='opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5'>
          <div className='flex gap-x-6 justify-center'>
            <Button
              type='button'
              className='bg-white rounded-full p-[0px] w-10'
              onClick={onPreview}
            >
              <Expand className='text-gray-600' size={20} />
            </Button>
            <Button
              type='button'
              className='bg-white rounded-full p-[0px] w-10'
              onClick={addToCart}
            >
              <ShoppingCart className='text-gray-600' size={20} />
            </Button>
          </div>
        </div>
      </div>
      <div>
        <p className='font-semibold text-lg'>{data.name}</p>
        <p className='text-sm text-gray-500'>{data.category.name}</p>
      </div>
      <div className='flex items-center justify-between'>
        <Currency value={data.price} />
      </div>
    </article>
  );
}
export default ProductCard;
