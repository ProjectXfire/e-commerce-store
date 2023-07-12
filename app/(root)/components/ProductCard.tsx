'use client';

import NextImage from 'next/image';
import { Expand, ShoppingCart } from 'lucide-react';
import { type IProduct } from '@/app/core/interfaces';
import { Button, Currency } from '@/app/shared/components/ui';

interface Props {
  data: IProduct;
}

function ProductCard({ data }: Props): JSX.Element {
  return (
    <article className='bg-white group cursor-pointer rounded-xl border p-3 space-y-4'>
      <div className='aspect-square rounded-xl bg-gray-100 relative overflow-hidden'>
        <NextImage className='object-cover' fill src={data.images[0].url} alt={data.name} />
        <div className='opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5'>
          <div className='flex gap-x-6 justify-center'>
            <Button type='button' className='bg-white rounded-full p-[0px] w-10'>
              <Expand className='text-gray-600' size={20} />
            </Button>
            <Button type='button' className='bg-white rounded-full p-[0px] w-10'>
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
