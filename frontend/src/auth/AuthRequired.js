import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const AuthRequired = ({ children, requiredAuth, navTo}) => {

    const { authUser } = useAuthContext();
    const location = useLocation();
    const getPermission = (user) => {
        return user ? user.permission : null;
      }
    const permission = getPermission(authUser);

    if(!authUser){
        return <Navigate to={"/login"} replace state={{form: location}}></Navigate>
    }
    if(requiredAuth){
        if(permission === requiredAuth){
            return children
        }else{
            return <Navigate to={"/"}></Navigate>
        }
    }

    return children
   
}

export default AuthRequired