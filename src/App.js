import React, { useState } from 'react';
import Header from './components/Header';
import Followers from './components/Followers';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={'font-Inter' + (darkMode ? ' dark bg-dk-bg' : '')}>
      <div className='w-4/5 mx-auto'>
        <Header onToggleDarkMode={toggleDarkMode} colourMode={darkMode} />
        <Followers />
      </div>
    </div>
  );
}

export default App;
