
import { useNavigate } from 'react-router-dom';


function LandingPage() {
  const navigate = useNavigate();
  

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="relative flex flex-col items-start justify-center h-screen bg-[#F9F3E6]">
      <img src="../src/assets/landingduduk.png" alt="landing" className="absolute bottom-0 right-0 max-w-[50%] h-auto"/>
      <div className="flex flex-col items-center mx-12 sm:items-start sm:mx-48">
        <img src="../src/assets/LPtitle.png" alt="titleHomepage" className="h-[300px] sm:h-[250px] md:h-[200px] lg:h-[250px] xl:h-[300px] mb-8" />
        <div className="font-semibold font-serif">
          <button onClick={handleLogin} className="bg-[#D1CCC2] p-8 w-[400px] sm:w-[250px] md:w-[200px] lg:w-[250px] xl:w-[300px] rounded-full border border-black">
            Continue
          </button>
        </div>
      </div>
  
      
    
    </div>
  );
  
  
  
  
  }
  
  export default LandingPage;
  