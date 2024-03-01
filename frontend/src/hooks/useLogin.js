import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';


const useLogin = () => {
    const [loading, setLoading] = useState(false);

    const {setAuthUser} = useAuthContext();

    const login = async (username, password) => {
        const success = handleLoginErrors({username, password});
        if(!success) return 
        setLoading(true);

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({username, password})
            });
            const data = await res.json();

            if (data.error) {
                throw new Error(data.error);
            }

            localStorage.setItem("chat-user", JSON.stringify(data));

            setAuthUser(data);
          
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return {loading, login};

}

const handleLoginErrors = ({ username, password }) => {
    if ( !username || !password ) {
        toast.error("有未完成信息，请检查后重新提交")
        return false;
    }

    return true
}

export default useLogin