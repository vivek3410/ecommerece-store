"use client"
import React from 'react';

interface Props {
  value?: string | number
}

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
})

const Currency: React.FC<Props> = ({ value }) => {
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => {
    setIsMounted(true);
  }, [])
  if (!isMounted) return null;
  return (
    <div className='font-semibold'>
      {formatter.format(Number(value))}
    </div>
  );
}

export default Currency;
