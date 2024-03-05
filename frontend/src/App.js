//chatroom pages
import React from 'react';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import ChatRoom from './pages/chatRoom/ChatRoom';
//articles pages
import Home from './pages/home/Home';
import Single from './pages/single/Single';
//admin pages
import AdminLogin from './pages/adminLogin/AdminLogin';
import AdminRegister from './pages/adminRegister/AdminRegister';
import NavBar from './components/navbar/NavBar';

import { Route, Routes, Navigate } from 'react-router';
import { Toaster } from "react-hot-toast";
import { useAuthContext } from './context/AuthContext';

function App() {

  const { authUser } = useAuthContext();

  return (
    <>
      <NavBar></NavBar>

      <Routes>

      </Routes>

      <div className='h-screen flex items-center justify-center'>
        <Routes>
          {/* //articles routes */}
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/single' element={<Single></Single>}></Route>
          {/* //admin routes */}
          <Route path='/adminlogin' element={<AdminLogin></AdminLogin>}></Route>
          <Route path='/adminregister' element={<AdminRegister></AdminRegister>}></Route>
          {/* //chatroom routes */}
          <Route path='/chatroom' element={authUser ? <ChatRoom></ChatRoom> : <Navigate to="/login"></Navigate>}></Route>
          <Route path='/login' element={authUser ? <Navigate to="/chatroom"></Navigate> : <Login></Login>}></Route>
          <Route path='/signup' element={authUser ? <Navigate to="/chatroom"></Navigate> : <SignUp></SignUp>}></Route>
        </Routes>
        <Toaster />
      </div>


    </>
  )
}


export default App;
