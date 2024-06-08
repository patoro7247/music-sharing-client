import React from 'react';

const UserProfile = () => {
  return (
    <div>
      <h2>User Profile</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default UserProfile;
