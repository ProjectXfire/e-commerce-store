'use client';

import NextImage from 'next/image';
import { type IImage } from '@/app/core/interfaces';
import { cn } from '@/lib/utils';
import { Tab } from '@headlessui/react';

interface Props {
  image: IImage;
}

function GalleryTab({ image }: Props): JSX.Element {
  return (
    <Tab className='relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white'>
      {({ selected }) => (
        <div>
          <span className='absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md'>
            <NextImage className='object-cover object-center' fill src={image.url} alt='image' />
          </span>
          <span
            className={cn(
              'absolute inset-0 rounded-md ring-2 ring-offset-2',
              selected ? 'ring-black' : 'ring-transparent'
            )}
          />
        </div>
      )}
    </Tab>
  );
}
export default GalleryTab;
