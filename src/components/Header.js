import React from 'react';

import { BsToggleOn, BsToggleOff } from 'react-icons/bs';

export default function Header(props) {
  function numFormatter(num) {
    if (num > 9999) {
      return (num / 1000).toFixed(1) + 'K';
    } else if (num <= 9999) {
      return num;
    }
  }

  let totalFollowers = 0;

  for (let social in props.followers) {
    totalFollowers += props.followers[social];
  }

  const darkModeHandler = () => {
    props.onToggleDarkMode();
  };

  return (
    <div className='pt-10 flex flex-col md:flex-row md:justify-between md:items-center'>
      <div>
        <div className='text-2xl font-bold text-dark-text dark:text-white transition-colors duration-1000'>
          Social Media Dashboard
        </div>
        <div className='mt-1 font-bold text-grey-text dark:text-dk-text transition-colors duration-1000'>
          Total Followers: {numFormatter(totalFollowers)}
        </div>
      </div>
      <div className='flex justify-between mt-5 border-t border-grey-line md:border-0'>
        <div className='py-5 font-bold text-grey-text dark:text-dk-text transition-colors duration-1000'>
          Dark Mode
        </div>
        <button onClick={darkModeHandler} className='md:ml-3.5'>
          {props.colourMode ? (
            <BsToggleOn color={'#4dce99'} size={'40px'} />
          ) : (
            <BsToggleOff color={'#aeb2cb'} size={'40px'} />
          )}
        </button>
      </div>
    </div>
  );
}
