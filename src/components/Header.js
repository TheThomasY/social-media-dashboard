import React from 'react';

import { BsToggleOn, BsToggleOff } from 'react-icons/bs';

export default function Header(props) {
  const darkModeHandler = () => {
    props.onToggleDarkMode();
  };

  return (
    <div className='pt-10 flex flex-col lg:flex-row lg:justify-between lg:items-center dark:bg-dk-bg'>
      <div>
        <div className='text-2xl font-bold text-dark-text dark:text-white'>
          Social Media Dashboard
        </div>
        <div className='mt-1 font-bold text-grey-text dark:text-dk-text'>
          Total Followers: 23,004
        </div>
      </div>
      <div className='flex justify-between mt-5 border-t border-grey-line md:border-0'>
        <div className='py-5 font-bold text-grey-text dark:text-dk-text'>
          Dark Mode
        </div>
        <button onClick={darkModeHandler} className='lg:ml-3.5'>
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
