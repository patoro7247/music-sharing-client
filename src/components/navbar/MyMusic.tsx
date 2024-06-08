// src/OtherSettings.js
import React from 'react';

const MyMusic = () => {
  return (
    <div>
      <h2>Other Settings</h2>
      <form>
        <label>
          Notification Preferences:
          <select name="notifications">
            <option value="all">All</option>
            <option value="email">Email only</option>
            <option value="none">None</option>
          </select>
        </label>
        <br />
        <label>
          Language:
          <select name="language">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default MyMusic;
