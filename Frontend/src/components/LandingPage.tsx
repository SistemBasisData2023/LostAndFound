import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/LandingPage.module.css';

function LandingPage() {
  const navigate = useNavigate();

  const handleUserLogin = () => {
    navigate('/user/login');
  };

  const handleAdminLogin = () => {
    navigate('/admin/login');
  };

  const handleUserRegistration = () => {
    navigate('/user/register');
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
  <div style={{
    backgroundColor: '#d1f7e2',
    padding: '20px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }}>
    <h1>Welcome to the Landing Page</h1>
    <button onClick={handleUserLogin} style={{ backgroundColor: '#b2cde0', marginRight: '10px' }}>Login as User</button>
    <button onClick={handleAdminLogin} style={{ backgroundColor: '#b2cde0', marginLeft: '10px' }}>Login as Admin</button>
    <p>
      Don't have an account?{' '}
      <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={handleUserRegistration}>
        Register here
      </span>
    </p>
  </div>
  <img src="../src/css/title.svg" alt="Title"className="absolute top-0 left-0 w-screen h-screen object-cover" />
</div>


  );
}

export default LandingPage;