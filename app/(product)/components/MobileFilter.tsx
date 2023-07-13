'use client';

import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { Dialog } from '@headlessui/react';
import type { IColor, ISize } from '@/app/core/interfaces';
import { Button } from '@/app/shared/components/ui';
import Filter from './Filter';

interface Props {
  colors: IColor[];
  sizes: ISize[];
}

function MobileFilter({ colors, sizes }: Props): JSX.Element {
  const [open, setOpen] = useState(false);

  const toggleOpen = (): void => {
    setOpen((cv) => !cv);
  };

  return (
    <>
      <Button className='flex items-center gap-x-2 lg:hidden' onClick={toggleOpen}>
        Filters <Plus size={20} />
      </Button>
      <Dialog className='relative z-40 lh:hidden' as='div' open={open} onClose={() => toggleOpen()}>
        <div className='fixed inset-0 bg-black bg-opacity-25' />
        <div className='fixed inset-0 z-40 flex'>
          <Dialog.Panel className='relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl'>
            <div className='flex items-center justify-end px-2'>
              <Button className='rounded-full px-1 p-0 h-6 w-6' onClick={toggleOpen}>
                <X size={15} />
              </Button>
            </div>
            <div className='p-4'>
              <Filter valuekey='sizeId' name='Sizes' data={sizes} />
              <Filter valuekey='colorId' name='Colors' data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
export default MobileFilter;
