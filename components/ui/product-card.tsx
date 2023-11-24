"use client"
import { Product } from '@/types';
import Image from 'next/image';
import React, { MouseEventHandler, use } from 'react';
import Iconbutton from './icon-button';
import { Expand, ShoppingCartIcon } from 'lucide-react';
import Currency from './currency';
import { useRouter } from 'next/navigation';
import usePreviewModal from '@/hooks/use-preview-model';
import useCart from '@/hooks/use-cart';

interface Props {
    data: Product,
}

const ProductCard: React.FC<Props> = ({ data }) => {
    const previewModal = usePreviewModal();
    const cart = useCart();
    const router = useRouter();
    const handleClick = () => {
        router.push(`/product/${data?.id}`);
    }

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        previewModal.onOpen(data);
    }

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        cart.addItem(data);
    }

    return (
        <div onClick={handleClick} className='bg-white group cursor-pointer rounded-xl border p-3 space-y-4'>
            {/* images and actions */}
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image src={data?.images?.[0]?.url} alt={"sample"} layout="fill" objectFit="cover" className="aspect-square object-cover rounded-md" />
                <div className="opacity-0 group-hover:opacity-100 transition  absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <Iconbutton onClick={onPreview} icon={<Expand size={20} className='text-gray-600' />} />
                        <Iconbutton onClick={onAddToCart} icon={<ShoppingCartIcon size={20} className='text-gray-600' />} />
                    </div>
                </div>
            </div>
            {/* description */}
            <div>
                <p className='font-semibold text-lg'>{data.name}</p>
                <p className='text-sm text-gray-500'>{data.category?.name}</p>
            </div>
            {/* price */}
            <div className="flex items-center justify-between">

                <Currency value={data?.price} />
            </div>
        </div>
    );
}

export default ProductCard;
