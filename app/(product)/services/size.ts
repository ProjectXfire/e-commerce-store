import axios from 'axios';
import { type ISize } from '@/app/core/interfaces';
import { type IResponse } from '@/app/shared/interfaces';
import { handleError } from '@/app/shared/utils';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

export async function getSizes(): Promise<IResponse<ISize[]>> {
  try {
    const { data: resData } = await axios.get<IResponse<ISize[]>>(`${URL}`);
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
