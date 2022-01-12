import React from 'react';
import BigCard from './BigCard';

export default function Followers() {
  const socialsData = [
    {
      social: 'facebook',
      handle: '@nathanf',
      followerCount: '1987',
      followerChange: '+12',
      colour: 'fb-blue',
    },
    {
      social: 'twitter',
      handle: '@nathanf',
      followerCount: '1044',
      followerChange: '+99',
      colour: 'twitter-blue',
    },
    {
      social: 'insta',
      handle: '@realnathanf',
      followerCount: '11k',
      followerChange: '+1099',
      colour: 'insta-yellow',
    },
    {
      social: 'youtube',
      handle: 'Nathan F.',
      followerCount: '8239',
      followerChange: '-144',
      colour: 'yt-red',
    },
  ];

  return (
    <div className='lg:flex lg:justify-between lg:gap-x-7'>
      {socialsData.map((social) => (
        <BigCard socialData={social} key={social.social} />
      ))}
    </div>
  );
}
