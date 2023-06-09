import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isRegistered, setIsRegistered] = useState(false);

  

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const requestData = {
      username,
      email,
      password,
    };

    try {
      const response = await axios.post('http://localhost:9000/user/register', requestData);

      if (response.status === 200) {
        // Handle successful registration
        console.log('User registered successfully!');
        navigate('/user/login'); // Redirect to /user/login
      } else {
        // Handle error response
        console.error('Failed to register user.');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('An error occurred:', error);
    }

    // Clear the input fields after submission
    setUsername('');
    setEmail('');
    setPassword('');
    setIsRegistered(true);
  };

  return (
    <div className="relative">
      <img
        src="../src/assets/registerUserPage.png"
        alt="Register User Page"
        className="absolute top-0 left-0 w-screen h-screen object-cover"
      />
      <div className="flex items-center justify-center h-screen">
        <div className="max-w-md w-full bg-transparent p-8 rounded-lg relative z-10">
          <h2 className="text-2xl font-thin font-serif text-center mb-6">Register Your Account</h2>
          <form onSubmit={handleSubmit}>
            {/* Form fields */}
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                className="text-center w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-gray-900 shadow-md bg-[#F9F3E6] hover:bg-white"
                placeholder="Email"
                value={email}
                required
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="username"
                name="username"
                className="text-center w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-gray-900 shadow-md bg-[#F9F3E6] hover:bg-white"
                placeholder="Username"
                value={username}
                required
                onChange={handleUsernameChange}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="password"
                name="password"
                className="text-center w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-gray-900 shadow-md bg-[#F9F3E6] hover:bg-white"
                placeholder="Password"
                value={password}
                required
                onChange={handlePasswordChange}
              />
            </div>
        
            <div className="mb-4 flex justify-center">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-300 hover:bg-gray-500 text-[#444C5C] font-semibold rounded-full w-[280px]"
              >
                REGISTER
              </button>
            </div>
          </form>
        </div>
      </div>

      {isRegistered && (
        <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-thin font-serif text-center mb-6">Registration Successful!</h2>
            <p className="text-center">Thank you for registering.</p>
          </div>
        </div>
      )}

    </div>
  );
}

export default RegisterPage;
