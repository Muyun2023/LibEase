
import React, { useState } from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ toggleTheme }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleToggle = () => {
    setIsDarkTheme(!isDarkTheme);
    toggleTheme(!isDarkTheme ? 'dark' : 'light');
  };

  return (
    <div className={`theme-toggle ${isDarkTheme ? 'dark' : 'light'}`} onClick={handleToggle}>
      {isDarkTheme ? 'Light Theme' : 'Dark Theme'}
    </div>
  );
};

export default ThemeToggle;
