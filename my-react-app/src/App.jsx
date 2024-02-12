// App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Search from './pages/Search';
import Contact from './pages/Contact';
import Gallery from './components/Gallery'; 
import Footer from './components/Footer';
import './components/Navbar.css';
import './main.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [theme, setTheme] = useState('light');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'search':
        return <Search />;
      case 'contact':
        return <Contact />;
      case 'gallery': 
        return <Gallery />;
      default:
        return <Home />;
    }
  };

  return (
    <div className={`app ${theme}`}>
      <Header navigateTo={navigateTo} toggleTheme={toggleTheme} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;