import React from 'react';
import BigCard from './BigCard';

import iconFb from '../images/icon-facebook.svg';
import iconTwitter from '../images/icon-twitter.svg';
import iconInsta from '../images/icon-instagram.svg';
import iconYoutube from '../images/icon-youtube.svg';

export default function Followers() {
  const socialsData = [
    {
      social: 'facebook',
      icon: iconFb,
      handle: '@nathanf',
      followerCount: '1987',
      followerWord: 'FOLLOWERS',
      followerChange: '+12',
      colour: 'hsl(208, 92%, 53%)',
    },
    {
      social: 'twitter',
      icon: iconTwitter,
      handle: '@nathanf',
      followerCount: '1044',
      followerWord: 'FOLLOWERS',
      followerChange: '+99',
      colour: 'hsl(203, 89%, 53%)',
    },
    {
      social: 'insta',
      icon: iconInsta,
      handle: '@realnathanf',
      followerCount: '11k',
      followerWord: 'FOLLOWERS',
      followerChange: '+1099',
      colour: 'hsl(37, 97%, 70%)',
    },
    {
      social: 'youtube',
      icon: iconYoutube,
      handle: 'Nathan F.',
      followerCount: '8239',
      followerWord: 'SUBSCRIBERS',
      followerChange: '-144',
      colour: 'hsl(348, 97%, 39%)',
    },
  ];

  return (
    <div className='md:grid md:grid-cols-2 md:gap-4 lg:flex lg:justify-between lg:gap-x-7'>
      {socialsData.map((social) => (
        <BigCard socialData={social} key={social.social} />
      ))}
    </div>
  );
}
