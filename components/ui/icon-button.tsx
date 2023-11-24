import { cn } from '@/lib/utils';
import React, { MouseEventHandler } from 'react';

interface Props {
    onClick?: MouseEventHandler<HTMLButtonElement>|undefined,
    icon: React.ReactElement,
    className?: string,
}

const Iconbutton: React.FC<Props> = ({onClick,className,icon}) => {
  return (
    <button onClick={onClick} className={cn("rounded-full flex justify-center items-center bg-white border shadow-md p-2 hover:scale-110 transition",className)}>
        {icon}
    </button>
  );
}

export default Iconbutton;
