import React, { useState } from 'react';
import BigCard from './BigCard';

import iconFb from '../images/icon-facebook.svg';
import iconTwitter from '../images/icon-twitter.svg';
import iconInsta from '../images/icon-instagram.svg';
import iconYoutube from '../images/icon-youtube.svg';

export default function Followers(props) {
  function numFormatter(num) {
    if (num > 9999) {
      return (num / 1000).toFixed(1) + 'K';
    } else if (num <= 9999) {
      return num;
    }
  }

  // Initial Followers
  const startingFollowers = {
    fb: 1987,
    tw: 1044,
    in: 11000,
    yt: 8239,
  };

  const followerChange = (social, current) => {
    let difference = current - startingFollowers[social];
    return difference >= 0
      ? '+' + difference.toString()
      : '-' + difference.toString();
  };

  let socialsData = [
    {
      social: 'facebook',
      icon: iconFb,
      handle: '@nathanf',
      followerCount: numFormatter(props.followers.fb),
      followerWord: 'FOLLOWERS',
      followerChange: followerChange('fb', props.followers.fb),
      colour: 'hsl(208, 92%, 53%)',
    },
    {
      social: 'twitter',
      icon: iconTwitter,
      handle: '@nathanf',
      followerCount: numFormatter(props.followers.tw),
      followerWord: 'FOLLOWERS',
      followerChange: followerChange('tw', props.followers.tw),
      colour: 'hsl(203, 89%, 53%)',
    },
    {
      social: 'insta',
      icon: iconInsta,
      handle: '@realnathanf',
      followerCount: numFormatter(props.followers.in),
      followerWord: 'FOLLOWERS',
      followerChange: followerChange('in', props.followers.in),
      colour: 'hsl(37, 97%, 70%)',
    },
    {
      social: 'youtube',
      icon: iconYoutube,
      handle: 'Nathan F.',
      followerCount: numFormatter(props.followers.yt),
      followerWord: 'SUBSCRIBERS',
      followerChange: followerChange('yt', props.followers.yt),
      colour: 'hsl(348, 97%, 39%)',
    },
  ];

  return (
    <div className='md:grid md:grid-cols-2 md:gap-4 xl:flex xl:justify-between xl:gap-x-7'>
      {socialsData.map((social) => (
        <BigCard socialData={social} key={social.social} />
      ))}
    </div>
  );
}
