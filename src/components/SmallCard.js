import React from 'react';

export default function SmallCard(props) {
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
        <div className='text-up-green'>{props.data.dataChange}</div>
      </div>
    </div>
  );
}
