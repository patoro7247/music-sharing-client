import React, { useState } from 'react';
import Feed from '../feed/Feed';
import Settings from '../settings/Settings';

const NavBar = () => {
  const [selectedCategory, setSelectedCategory] = useState('home');

  const renderContent = () => {
    switch (selectedCategory) {
      case 'home':
        return <Feed />;
      case 'settings':
        return <Settings />;
    //   case 'mymusic':
    //     return <MyMusic />;
      default:
        return <Feed />;
    }
  };

  return (
    <div className="navbar-container">
      <div className="navbar-sidebar">
        <button onClick={() => setSelectedCategory('home')}>Home</button>
        <button onClick={() => setSelectedCategory('settings')}>Settings</button>
        {/* <button onClick={() => setSelectedCategory('other')}>Other Settings</button> */}
      </div>
      <div className="navbar-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default NavBar;
