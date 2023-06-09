import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';



function LoginAdmin() { const [username, setUsername] = useState('');
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
    const response = await axios.post("http://localhost:9000/admin/login", {
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
    localStorage.setItem("role", user.role);
    
    document.cookie = `user_id=${user.user_id}; path=/`;
    document.cookie = `username=${user.username}; path=/`;
    document.cookie = `email=${user.email}; path=/`;
    
    setLoginError("");
    
    // Reset form fields
    setUsername("");
    setPassword("");

    // Redirect to /user/home
    navigate('/admin/home');
  } catch (error) {
    // Failed login
    console.error(error);
    setLoginError("Invalid username or password");
  }
};


  
    return (
  
      <div className="background h-screen w-screen flex-col">
        <img src="../src/assets/LP.png" alt="loginUserPage" className="object-cover h-full w-full"/>
        <button className="absolute top-[550px] right-[190px] px-4 py-2 bg-[#CF9D95] w-72 hover:bg-gray-400 text-white rounded-full">EXPLORE MORE</button>
        <div className="container absolute top-[180px] left-[200px] w-96 h-96 bg-blue-200 rounded-lg p-8 shadow-md ">
        <h2 className="text-2xl font-serif mb-6 text-center mb-12">LOGIN</h2>
      
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

      <p className="text-center mb-2 mt-8">
        Not an Admin? {' '}
        <Link to="/user/login" className="text-gray-700">
          Login as User Here!
        </Link>
      </p>

      {loginError && <p className="text-red-500">{loginError}</p>}

      <button 
      type="submit" 
      className="px-8 mt-auto py-2 bg-gray-700 hover:bg-gray-400 text-white rounded-full w-full">
        LOGIN NOW
      </button>
      </form> 

          </div>

      </div>
      

    )
  }
  

  export default LoginAdmin;