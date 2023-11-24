import { Color } from "@/types";
const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
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
export default getColors;