import { Link, useNavigate } from 'react-router-dom';

function LandingLogin() {
  const navigate = useNavigate();


  const handleUserLogin = () => {
    navigate("/user/login");
  };

  const handleAdminLogin = () => {
    navigate("/admin/login");
  };

  return (
    <div className="flex flex-col w-screen items-center justify-center min-h-screen bg-[#F9F3E6] relative">
      <img
        src="../src/assets/landingduduk.png"
        alt="background"
        className="absolute bottom-0 right-0 max-w-[50%] h-auto hidden md:block z-10"
      />
      <div className="flex flex-col md:flex-row md:max-w-5xl">
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <img
            src="../src/assets/LPtitle.png"
            alt="title"
            className="h-32 md:h-64 mb-8"
          />
        </div>
        <div className="md:w-2/3 flex justify-center md:justify-end relative z-20">
          <div className="container max-w-lg md:max-w-xl mx-4 md:mx-8 bg-[#C2D4D8] rounded-lg shadow-md p-8">
            <h2 className="text-2xl text-center mb-8">Login Options</h2>
            <div className="flex flex-col gap-4">
              <button className="px-2 py-2 bg-gray-700 hover:bg-gray-400 text-white rounded-full w-full">
                Login as User
              </button>
              <button className="px-2 py-2 bg-gray-700 hover:bg-gray-400 text-white rounded-full w-full">
                Login as Admin
              </button>
              <p className="text-center text-gray-500">
                Don't have an account yet?{' '}
                <Link to="/user/register" className="text-gray-700">
                  Register Here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  
  
  
  
}

export default LandingLogin;
