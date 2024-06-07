// src/SecuritySettings.js
// import React from 'react';

const SecuritySettings = () => {
  return (
    <div>
      <h2>Security Settings</h2>
      <form>
        <label>
          Current Password:
          <input type="password" name="currentPassword" />
        </label>
        <br />
        <label>
          New Password:
          <input type="password" name="newPassword" />
        </label>
        <br />
        <label>
          Confirm New Password:
          <input type="password" name="confirmNewPassword" />
        </label>
        <br />
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
};

export default SecuritySettings;
