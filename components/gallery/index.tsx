'use client';
import { Image as ImageType } from '@/types';
import { Tab } from '@headlessui/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import GalleryTab from './gallery-tab';

interface GalleryProps {
  images: ImageType[];
}

export default function Gallery({ images }: GalleryProps) {
  // console.log(images);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <Tab.Group as={'div'} className={'flex flex-col-reverse'}>
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className={'grid grid-cols-4 gap-6'}>
          {images.map((image, index) => (
            <div key={index}>
              <GalleryTab key={image.id} image={image} />
            </div>
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className={'aspect-square w-full'}>
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className="aspect-square h-full w-full relative sm:rounded-lg overflow-hidden">
              <Image
                src={image.url}
                alt={''}
                layout="fill"
                objectFit="cover"
                className="object-cover object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
