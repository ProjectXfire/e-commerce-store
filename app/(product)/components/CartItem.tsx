'use client';

import NextImage from 'next/image';
import { X } from 'lucide-react';
import { type IProduct } from '@/app/core/interfaces';
import { Button, Currency } from '@/app/shared/components/ui';
import { useCart } from '@/app/core/states';

interface Props {
  data: IProduct;
}

function CartItem({ data }: Props): JSX.Element {
  const { removeItem } = useCart();

  const onRemoveItem = (): void => {
    removeItem(data.id);
  };

  return (
    <li className='flex py-6 border-b'>
      <div className='relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48'>
        <NextImage
          className='object-cover object-center'
          fill
          src={data.images[0].url}
          alt={data.name}
        />
      </div>
      <div className='relative ml-4 flex flex-1 flex-col justify-between sm:ml-6'>
        <div className='absolute z-10 right-0 top-0'>
          <Button className='p-0 h-7 w-7 rounded-full' variant='outline' onClick={onRemoveItem}>
            <X size={15} />
          </Button>
        </div>
        <div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0'>
          <div className='flex justify-between'>
            <p className='text-lg font-semibold text-black'>{data.name}</p>
          </div>
          <div className='mt-1 flex text-sm gap-2 items-center'>
            <p className='text-gray-500 flex items-center gap-1'>
              {data.color.name}{' '}
              <span
                className='h-4 w-4 rounded-full'
                style={{ backgroundColor: data.color.value }}
              />
            </p>
            <p>{data.size.name}</p>
          </div>
          <Currency value={data.price} />
        </div>
      </div>
    </li>
  );
}
export default CartItem;
