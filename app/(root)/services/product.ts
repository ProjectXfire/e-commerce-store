import axios from 'axios';
import qs from 'query-string';
import { type IProduct } from '@/app/core/interfaces';
import { type IResponse } from '@/app/shared/interfaces';
import { handleError } from '@/app/shared/utils';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface IQuery {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

export async function getProducts(query?: IQuery): Promise<IResponse<IProduct[]>> {
  try {
    const url = qs.stringifyUrl({
      url: URL,
      query: {
        colorId: query?.colorId,
        categoryId: query?.categoryId,
        sizeId: query?.sizeId,
        isFeatured: query?.isFeatured
      }
    });
    const { data: resData } = await axios.get<IResponse<IProduct[]>>(url);
    const { data, message } = resData;
    return {
      data,
      errorMessage: null,
      message
    };
  } catch (error) {
    return {
      data: [],
      errorMessage: handleError(error),
      message: null
    };
  }
}
