// Header.jsx
import React from 'react';
import Navbar from './Navbar';
import ThemeToggle from './ThemeToggle';

const Header = ({ navigateTo, toggleTheme }) => {
    return (
      <header>
        <h1>Cloud Library</h1>
        <ThemeToggle toggleTheme={toggleTheme} />
        <Navbar navigateTo={navigateTo} />
      </header>
    );
  };
  
  export default Header;
