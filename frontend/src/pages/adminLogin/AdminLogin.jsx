import React, { useState } from 'react';
import "./AdminLogin.css"
import { Link } from 'react-router-dom';
import useAdminLogin from '../../hooks/useAdminLogin';


const AdminLogin = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useAdminLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  }

  return (
    <div className='auth'>
      <h1 className='loginTitle'>Login Page</h1>
      <form className='loginForm' onSubmit={handleSubmit}>
        <input className='loginInput' type='text' placeholder='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input className='loginInput' type='password' placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type='submit' className='loginButton'>
          {loading ? <span className='loading loading-spinner'></span> : "Login"}
        </button>
        <span className='turnIntoRegister'><Link to="/adminregister">若没有管理员账号，前往获取</Link></span>
      </form>
    </div>
  )
}

export default AdminLogin