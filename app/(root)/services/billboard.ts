import axios from 'axios';
import { type IBillboard } from '@/app/core/interfaces';
import { type IResponse } from '@/app/shared/interfaces';
import { handleError } from '@/app/shared/utils';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export async function getBillboard(id: string): Promise<IResponse<IBillboard | null>> {
  try {
    const { data: resData } = await axios.get<IResponse<IBillboard | null>>(`${URL}/${id}`);
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
