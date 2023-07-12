import { getBillboard, getProducts } from '../services';
import { Container } from '@/app/shared/components/ui';
import { Billboard, Products } from '../components';

export const revalidate = 0;

async function HomePage(): Promise<JSX.Element> {
  const { data: billboard } = await getBillboard('842fc763-9c51-45ba-806f-20683a814f2b');
  const { data: products } = await getProducts();

  if (!billboard) return <></>;

  return (
    <Container>
      <section className='space-y-10 pb-10'>
        <Billboard data={billboard} />
      </section>
      <section className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 pb-10'>
        <Products title='Featured Products' items={products} />
      </section>
    </Container>
  );
}
export default HomePage;
