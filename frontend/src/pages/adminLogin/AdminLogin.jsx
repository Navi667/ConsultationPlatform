import React from 'react';
import "./AdminLogin.css"
import { Link } from 'react-router-dom';

const AdminLogin = () => {
  return (
    <div className='auth'>
        <h1>Login Page</h1>
        <form className='loginForm'>
            <input className='loginInput' type='text' placeholder='username'></input>
            <input className='loginInput' type='password' placeholder='password'></input>
            <button type='submit'className='loginButton'>Login</button>
            <span className='turnIntoRegister'><Link to="/adminregister">若没有管理员账号，前往获取</Link></span>
        </form>
    </div>
  )
}

export default AdminLogin