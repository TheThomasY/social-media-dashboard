import React, { useState } from 'react';
import Header from './components/Header';
import Followers from './components/Followers';
import Overview from './components/Overview';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={'font-Inter' + (darkMode ? ' dark bg-dk-bg' : '')}>
      <div className='w-4/5 max-w-[1120px] mx-auto pb-10 lg:pb-20'>
        <Header onToggleDarkMode={toggleDarkMode} colourMode={darkMode} />
        <Followers />
        <Overview />
      </div>
    </div>
  );
}

export default App;
