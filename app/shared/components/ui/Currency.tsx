'use client';

import { useEffect, useState } from 'react';
import { currencyFormatter } from '../../utils';

interface Props {
  value: string | number;
}

function Currency({ value }: Props): JSX.Element {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <></>;

  return <div className='font-semibold'>{currencyFormatter.format(Number(value))}</div>;
}
export default Currency;
