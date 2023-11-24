import { Size } from "@/types";
const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
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
export default getSizes;