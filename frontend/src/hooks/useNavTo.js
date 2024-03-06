import React from 'react';
import { useNavigate } from 'react-router';

const useNavTo = () => {

    const nav = useNavigate();

    const navTo = (url) => {
        nav(url);
    } 
    
  return navTo

}

export default useNavTo