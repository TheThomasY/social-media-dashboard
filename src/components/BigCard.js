import React from 'react';

export default function BigCard(props) {
  return (
    <div
      className='w-full mt-7 lg:mt-12 py-7 text-center border-t-4 rounded-t-md bg-card-bg dark:bg-dk-card-bg'
      style={{ borderColor: props.socialData.colour }}
      // style={{
      //   borderImage:
      //     'linear-gradient(45deg, hsl(37, 97%, 70%), hsl(329, 70%, 58%)) 1',
      // }}
    >
      <div className='flex justify-center items-center gap-x-2'>
        <img
          className='h-6'
          src={props.socialData.icon}
          alt='social media logo'
        />
        <div className='font-bold text-grey-text dark:text-dk-text'>
          {props.socialData.handle}
        </div>
      </div>
      <div className='mt-7 text-6xl font-bold dark:text-white'>
        {props.socialData.followerCount}
      </div>
      <div className='mt-3 text-grey-text dark:text-dk-text tracking-widest'>
        FOLLOWERS
      </div>
      <div className='mt-7 text-sm font-bold text-up-green'>
        {props.socialData.followerChange} Today
      </div>
    </div>
  );
}
