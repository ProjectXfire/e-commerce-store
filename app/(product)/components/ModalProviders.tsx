'use client';

import { useEffect, useState } from 'react';
import PreviewModal from './PreviewModal';

function ModalProviders(): JSX.Element {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <></>;

  return (
    <>
      <PreviewModal />
    </>
  );
}
export default ModalProviders;
