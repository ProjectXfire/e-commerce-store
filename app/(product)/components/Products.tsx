import { type IProduct } from '@/app/core/interfaces';
import { NoResult } from '@/app/shared/components/ui';
import ProductCard from './ProductCard';

interface Props {
  title: string;
  items: IProduct[];
}

function Products({ title, items }: Props): JSX.Element {
  return (
    <div className='space-y-4'>
      <h3 className='font-bold text-3xl'>{title}</h3>
      {items.length === 0 ? (
        <NoResult />
      ) : (
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {items.map((i) => (
            <ProductCard key={i.id} data={i} />
          ))}
        </ul>
      )}
    </div>
  );
}
export default Products;
