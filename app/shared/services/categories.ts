import axios from 'axios';
import { handleError } from '../utils';
import { type ICategory } from '@/app/core/interfaces';
import { type IResponse } from '../interfaces';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export async function getCategories(): Promise<IResponse<ICategory[]>> {
  try {
    const { data: resData } = await axios.get<IResponse<ICategory[]>>(URL);
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
