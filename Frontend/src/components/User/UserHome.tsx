import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ListLost from './UserListLost';
import ListFound from './UserListFound';

function UserHome() {
  const navigate = useNavigate();

  const handleLostItemClick = () => {
    navigate('/user/insertlost');
  };

  const handleLogout = () => {
    // Remove user_id from localStorage
    localStorage.removeItem('user_id');
  
    // Clear cookies
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    }
  
    // Navigate to '/'
    navigate('/');
  };
  
  

  const handleFoundItemClick = () => {
    navigate('/user/insertfound');
  };

  const handleProfileClick = () => {
    navigate('/user/profile');
  };

  useEffect(() => {
    const checkCookiesAvailability = () => {
      const areCookiesAvailable = document.cookie.length > 0;
      if (!areCookiesAvailable) {
        navigate('/');
      }
    };

    checkCookiesAvailability();
  }, [navigate]);

  return (
    <div>
      <h1>User Home</h1>
      <button onClick={handleLogout} style={{ position: 'absolute', top: 10, left: 10 }}>Logout</button>
      <div className="header">
        <div className="header-buttons">
          <button onClick={handleLostItemClick}>Lost an Item</button>
          <button onClick={handleFoundItemClick}>Found an Item</button>
          
          <button onClick={handleProfileClick}>Profile</button>
        </div>
      </div>
      <div className="content">
        {/* Add your content here */}
        <ListLost />
        <ListFound />
      </div>
      <style>
        {`
        .header {
          display: flex;
          justify-content: center; /* Center the buttons horizontally */
          align-items: center;
          padding: 10px;
          background-color: #f2f2f2;
        }

        .header-buttons {
          display: flex;
          gap: 10px; /* Add space between the buttons */
        }

        .header-buttons button {
          padding: 5px 10px;
          background-color: #B2CDE0; /* Change the button color */
          color: #000; /* Set text color to white */
          border: none; /* Remove button borders */
        }

        .content {
          /* Add your content styles here */
        }
      `}
      </style>
    </div>
  );
}

export default UserHome;
