import React from 'react';
import "./NavBar.css";
import Logo from "../../img/logo.png"
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='navBar'>
            <div className='container'>

                <div className='logo'>
                    <img className='logoImg' src={Logo} alt=''></img>
                </div>

                <div className='links'>
                    <Link className='link' to='/'><h6>art</h6></Link>
                    <Link className='link' to='/'><h6>art</h6></Link>
                    <Link className='link' to='/'><h6>art</h6></Link>
                    <Link className='link' to='/'><h6>art</h6></Link>
                    <span className='username'>Navi</span>
                    <span className='logout'>logout</span>
                    <span className='write'>
                        <Link className='link' to='/write'><h6 className='write'>write</h6></Link>
                    </span>
                </div>

            </div>
        </div>
    )
}

export default NavBar