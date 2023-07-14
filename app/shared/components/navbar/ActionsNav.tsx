'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/app/core/states';
import { Button } from '../ui';

function ActionsNav(): JSX.Element {
  const { items } = useCart();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <></>;

  return (
    <div className='ml-auto flex items-center gap-x-4'>
      <Button
        className='flex items-center rounded-full bg-black'
        type='button'
        variant='default'
        onClick={() => router.push('/cart')}
      >
        <ShoppingBag size={20} color='white' />
        <span className='ml-2 text-sm font-medium text-white'>{items.length}</span>
      </Button>
    </div>
  );
}
export default ActionsNav;
