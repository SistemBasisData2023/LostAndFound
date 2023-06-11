import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

//LANDING PAGE and GENERAL COMPONENTS
import LandingLogin from './pages/LandingLogin';
import LandingPage from './pages/LandingPage';

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
import UserProfile from './pages/User/UserProfile';
import AdminProfile from './pages/Admin/AdminProfile';
import ExploreMore from './pages/ExploreMore';

function App() {

  return (
     <Router>
     <Routes>
      
       <Route path="/" element={<LandingPage /> } 

       />
       <Route path="/login" element={<LandingLogin />} />
 

       {/* USER PAGE */}
       <Route path="/user/login" element={<LoginUser />} />
       <Route path="/user/register" element={<Register />} />
       <Route path="/user/home" element={<Homepage /> } />
       <Route path="/user/insertlost" element={<InsertLost /> } />
        <Route path="/user/insertfound" element={<InsertFound /> } />
       <Route path="/user/listlost" element={<ListLost />} />
       <Route path="/user/listfound" element={<ListFound />} />
       <Route path="/user/profile" element={<UserProfile />} />
       <Route path="/user/explore" element={<ExploreMore />} />

      {/* ADMIN PAGE */}
       <Route path="/admin/login" element={<LoginAdmin />} />
       <Route path="/admin/home" element={<AdmHomepage />} />
       <Route path="/admin/profile" element={<AdminProfile />} />
       <Route path="/admin/getuser" element={<GetUser />} /> 
      <Route path="/admin/getfound" element={<AdminListFound />} />
      <Route path="/admin/getlost" element={<AdminListLost />} />
     </Routes>
   </Router>

  )
}

export default App
