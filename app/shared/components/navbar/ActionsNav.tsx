'use client';

import { ShoppingBag } from 'lucide-react';
import { Button } from '../ui';
import { useEffect, useState } from 'react';

function ActionsNav(): JSX.Element {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <></>;

  return (
    <div className='ml-auto flex items-center gap-x-4'>
      <Button className='flex items-center rounded-full bg-black' type='button' variant='default'>
        <ShoppingBag size={20} color='white' />
        <span className='ml-2 text-sm font-medium text-white'>0</span>
      </Button>
    </div>
  );
}
export default ActionsNav;
