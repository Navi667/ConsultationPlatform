//chatroom pages
import React from 'react';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import ChatRoom from './pages/chatRoom/ChatRoom';
//articles pages
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import CategoryPage from './pages/categoryPage/CategoryPage';
//admin pages
import AdminLogin from './pages/adminLogin/AdminLogin';
import AdminRegister from './pages/adminRegister/AdminRegister';
import NavBar from './components/navbar/NavBar';
import AdminPage from './pages/adminPage/AdminPage';
//user pages
import DocPage from './pages/docPage/DocPage';
import Profile from './pages/profile/Profile';

import { Route, Routes, Navigate } from 'react-router';
import { useLocation } from 'react-router';
import { Toaster } from "react-hot-toast";
import { useAuthContext } from './context/AuthContext';
import AuthRequired from './auth/AuthRequired';

function App() {

  const { authUser } = useAuthContext();
  const getPermission = (user) => {
    return user ? user.permission : null;
  }
  const permission = getPermission(authUser);

  const location = useLocation();
  const currentPath = location.pathname.slice(1, 10);

  return (
    <>
      {currentPath === "adminpage" ? "" : <NavBar></NavBar>}
      <div className='h-screen flex items-center justify-center'>
        <Routes>
          {/* //articles routes */}
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/single/:id' element={<Single></Single>}></Route>
          <Route path='/write' element={<AuthRequired requiredAuth={"admin"}><Write></Write></AuthRequired>}></Route>
          <Route path='/category/:cat' element={<CategoryPage></CategoryPage>}></Route>
          {/* //admin routes */}
          <Route path='/adminlogin' element={authUser ? <Navigate to={"/"}></Navigate> : <AdminLogin></AdminLogin>}></Route>
          <Route path='/adminregister' element={<AdminRegister></AdminRegister>}></Route>
          <Route path='/adminpage/*' element={<AuthRequired requiredAuth={'admin'}><AdminPage></AdminPage></AuthRequired>}></Route>
          <Route path='/chatroom' element={<AuthRequired requiredAuth={'user'}><ChatRoom></ChatRoom></AuthRequired>}></Route>
          <Route path='/login' element={authUser ? <Navigate to="/"></Navigate> : <Login></Login>}></Route>
          <Route path='/signup' element={authUser ? 
            (permission === "admin" ? <Navigate to="/"></Navigate> : <Navigate to="/chatroom"></Navigate>) :
            <SignUp></SignUp>}>
          </Route>
          {/* //users routes */}
          <Route path='/docs' element={<DocPage></DocPage>}></Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>
          <Route path='*' element={<div>Not Found</div>}></Route>
        </Routes>
        <Toaster />
      </div>
    </>
  )
}


export default App;
