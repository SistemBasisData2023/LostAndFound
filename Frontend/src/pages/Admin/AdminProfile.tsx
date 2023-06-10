import React from 'react';

import { useNavigate } from 'react-router-dom';
import Navbar from '../../component/Nvgbar';


function AdminProfile(){
const navigate = useNavigate();
    
  const user = {
    userId: '123456789',
    username: 'bintangfayazzah',
    email: 'MAUTIDUR@mail.com',
    password: 'rahasia',
  };

  const handleBack = () => {
    navigate('/admin/home');
    
  };

  return (
    <div  className="flex flex-col bg-[#F9F3E6] min-h-screen">
        <Navbar />
    
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-200 pb-32">
      <img src="../src/assets/Ostrokedark.png" alt="Top Left Image" className="absolute top-0 left-0 w-1/4 h-auto" />
      <img src="../src/assets/Ostrokedark.png" alt="Bottom Right Image" className="absolute bottom-0 right-0 w-1/4 rotate-180 h-auto" />
      <img src="../src/assets/userprofile.png" alt="Title" className="mt-16 mb-8 w-[40%]" />

      <div 
      id="profile-card"
      className="w-full md:w-[60%] lg:w-[40%] p-8 items-center justify-center text-center mx-auto">
        <div className="rounded-full bg-gray-100 p-4 mb-4">
          <p className="font-semibold text-gray-600">Admin ID</p>
          <p>{user.userId}</p>
        </div>
        <div className="rounded-full bg-gray-100 p-4 mb-4">
          <p className="font-semibold text-gray-600">Admin Username</p>
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
      className="bg-[#444C5C] hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-full">
        BACK TO HOMEPAGE
        </button>

        </div>
    </div>
  );
};

export default AdminProfile;
