import React from 'react';
import BigCard from './BigCard';

export default function Followers() {
  return (
    <div className='lg:flex lg:justify-between lg:gap-x-7'>
      <BigCard />
      <BigCard />
      <BigCard />
      <BigCard />
    </div>
  );
}
