import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { useEffect, useState} from 'react';

//LANDING PAGE and GENERAL COMPONENTS
import LandingLogin from './pages/LandingLogin';
import LandingPage from './pages/LandingPage';
import Navbar from './component/Nvgbar';

//USER PAGE
import Register from './pages/User/RegisterPage';
import LoginUser from './pages/User/UserLoginPage';
import Homepage from './pages/User/UserHomepage';
import InsertFound from './pages/User/UserInsertFound';

import ListFound from './pages/User/UserListFound';
import ListLost from './pages/User/UserListLost';

//ADMIN PAGE
import LoginAdmin from './pages/Admin/LoginAdminPage';
import AdmHomepage from './pages/Admin/AdminHomepage';
import GetUser from './pages/Admin/AdminGetUser';
import AdminListFound from './pages/Admin/AdminListFound';
import AdminListLost from './pages/Admin/AdminListLost';
import InsertLost from './pages/User/UserInsertLost';





function App() {

  return (
    <div>
      <Navbar />
    <div>
     <Router>
     <Routes>
      
       <Route path="/" element={<LandingPage /> } />
       <Route path="/login" element={<LandingLogin />} />

       {/* USER PAGE */}
       <Route path="/user/login" element={<LoginUser />} />
       <Route path="/user/register" element={<Register />} />
       <Route path="/user/home" element={<Homepage /> } />
       <Route path="/user/insertlost" element={<InsertLost /> } />
        <Route path="/user/insertfound" element={<InsertFound /> } />
       <Route path="/user/listlost" element={<ListLost />} />
       <Route path="/user/listfound" element={<ListFound />} />
       <Route path="/user/profile" element={<ListFound />} />

      {/* ADMIN PAGE */}
       <Route path="/admin/login" element={<LoginAdmin />} />
       <Route path="/admin/home" element={<AdmHomepage />} />
       <Route path="/user/profile" element={<ListFound />} />
       <Route path="/admin/getuser" element={<GetUser />} /> 
      <Route path="/admin/getfound" element={<AdminListFound />} />
      <Route path="/admin/getlost" element={<AdminListLost />} />






     </Routes>
   </Router>
</div>
   </div>
  )
}

export default App
