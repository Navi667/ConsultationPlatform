import React from 'react';
import { Link } from 'react-router-dom';

const AdminRegister = () => {
    return (
        <div className='auth'>
            <h1>Register Page</h1>
            <form className='registerForm'>
                <input className='registerInput' type='text' placeholder='username'></input>
                <input className='registerInput' type='password' placeholder='password'></input>
                <button type='submit' className='loginButton'>Register</button>
                <span className='turnIntoRegister'><Link to="/adminlogin">前往登录</Link></span>
            </form>
        </div>
    )
}

export default AdminRegister