import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/billboard';
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container';
import React from 'react';
export const revalidate = 0;
interface Props {

}



const HomePage: React.FC<Props> = async (props) => {
    const billboard = await getBillboard("72c19eec-2b50-4188-bbf1-cdc674bd4b53");
    const products = await getProducts({ isFeatured: true });
    // console.log(products);

    return (
        <div>
            <Container>
                <div className='space-y-10 pb-10'>
                    <Billboard data={billboard} />

                    <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
                        <ProductList title="Featured Products" items={products} />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default HomePage;
