import axios from 'axios';
import { type ICategory } from '@/app/core/interfaces';
import { type IResponse } from '@/app/shared/interfaces';
import { handleError } from '@/app/shared/utils';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export async function getCategory(id: string): Promise<IResponse<ICategory | null>> {
  try {
    const { data: resData } = await axios.get<IResponse<ICategory | null>>(`${URL}/${id}`);
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
