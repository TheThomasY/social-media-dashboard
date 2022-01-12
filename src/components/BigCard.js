import React from 'react';

export default function BigCard() {
  return (
    <div className='w-full mt-6 lg:mt-12 py-7 text-center border-t'>
      <div className='text-grey-text dark:text-dk-text'>@handle</div>
      <div className='mt-7 text-6xl font-bold dark:text-white'>1987</div>
      <div className='mt-3 text-grey-text dark:text-dk-text tracking-widest'>
        FOLLOWERS
      </div>
      <div className='mt-7 text-sm font-bold text-up-green'>12 Today</div>
    </div>
  );
}
