import React from 'react';
import "./NavBar.css";
import Logo from "../../img/logo.png"
import { Link } from 'react-router-dom';
import { BiLogOut } from "react-icons/bi";
import useNavTo from '../../hooks/useNavTo';
import useAdminLogout from '../../hooks/useLogout';
import { useAuthContext } from '../../context/AuthContext';

const NavBar = () => {
    const categories = ["健康资讯", "前沿医疗", "时尚健康", "食品安全", "健康访谈"];

    const navTo = useNavTo();
    const { logout } = useAdminLogout();

    const { authUser } = useAuthContext();
    const getPermission = (user) => {
        return user ? user.permission : null;
    }
    const permission = getPermission(authUser);

    return (
        <div className='navBar'>
            <div className='container'>

                <div className='logo' onClick={() => { navTo("/") }}>
                    <img className='logoImg' src={Logo} alt=''></img>
                </div>

                <div className='links'>
                    {categories.map((category, index) => {
                        return <Link className="categoryLink" to={`category/${category}`} key={index}>
                            <h6>{category}</h6>
                        </Link>
                    })}
                    <Link className='categoryLink' to={"/docs"}>
                        <h6>签约名医</h6>
                    </Link>
                    {authUser ?
                        <div className='navBarUsername' onClick={(e) => { navTo("/profile") }}>{authUser.fullName || "Admin"}
                            <div className='authList'>
                                <ul>
                                    {authUser.fullName ?
                                        <li className='authListLi' onClick={(e) => {
                                            e.stopPropagation();
                                            navTo("/chatroom")
                                        }}>聊天室</li> :
                                        <li className='authListLi' onClick={(e) => {
                                            e.stopPropagation();
                                            navTo("/adminpage")
                                        }}>管理面板</li>}
                                </ul>
                            </div>
                        </div> :
                        <span className='navBarUsername' onClick={() => { navTo("/login") }}>登录</span>}


                    <span className='navBarLogout' onClick={logout}><BiLogOut></BiLogOut></span>
                    {
                        permission === "admin" ? <span className='navBarWriteBtn'>
                            <Link className='writeBtnLink' to='/write'><h6>write</h6></Link>
                        </span> : ""
                    }
                </div>

            </div>
        </div>
    )
}

export default NavBar