import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminLoginForm() {
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
      const response = await axios.post("http://localhost:9000/admin/login", {
        username,
        password
      });

      // Assuming the server responds with a token or user object
      const user = response.data;

      // Login successful
      console.log("Login successful");
      // Extract user_id and store it in localStorage
      localStorage.setItem("user_id", user.user_id);
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
    <div>
      <h2>Login</h2>
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
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {loginError && <p>{loginError}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AdminLoginForm;
