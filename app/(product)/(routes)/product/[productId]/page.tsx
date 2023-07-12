import { getProduct, getProducts } from '@/app/(product)/services';
import { type IParams } from '@/app/shared/interfaces';
import { Container } from '@/app/shared/components/ui';
import { Gallery, Info, Products } from '@/app/(product)/components';

interface Props {
  params: IParams;
}

async function ProductPage({ params }: Props): Promise<JSX.Element> {
  const { data: product } = await getProduct(params.productId!);
  const { data: products } = await getProducts({ categoryId: product?.category.id });

  if (!product) return <></>;

  return (
    <Container>
      <section className='px-4 py-10 sm:px-6 lg:px-8'>
        <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
          <Gallery images={product.images} />
          <div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
            <Info data={product} />
          </div>
        </div>
        <hr className='my-10' />
        <Products title='Related products' items={products} />
      </section>
    </Container>
  );
}
export default ProductPage;
