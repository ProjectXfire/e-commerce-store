import { getCategory, getColors, getProducts, getSizes } from '@/app/(product)/services';
import { type ISearchParams, type IParams } from '@/app/shared/interfaces';
import { Container, NoResult } from '@/app/shared/components/ui';
import { Billboard, Filter, MobileFilter, ProductCard } from '@/app/(product)/components';

export const revalidate = 0;

interface Props {
  params: IParams;
  searchParams: ISearchParams;
}

async function CategoryId({ params, searchParams }: Props): Promise<JSX.Element> {
  const { data: products } = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId
  });
  const { data: sizes } = await getSizes();
  const { data: colors } = await getColors();
  const { data: category } = await getCategory(params.categoryId!);

  if (!category) return <></>;

  return (
    <Container>
      <Billboard data={category.billboard} />
      <section className='px-4 sm:px-6 lg:px-8 pb-24'>
        <div className='lg:grid lg:grid-cols-5 lg:gap-x-8'>
          <MobileFilter colors={colors} sizes={sizes} />
          <div className='hidden lg:block'>
            <Filter valuekey='sizeId' name='Sizes' data={sizes} />
            <Filter valuekey='colorId' name='Colors' data={colors} />
          </div>
          <div className='mt-6 lg:col-span-4 lg:mt-0'>
            {products.length === 0 ? (
              <NoResult />
            ) : (
              <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {products.map((p) => (
                  <ProductCard key={p.id} data={p} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
    </Container>
  );
}
export default CategoryId;
