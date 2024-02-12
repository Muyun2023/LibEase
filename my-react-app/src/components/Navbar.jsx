// Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ navigateTo }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigation = (page) => {
    setMenuOpen(false);
    navigateTo(page);
  };

  return (
    <nav>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className="menu-toggle" onClick={handleMenuToggle}>
        <div className={`bar ${menuOpen ? 'open' : ''}`} />
        <div className={`bar ${menuOpen ? 'open' : ''}`} />
        <div className={`bar ${menuOpen ? 'open' : ''}`} />
      </div>
      <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
        <li onClick={() => handleNavigation('home')}>Home</li>
        <li onClick={() => handleNavigation('search')}>Search</li>
        <li onClick={() => handleNavigation('contact')}>Contact</li>
        <li onClick={() => handleNavigation('gallery')}>New Arrival</li> 
      </ul>
    </nav>
  );
};

export default Navbar;
