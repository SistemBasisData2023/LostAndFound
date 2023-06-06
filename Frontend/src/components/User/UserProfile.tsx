import React, { useEffect, useState } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  const handleBack = () => {
    window.location.href = '/user/home';
    };


  useEffect(() => {
    // Retrieve user information from local storage
    const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));
    setUser(userFromLocalStorage);
  }, []);

  if (!user) {
    return <div>Loading user profile...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <label>User ID:</label>
        <span>{user.user_id}</span>
      </div>
      <div>
        <label>Username:</label>
        <span>{user.username}</span>
      </div>
      <div>
        <label>Email:</label>
        <span>{user.email}</span>
      </div>
      <div>
        <label>Password:</label>
        <span>{user.password}</span>
      </div>
        <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default UserProfile;
