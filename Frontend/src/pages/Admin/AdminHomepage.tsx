import { useNavigate } from 'react-router-dom';
import Footer from '../../component/FooterPage';
import Navbar from '../../component/Nvgbar';
import { useEffect } from 'react';
import NavbarAdmin from '../../component/NvgbarAdmin';

function AdmHomepage() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkCookiesAvailability = () => {
      const areCookiesAvailable = document.cookie.length > 0;
      if (!areCookiesAvailable) {
        navigate('/');
      }
    };

    checkCookiesAvailability();
  }, [navigate]);

  const handleAdminListFound = () => {
    navigate('/admin/getfound');
  };

  const handleAdminListLost = () => {
    navigate('/admin/getlost');
  };

  const handleAdminGetUser = () => {
    navigate('/admin/getuser');
  };
  const handleAdminProfile = () => {
    navigate('/admin/profile');
  };




  return (
    
    <div className="flex flex-col bg-[#F9F3E6] min-h-screen">
      <NavbarAdmin />
      <div id="top-section" className="grid grid-cols-1 md:grid-cols-2 flex-grow mt-16 md:-ml-[90px]">
        <div className="flex flex-col justify-center items-center">
          <img src="../src/assets/adminhomepageLeft.png" alt="image1" className="ml-[20px] w-[520px]" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src="../src/assets/admintitle.png" alt="Image 2" className="-mt-[40px] -ml-[100px] w-[580px] h-auto" />
        </div>
      </div>
  
      {/* THIS IS THE ADMIN COMMAND CENTER */}
      <div id="command-section" className="flex flex-col justify-center items-center mt-12 md:col-span-2 bg-[#525968]">
        <img src="../src/assets/admincommandcenter.png" alt="CommandCenter" className="w-1/2" />
        <button onClick={handleAdminListFound} className="flex bg-[#F9F3E6] p-4 w-[300px] rounded-full items-center justify-center text-gray-600 hover:bg-[#E2C4B9] font-serif mt-8 shadow-md shadow-gray-500">
          ITEMS FOUND DATABASE
        </button>
        <button onClick={handleAdminListLost} className="flex bg-[#F9F3E6] p-4 w-[300px] rounded-full items-center justify-center text-gray-600 hover:bg-[#E2C4B9] font-serif mt-8 shadow-md shadow-gray-500">
          ITEMS LOST DATABASE
        </button>
        
        <button onClick={handleAdminGetUser} className="flex bg-[#F9F3E6] p-4 w-[300px] my-20 rounded-full items-center justify-center text-gray-600 hover:bg-[#E2C4B9] font-serif mt-8 shadow-md shadow-gray-500">
          USER DATABASE
        </button>
      </div>
  
   {/* Go to My Profile Page */}
<div className="md:col-span-2 bg-[#C2D4D8] flex flex-col items-center sm:flex-row sm:justify-between" style={{ minHeight: '65vh' }}>
  <div className="flex flex-col items-center">
    <img src="../src/assets/gotomyprofile.png" alt="GoToMyProfile" className="w-[90%] max-w-[1200px] sm:w-[80%] md:w-[70%] lg:w-[60%] h-auto sm:h-[70%] md:h-[80%] lg:h-[90%] mt-6 sm:mt-0" />
    <button 
      onClick={handleAdminProfile}
    className="flex bg-[#F9F3E6] p-4 w-[80%] sm:w-[60%] md:w-[40%] lg:w-[40%] rounded-full items-center justify-center text-gray-600 hover:bg-[#E2C4B9] font-serif mt-8 sm:mt-12 shadow-md shadow-gray-500">
      CLICK HERE
    </button>
  </div>
  <img src="../src/assets/biggericonuser.png" alt="UserIcon" className="w-[80%] max-w-[300px] sm:w-[60%] md:w-[40%] lg:w-[30%] h-auto sm:h-[70%] md:h-[80%] lg:h-[90%] mt-8 sm:mt-4 mx-32" />
</div>


     {/* Footer Section */}
  <div>
    <Footer />
  </div>



    </div>
  );
  
}

export default AdmHomepage;
