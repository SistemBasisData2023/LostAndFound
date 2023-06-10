import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




function LoginUser() {


const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:9000/user/login", {
        username,
        password
      });

      // Assuming the server responds with a token or user object
      const user = response.data;

      // Login successful
      console.log("Login successful");
      // Extract user and store it in localStorage
      localStorage.setItem("user", JSON.stringify(user));
      // Extract user_id and store it in localStorage
      localStorage.setItem("user_id", user.user_id);

      // Extract user information and store it in localStorage
      localStorage.setItem("username", user.username);
      localStorage.setItem("email", user.email);
      localStorage.setItem("password", user.password);
      
      document.cookie = `user_id=${user.user_id}; path=/`;
      document.cookie = `username=${user.username}; path=/`;
      document.cookie = `email=${user.email}; path=/`;

      setLoginError("");
      // Reset form fields
      setUsername("");
      setPassword("");

      // Redirect to /user/home
      navigate('/user/home');
    } catch (error) {
      // Failed login
      console.error(error);
      setLoginError("Invalid username or password!");
    }
  };
  
  
  return (
    <>
      <div className="background h-screen w-screen flex flex-col justify-center items-start">
      
        <img
          src="../src/assets/LP.png"
          alt="loginUserPage"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <div className="container max-w-sm bg-blue-200 rounded-lg p-8 shadow-md lg:ml-32 ml-8 mt-8 relative">
          <h2 className="text-2xl font-serif mb-6 text-center">LOGIN</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              className="mb-4 px-4 py-2 border border-gray-300 rounded-full w-full text-center"
              value={username}
              onChange={handleUsernameChange}
            />

            <input
              type="password"
              placeholder="Password"
              className="mb-4 px-4 py-2 border border-gray-300 rounded-full w-full text-center"
              value={password}
              onChange={handlePasswordChange}
            />

            <p className="text-justify mb-4">
              Don't have an account?{" "}
              <Link to="/user/register" className="text-gray-700">
                Register Here
              </Link>
            </p>

            {loginError && (
              <p className="text-red-500 text-center mx-4">{loginError}</p>
            )}

            <button
              type="submit"
              className="mt-4 px-2 py-2 bg-gray-700 hover:bg-gray-400 text-white rounded-full w-full"
            >
              LOGIN NOW
            </button>
          </form>

          <p className="text-center mt-4">
            Login as{" "}
            <Link to="/admin/login" className="text-gray-700">
              Admin
            </Link>
          </p>
        </div>

        <div className="w-full flex justify-center mt-4">
          <button className="px-4 py-2 bg-[#CF9D95] w-72 h-12 lg:ml-96 hover:bg-gray-400 text-white rounded-full z-10">
            EXPLORE MORE
          </button>
        </div>
      </div>
    </>
  )
}

  export default LoginUser;