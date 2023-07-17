import axios from 'axios';
import { type IResponse } from '@/app/shared/interfaces';
import { handleError } from '@/app/shared/utils';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/checkout`;

export async function checkout(ids: string[]): Promise<IResponse<string | null>> {
  try {
    const { data: resData } = await axios.post<IResponse<string | null>>(URL, {
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
      data: null,
      errorMessage: handleError(error),
      message: null
    };
  }
}
