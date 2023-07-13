import axios from 'axios';
import { type IColor } from '@/app/core/interfaces';
import { type IResponse } from '@/app/shared/interfaces';
import { handleError } from '@/app/shared/utils';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

export async function getColors(): Promise<IResponse<IColor[]>> {
  try {
    const { data: resData } = await axios.get<IResponse<IColor[]>>(`${URL}`);
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
