import React from 'react';
import SmallCard from './SmallCard';

import iconFb from '../images/icon-facebook.svg';
import iconTwitter from '../images/icon-twitter.svg';
import iconInsta from '../images/icon-instagram.svg';
import iconYoutube from '../images/icon-youtube.svg';

export default function Overview() {
  const overviewData = [
    {
      id: 'fb-v',
      social: 'facebook',
      icon: iconFb,
      metric: 'Page Views',
      data: '87',
      dataChange: '+3%',
    },
    {
      id: 'fb-l',
      social: 'facebook',
      icon: iconFb,
      metric: 'Likes',
      data: '52',
      dataChange: '-2%',
    },
    {
      id: 'in-l',
      social: 'insta',
      icon: iconInsta,
      metric: 'Likes',
      data: '5462',
      dataChange: '+2257%',
    },
    {
      id: 'in-v',
      social: 'insta',
      icon: iconInsta,
      metric: 'Profile Views',
      data: '52k',
      dataChange: '+1375%',
    },
    {
      id: 'tw-re',
      social: 'twitter',
      icon: iconTwitter,
      metric: 'Retweets',
      data: '117',
      dataChange: '+303%',
    },
    {
      id: 'tw-li',
      social: 'twitter',
      icon: iconTwitter,
      metric: 'Likes',
      data: '507',
      dataChange: '+553%',
    },
    {
      id: 'yt-li',
      social: 'youtube',
      icon: iconYoutube,
      metric: 'Likes',
      data: '107',
      dataChange: '-19%',
    },
    {
      id: 'yt-vi',
      social: 'youtube',
      icon: iconYoutube,
      metric: 'Total Views',
      data: '1407',
      dataChange: '-12%',
    },
  ];

  return (
    <div className='mt-12'>
      <div className='pb-4 text-2xl font-bold text-dark-text dark:text-white transition-colors duration-1000'>
        Overview - Today
      </div>
      <div className='md:grid md:grid-cols-2 md:gap-x-4 xl:grid-cols-4 xl:gap-x-7'>
        {overviewData.map((metric) => (
          <SmallCard data={metric} key={metric.id} />
        ))}
      </div>
    </div>
  );
}
