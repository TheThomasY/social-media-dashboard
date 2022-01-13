import React from 'react';

import upArrow from '../images/icon-up.svg';
import downArrow from '../images/icon-down.svg';

export default function BigCard(props) {
  let arrowColour =
    props.socialData.followerChange[0] === '+'
      ? 'hsl(163, 72%, 41%)'
      : 'hsl(356, 69%, 56%)';

  return (
    <div
      className='w-full mt-7 lg:mt-12 py-7 text-center border-t-4 rounded-md cursor-pointer hover:bg-card-bg-hover bg-card-bg dark:bg-dk-card-bg dark:hover:bg-dk-card-bg-hover'
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
        {props.socialData.followerWord}
      </div>
      <div className='mt-7 flex justify-center items-center gap-x-1'>
        {props.socialData.followerChange[0] === '+' ? (
          <img src={upArrow} alt='' />
        ) : (
          <img src={downArrow} alt='' />
        )}
        <div style={{ color: arrowColour }} className='text-sm font-bold'>
          {props.socialData.followerChange.slice(1)} Today
        </div>
      </div>
    </div>
  );
}
