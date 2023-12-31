'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useCart } from '@/app/core/states';
import { Button, Currency } from '@/app/shared/components/ui';
import { checkout } from '../services';

function Summary(): JSX.Element {
  const searchParams = useSearchParams();
  const { items, removeAll } = useCart();
  const totalPrice = items.reduce((acc, cv) => acc + +cv.price, 0);

  const onCheckout = async (): Promise<void> => {
    const ids = items.map((i) => i.id);
    const { data, errorMessage } = await checkout(ids);
    if (errorMessage) {
      toast.error(errorMessage);
      return;
    }
    window.location = data as any;
  };

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Payment completed');
      removeAll();
    }
    if (searchParams.get('canceled')) {
      toast.error('Something went wrong!');
    }
  }, [searchParams, removeAll]);

  return (
    <div className='mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'>
      <h2 className='text-lg font-medium text-gray-900'>Order Summary</h2>
      <div className='mt-6 space-y-4'>
        <div className='flex items-center justify-between border-t border-gray-200 pt-4'>
          <div className='text-base font-medium text-gray-900'>Order Total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button className='w-full mt-6' onClick={onCheckout}>
        Checkout
      </Button>
    </div>
  );
}
export default Summary;
