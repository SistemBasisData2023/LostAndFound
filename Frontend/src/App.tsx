import { useState } from 'react'
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import UserHome from './components/User/UserHome';
import './App.css'
import LoginForm from './components/User/UserLoginForm'
import UserInsertLost from './components/User/UserInsertLost'
import LandingPage from './components/LandingPage';
import AdminLoginForm from './components/Admin/AdminLoginForm';
import AdminHome from './components/Admin/AdminHome';
import UserRegister from './components/User/UserRegister';
import UserInsertFound from './components/User/UserInsertFound';
import UserProfile from './components/User/UserProfile';

function App() {
  return (
    <div style={{
      backgroundColor: '#F9F3E6',
      padding: '20px',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
    }}>
    <h1>Lost & Found</h1>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user/home" element={<UserHome />} />
        <Route path="/user/login" element={<LoginForm />} />
        <Route path="/user/insertlost" element={<UserInsertLost />} />
        <Route path="/admin/login" element={<AdminLoginForm />} />
        <Route path="/admin/home" element={<AdminHome />} />
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/insertfound" element={<UserInsertFound />} />
        <Route path="/user/profile" element={<UserProfile />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
    </div>
  );
}

export default App
