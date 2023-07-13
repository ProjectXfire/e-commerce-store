import { ReactNode } from 'react';

interface Props {
  children: ReactNode | ReactNode[];
}

function Container({ children }: Props): JSX.Element {
  return <div className='mx-auto max-w-7xl'>{children}</div>;
}
export default Container;
