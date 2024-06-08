import React, { useState } from 'react';
import Feed from '../feed/Feed';
import Settings from '../settings/Settings';
import MyMusic from './MyMusic';
import './NavBar.css';

const NavBar = () => {
  const [selectedCategory, setSelectedCategory] = useState('home');

  const renderContent = () => {
    switch (selectedCategory) {
      case 'home':
        return <Feed />;
      case 'settings':
        return <Settings />;
      case 'mymusic':
        return <MyMusic />;
      default:
        return <Feed />;
    }
  };

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        {renderContent()}
      </div>
      <footer className="navbar-footer">
        <button
          className={selectedCategory === 'home' ? 'active' : ''}
          onClick={() => setSelectedCategory('home')}
        >
          Home
        </button>
        <button
          className={selectedCategory === 'settings' ? 'active' : ''}
          onClick={() => setSelectedCategory('settings')}
        >
          Settings
        </button>
        <button
          className={selectedCategory === 'mymusic' ? 'active' : ''}
          onClick={() => setSelectedCategory('mymusic')}
        >
          My Music
        </button>
      </footer>
    </div>
  );
};

export default NavBar;
