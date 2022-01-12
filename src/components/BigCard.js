import React from 'react';

export default function BigCard(props) {
  console.log(props.socialData.colour);
  return (
    <div
      className={
        'w-full mt-6 lg:mt-12 py-7 text-center border-t-4 rounded-t-md' +
        ' border-' +
        props.socialData.colour
      }
    >
      <div className='font-bold text-grey-text dark:text-dk-text'>
        {props.socialData.handle}
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
