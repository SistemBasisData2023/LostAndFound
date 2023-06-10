import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarAdmin from '../../component/NvgbarAdmin';


const AdminProfile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  
  useEffect(() => {
    // Retrieve user information from local storage
    const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));
    setUser(userFromLocalStorage);
  }
  , []);

  if (!user) {
    return <div>Loading Admin Profile...</div>;
  }
  
  const handleBack = () => {
    navigate('/admin/home');
    
  };

  return (
    <div  className="flex flex-col bg-[#D4A5A5] min-h-screen">
        <NavbarAdmin />
    
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#D4A5A5] pb-32">
      <img src="../src/assets/Ostrokedark.png" alt="Top Left Image" className="absolute top-0 left-0 w-1/4 h-auto" />
      <img src="../src/assets/Ostrokedark.png" alt="Bottom Right Image" className="absolute bottom-0 right-0 w-1/4 rotate-180 h-auto" />
      <img src="../src/assets/adminprofile.png" alt="Title" className="mt-16 mb-8 w-[40%]" />

      <div 
      id="profile-card"
      className="w-full md:w-[60%] lg:w-[40%] p-8 items-center justify-center text-center mx-auto">
        <div className="rounded-full bg-gray-100 p-4 mb-4">
          <p className="font-semibold text-gray-600">Admin ID</p>
          <p>{user.user_id}</p>
        </div>
        <div className="rounded-full bg-gray-100 p-4 mb-4">
          <p className="font-semibold text-gray-600">Username</p>
          <p className="font-bold">{user.username}</p>
        </div>
        <div className="rounded-full bg-gray-100 p-4 mb-4">
          <p className="font-semibold text-gray-600">Email</p>
          <p>{user.email}</p>
        </div>
        <div className="rounded-full bg-gray-100 p-4 mb-4">
          <p className="font-semibold text-gray-600">Password</p>
          <p>{user.password}</p>
        </div>
      </div>


      <button 
        onClick={handleBack}
      className="bg-[#444C5C] hover:bg-blue-900 text-white font-bold py-4 px-4 rounded-full">
        BACK TO HOMEPAGE
        </button>
        </div>
    </div>
  );
};

export default AdminProfile;
