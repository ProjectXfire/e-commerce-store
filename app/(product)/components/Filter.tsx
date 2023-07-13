'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import qs from 'query-string';
import { cn } from '@/lib/utils';
import type { IColor, ISize } from '@/app/core/interfaces';
import { Button } from '@/app/shared/components/ui';

interface Props {
  valuekey: string;
  name: string;
  data: (ISize | IColor)[];
}

function Filter({ valuekey, name, data }: Props): JSX.Element {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedValue = searchParams.get(valuekey);

  const onHandleFilter = (id: string): void => {
    const current = qs.parse(searchParams.toString());
    const query = {
      ...current,
      [valuekey]: id
    };
    if (current[valuekey] === id) {
      query[valuekey] = null;
    }
    const url = qs.stringifyUrl({ url: window.location.href, query }, { skipNull: true });
    router.push(url);
  };

  return (
    <div className='mb-8'>
      <h3 className='text-lg font-semibold'>{name}</h3>
      <hr className='my-4' />
      <div className='flex flex-wrap gap-2'>
        {data.map((filter) => (
          <div key={filter.id} className='flex items-center'>
            <Button
              type='button'
              className={cn(
                'rounded-full',
                selectedValue === filter.id && 'bg-slate-600 text-white'
              )}
              onClick={() => onHandleFilter(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Filter;
