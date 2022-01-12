import React from 'react';

import { BsToggleOn, BsToggleOff } from 'react-icons/bs';

export default function Header(props) {
  const darkModeHandler = () => {
    props.onToggleDarkMode();
  };

  return (
    <div className='w-4/5 mt-10 mx-auto flex flex-col md:flex-row md:justify-between md:items-center dark:bg-dk-bg'>
      <div>
        <div className='text-2xl font-bold text-dark-text dark:text-white'>
          Social Media Dashboard
        </div>
        <div className='mt-1 font-bold text-grey-text dark:text-dk-text'>
          Total Followers: 23,004
        </div>
      </div>
      <div className='flex justify-between mt-5 border-t-2 border-grey-line md:border-0'>
        <div className='py-5 font-bold text-grey-text dark:text-dk-text'>
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
