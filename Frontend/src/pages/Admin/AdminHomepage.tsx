import { useNavigate } from 'react-router-dom';
import Footer from '../../component/FooterPage';

function AdmHomepage() {
  const navigate = useNavigate();

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

  
    const MemberO15 = [
      { name: "Bintang Marsyuma Rakhasunu", nickname: "Bintang", github: "marsyuma" },
      { name: "Fayza Nirwasita", nickname: "Fay", github: "fn95" },
      { name: "Azzah Angeli", nickname: "Azzah", github: "azzahangely" },
    ];


  return (
    <div className="flex flex-col bg-[#F9F3E6] min-h-screen">
      <div id="top-section" className="grid grid-cols-1 md:grid-cols-2 flex-grow mt-4 md:-ml-[90px]">
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
  
   {/* THIS IS THE GO TO MY PROFILE PAGE */}
<div className="md:col-span-2 bg-[#C2D4D8] h-[500px] flex flex-col items-center">
  <div className="w-full max-w-[1024px] mx-auto">
    <div className="flex items-start">
      <img src="../src/assets/gotomyprofile.png" alt="GoToMyProfile" className="w-1/2 -ml-[20px] mt-32" />
      <img src="../src/assets/biggericonuser.png" alt="UserIcon" className="w-auto ml-auto mt-4" />
    </div>
    <button onClick={handleAdminProfile} 
    className="flex bg-[#F9F3E6] px-28 py-4 rounded-full items-center justify-center text-gray-600 hover:bg-[#E2C4B9] font-bold -mt-[120px] mx-10 shadow-lg ">
      CLICK HERE
    </button>
  </div>
</div>


     {/* Footer Section */}
  <div>
    <Footer />
  </div>



    </div>
  );
  
}

export default AdmHomepage;
