import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

    return (
      <div className="relative">
        <img src="../src/assets/LPpolos.png" alt="loginUserPage" className="absolute top-0 left-0 w-screen h-screen object-cover" />
        <div className="flex flex-col gap-7 absolute top-[85px] left-[160px]">
          <div>
            <img src="../src/assets/LPtitle.png" alt="titleHomepage" className="flex h-[300px]" />
          </div>
          <div className="flex top-[10px] font-semibold font-serif text-center shadow-xl rounded-full">
            <button onClick={handleLogin}
            className="flex bg-[#D1CCC2] p-8 w-[300px] rounded-full items-center justify-center border border-black">
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default LandingPage;
  