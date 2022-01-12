import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={'font-Inter' + (darkMode ? ' dark bg-dk-bg' : '')}>
      <Header onToggleDarkMode={toggleDarkMode} colourMode={darkMode} />
    </div>
  );
}

export default App;
