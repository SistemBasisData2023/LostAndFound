import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';


function Navbar() {
  const navigate = useNavigate();

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
  
    // Navigate to '/login'
    navigate('/login');
  };
  
  
  return (
    <nav className="bg-[#F9F3E6] shadow-grey shadow-md rounded-b-2xl w-screen sticky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href ="#">
            <img
              className="h-8 w-8"
              src="..\src\assets\navbarUser.png"
              alt="profile"
            />
            </a>
          </div>
          <div className="flex">
            <a
              href="#"
              className="text-gray-700 hover:bg-[#D4A5A5] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              FOUND
            </a>
            <a
              href="#"
              className="text-gray-700 hover:bg-[#D4A5A5] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              LOST
            </a>
            <a
             href="/login"
             onClick={handleLogout}
              className="text-gray-700 hover:bg-[#D4A5A5] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              LOGOUT
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
