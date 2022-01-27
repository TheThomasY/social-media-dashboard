import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Followers from './components/Followers';
import Overview from './components/Overview';
import './App.css';

function App() {
  // Set page title
  useEffect(() => {
    document.title = 'Dashboard';
  }, []);

  // Dark Mode
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Followers
  const startingFollowers = {
    fb: 1987,
    tw: 1044,
    in: 11000,
    yt: 8239,
  };

  // Random Followers
  const [randomFollowers, setRandomFollowers] = useState({
    fb: startingFollowers.fb,
    tw: startingFollowers.tw,
    in: startingFollowers.in,
    yt: startingFollowers.yt,
  });

  const randomFluc = (number) => {
    let percentage = Math.floor(Math.random() * 2 + 1);
    return Math.random() > 0.5
      ? Math.ceil(number * (1 + percentage / 100))
      : Math.ceil(number * (1 - percentage / 100));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomFollowers((prevRandomFollowers) => {
        return {
          ...prevRandomFollowers,
          fb: randomFluc(prevRandomFollowers.fb),
          tw: randomFluc(prevRandomFollowers.tw),
          in: randomFluc(prevRandomFollowers.in),
          yt: randomFluc(prevRandomFollowers.yt),
        };
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={
        'min-h-screen font-Inter transition-colors duration-500' +
        (darkMode ? ' dark bg-dk-bg' : '')
      }
    >
      <div className='w-4/5 max-w-[1120px] mx-auto pb-10 xl:pb-14'>
        <Header
          onToggleDarkMode={toggleDarkMode}
          colourMode={darkMode}
          followers={randomFollowers}
        />
        <Followers followers={randomFollowers} />
        <Overview />
      </div>
    </div>
  );
}

export default App;
