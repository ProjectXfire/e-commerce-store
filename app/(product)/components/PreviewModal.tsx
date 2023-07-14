'use client';

import { Modal } from '@/app/shared/components/ui';
import { usePreviewModal } from '../states';
import Gallery from './Gallery';
import Info from './Info';

function PreviewModal(): JSX.Element {
  const { isOpen, opening, closing, data } = usePreviewModal();

  if (!data) return <></>;

  return (
    <Modal open={isOpen} onClose={closing}>
      <div className='grid w-full grid-cols-1 items-center gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8'>
        <div className='sm:col-span-4 lg:col-span-5'>
          <Gallery images={data.images} />
        </div>
        <div className='sm:col-span-8 lg:col-span-7'>
          <Info data={data} />
        </div>
      </div>
    </Modal>
  );
}

export default PreviewModal;
