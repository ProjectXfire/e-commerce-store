'use client';

import NextImage from 'next/image';
import { Tab } from '@headlessui/react';
import { type IImage } from '@/app/core/interfaces';
import GalleryTab from './GalleryTab';

interface Props {
  images: IImage[];
}

function Gallery({ images }: Props): JSX.Element {
  return (
    <Tab.Group as='div' className='flex flex-col-reverse'>
      <div className='mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none'>
        <Tab.List className='grid grid-cols-4 gap-6'>
          {images.map((img) => (
            <GalleryTab key={img.id} image={img} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className='aspect-square w-full'>
        {images.map((img) => (
          <Tab.Panel key={img.id}>
            <div className='aspect-square relative h-full w-full sm:rounded-lg overflow-hidden'>
              <NextImage fill src={img.url} alt='image' />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
export default Gallery;
