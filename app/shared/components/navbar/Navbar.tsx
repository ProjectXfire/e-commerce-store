import NextLink from 'next/link';
import { getCategories } from '../../services';
import { Container } from '../ui';
import MainNav from './MainNav';
import ActionsNav from './ActionsNav';

async function Navbar(): Promise<JSX.Element> {
  const { data } = await getCategories();

  return (
    <nav className='border-b'>
      <Container>
        <div className='relative px-4 sm:px-6 lg:px-8 flex items-center h-16'>
          <NextLink className='ml-4 flex lg:ml-0 gap-x-2' href='/'>
            <p className='font-bold text-xl'>Store</p>
          </NextLink>
          <MainNav data={data} />
          <ActionsNav />
        </div>
      </Container>
    </nav>
  );
}
export default Navbar;
