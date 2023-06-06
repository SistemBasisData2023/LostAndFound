import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserRegister() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
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
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default UserRegister;
