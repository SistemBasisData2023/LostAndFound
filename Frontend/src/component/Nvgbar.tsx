import React from "react";




function Navbar() {

  const handleLogout = () => {
    // Clear the session storage or local storage flag
    sessionStorage.removeItem("isLoggedIn"); // Or localStorage.removeItem("isLoggedIn")
    // Redirect to the login page
    localStorage.removeItem('user_id');
    window.location.href = '/login';
  };
  
  
  return (
    <nav className="bg-[#F9F3E6] shadow-grey shadow-md rounded-b-2xl w-screen fixed">
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
