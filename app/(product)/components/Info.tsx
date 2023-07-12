'use client';

import { ShoppingCart } from 'lucide-react';
import { type IProduct } from '@/app/core/interfaces';
import { Button, Currency } from '@/app/shared/components/ui';

interface Props {
  data: IProduct;
}

function Info({ data }: Props): JSX.Element {
  return (
    <div>
      <h1 className='text-3xl font-bold text-gray-900'>{data.name}</h1>
      <div className='mt-3 flex items-end justify-between'>
        <p className='text-2xl text-gray-900'>
          <Currency value={data.price} />
        </p>
      </div>
      <hr className='my-4' />
      <div className='flex flex-col gap-y-2'>
        <div className='flex items-center gap-x-4'>
          <h3 className='font-semibold text-black'>Size:</h3>
          <div>{data.size.name}</div>
        </div>
        <div className='flex items-center gap-x-4'>
          <h3 className='font-semibold text-black'>Color:</h3>
          <div
            className='h-6 w-6 rounded-full border border-gray-600'
            style={{ backgroundColor: data.color.value }}
          />
        </div>
      </div>
      <div className='mt-10 flex items-center gap-x-3'>
        <Button type='button' className='flex items-center gap-2 rounded-lg'>
          Add to cart <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
}
export default Info;
