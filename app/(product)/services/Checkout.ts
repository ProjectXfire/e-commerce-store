import axios from 'axios';
import { type IResponse } from '@/app/shared/interfaces';
import { handleError } from '@/app/shared/utils';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/checkout`;

export async function checkout(ids: string[]): Promise<IResponse<any>> {
  try {
    const { data: resData } = await axios.post<IResponse<any>>(`${URL}/checkout`, {
      productIds: ids
    });
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
