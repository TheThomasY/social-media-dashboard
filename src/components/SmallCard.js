import React from 'react';

import upArrow from '../images/icon-up.svg';
import downArrow from '../images/icon-down.svg';

export default function SmallCard(props) {
  let arrowColour =
    props.data.dataChange[0] === '+'
      ? 'hsl(163, 72%, 41%)'
      : 'hsl(356, 69%, 56%)';

  return (
    <div className='w-full mt-4 p-6 rounded-md font-bold bg-card-bg dark:bg-dk-card-bg'>
      <div className='mt-1 flex justify-between items-center'>
        <div className='text-grey-text dark:text-dk-text'>
          {props.data.metric}
        </div>
        <img src={props.data.icon} alt='' />
      </div>
      <div className='mt-7 flex justify-between items-end'>
        <div className='text-3xl dark:text-white'>{props.data.data}</div>
        <div className='flex justify-center items-center gap-x-1'>
          {props.data.dataChange[0] === '+' ? (
            <img src={upArrow} alt='' />
          ) : (
            <img src={downArrow} alt='' />
          )}
          <div style={{ color: arrowColour }}>
            {props.data.dataChange.slice(1)}
          </div>
        </div>
      </div>
    </div>
  );
}
