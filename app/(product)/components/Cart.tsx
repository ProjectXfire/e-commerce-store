'use client';

import { useCart } from '@/app/core/states';
import CartItem from './CartItem';
import { useEffect, useState } from 'react';

function Cart(): JSX.Element {
  const { items } = useCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <></>;

  return (
    <>
      {items.length === 0 ? (
        <p className=' text-neutral-500'>No items added to the cart</p>
      ) : (
        <ul>
          {items.map((i) => (
            <CartItem key={i.id} data={i} />
          ))}
        </ul>
      )}
    </>
  );
}
export default Cart;
