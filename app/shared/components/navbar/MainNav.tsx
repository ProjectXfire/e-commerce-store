'use client';

import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import { cn } from '@/lib/utils';
import { ICategory } from '@/app/core/interfaces';

interface Props {
  data: ICategory[];
}

function MainNav({ data }: Props): JSX.Element {
  const pathname = usePathname();
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`
  }));

  return (
    <div className='mx-6 items-center space-x-4 lg:space-x-6'>
      {routes.map((r) => (
        <NextLink
          className={cn(
            'text-sm font-medium transition-colors hover:text-black',
            r.active ? 'text-black' : 'text-neutral-500'
          )}
          key={r.label}
          href={r.href}
        >
          {r.label}
        </NextLink>
      ))}
    </div>
  );
}
export default MainNav;
