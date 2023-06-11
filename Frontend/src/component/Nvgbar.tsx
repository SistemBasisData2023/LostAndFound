import { Link, useNavigate } from 'react-router-dom';


function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove user_id from localStorage
    localStorage.removeItem('user_id');
    localStorage.removeItem('role');
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('email');
    localStorage.removeItem('user');
  
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
            <Link
            to="/user/profile">
            <img
              className="h-8 w-8"
              src="..\src\assets\navbarUser.png"
              alt="profile"
            />
            </Link>
          </div>
          <div className="flex">
            <Link 
            to="/user/insertfound"
              className="text-gray-700 hover:bg-[#D4A5A5] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              FOUND
            </Link>
            <Link 
            to="/user/insertfound"
              className="text-gray-700 hover:bg-[#D4A5A5] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              LOST
            </Link>
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
