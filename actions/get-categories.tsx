// const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

import { Category } from '@/types';

const URL =
  'http://localhost:3000/api/f527967d-342a-43df-a721-6dcb598cda12/categories';
//   : Promise<Category[]>
const getCategories = async (): Promise<Category[]> => {
  try {
    console.log(URL);
    const res = await fetch(URL);
    console.log(res);
    if (res.status === 200) {
      return res.json();
    } else {
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
export default getCategories;
