"use client"
import Button from '@/components/ui/button';
import Iconbutton from '@/components/ui/icon-button';
import { Color, Size } from '@/types';
import { Dialog } from '@headlessui/react';
import { Plus, X } from 'lucide-react';
import React from 'react';
import Filter from './filter';

interface Props {
    sizes: Size[],
    colors: Color[],
}

const MobileFilters: React.FC<Props> = ({ sizes, colors }) => {
    const [open, setOpen] = React.useState(false);
    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);

    return (
        <>
            <Button onClick={onOpen} className='flex items-center gap-x-2 lg:hidden'>
                Filters
                <Plus size={20} />
            </Button>
            <Dialog open={open} as={"div"} className={"relative z-40  lg:hidden"} onClose={onClose} >
                {/* Background */}
                <div className='fixed inset-0 bg-black bg-opacity-25' />

                {/* dialog position */}
                <div className="fixed inset-0 z-40 flex">
                    <Dialog.Panel className={"relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl"}>
                        {/* close button */}
                        <div className="flex items-center justify-end px-4">
                            <Iconbutton icon={<X size={15} />} onClick={onClose} />
                        </div>
                        {/* filters */}
                        <div className="p-4">
                            <Filter valueKey="sizeId" name="Sizes" data={sizes} />
                            <Filter valueKey="colorId" name="Color" data={colors} />
                        </div>
                    </Dialog.Panel>
                </div>

            </Dialog>
        </>
    )
}

export default MobileFilters;
