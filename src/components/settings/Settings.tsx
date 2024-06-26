import React, { useState } from 'react';
import UserProfile from './UserProfile';
import SecuritySettings from './SecuritySettings';
import OtherSettings from './Others';
import './Settings.css'; // Ensure to import the CSS file

const Settings = () => {
  const [selectedCategory, setSelectedCategory] = useState('profile');

  const renderContent = () => {
    switch (selectedCategory) {
      case 'profile':
        return <UserProfile />;
      case 'security':
        return <SecuritySettings />;
      case 'other':
        return <OtherSettings />;
      default:
        return <UserProfile />;
    }
  };

  return (
    <div className="settings-container">
      <div className="settings-content">
        {renderContent()}
      </div>
      <div className="settings-sidebar">
        <button onClick={() => setSelectedCategory('profile')}>User Profile</button>
        <button onClick={() => setSelectedCategory('security')}>Security</button>
        <button onClick={() => setSelectedCategory('other')}>Other Settings</button>
      </div>
    </div>
  );
};

export default Settings;
