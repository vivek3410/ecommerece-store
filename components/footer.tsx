import React from 'react';

interface Props {

}

const Footer: React.FC<Props> = (props) => {
    return (
        <div className='bg-white border-t'>
            <div className='mx-auto py-10'>
                <p className='text-center text-xs text-black'>
                    &copy; 2023 VivekStore, Inc. All rights reserved.
                </p>
            </div>
        </div>
    );
}

export default Footer;
