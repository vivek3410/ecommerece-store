import { Category, Size } from "@/types";
const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
    try {
        const res = await fetch(URL);
        if (res.status === 200) {
            return res.json();
        } else {
            throw new Error(`Failed to fetch data. Status: ${res.status}`);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
export default getCategories;