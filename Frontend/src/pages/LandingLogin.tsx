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
    <div className="relative">
      <img
        src="../src/assets/LPpolos.png"
        alt="loginUserPage"
        className="absolute top-0 left-0 w-screen h-screen object-cover"
      />
      <div className="flex flex-col gap-7 absolute top-[60px] left-[160px]">
        <div>
          <img 
          src="../src/assets/LPtitle.png" 
          alt="titleHomepage" 
          className="flex h-[370px]" 
          />
        </div>
        <div className="container w-[460px] h-[370px] bg-[#C2D4D8] ml-[600px] -mt-[400px] rounded-2xl shadow-md">
          <div className="flex flex-col gap-16 justify-center items-center h-full">
            <button onClick={handleUserLogin} className="px-2 py-2 bg-gray-700 hover:bg-gray-400 text-white rounded-full w-[200px] h-[50px]">
              LOGIN as USER
            </button>
            <button onClick={handleAdminLogin} className="px-2 py-2 bg-gray-700 hover:bg-gray-400 text-gray-100 rounded-full w-[200px] h-[50px]">
              LOGIN as ADMIN
            </button>
            <div>
              <p className="text-justify mb-4 -mt-[40px] text-gray-500">
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
