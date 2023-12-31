import { Container } from '@/app/shared/components/ui';
import { Cart, Summary } from '../../components';

function CartPage() {
  return (
    <Container>
      <section className='px-4 py-16 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-bold text-black'>Shopping Cart</h1>
        <div className='mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12'>
          <div className='lg:col-span-7'>
            <Cart />
          </div>
          <Summary />
        </div>
      </section>
    </Container>
  );
}
export default CartPage;
