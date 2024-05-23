import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignUp = () => {
    const [loading, setLoading] = useState(false);
    
    const {setAuthUser} = useAuthContext();

    const signup = async ({ fullName, username, password, confirmPassword, gender }) => {

        const success = handleInputErrors({ fullName, username, password, confirmPassword, gender });
        if (!success) return false;


        setLoading(true);
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ fullName, username, password, confirmPassword, gender })
            })

            const data = await res.json();
            toast.success('注册成功')
            if(data.error){
                throw new Error(data.error);
            }

            //localStorage
            localStorage.setItem("chat-user", JSON.stringify(data));
            
            //context
            setAuthUser(data);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false)
        }
    }

    return {loading, signup}
}

const handleInputErrors = ({ fullName, username, password, confirmPassword, gender }) => {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error("有未完成信息，请检查后重新提交")
        return false;
    }

    if (password !== confirmPassword) {
        toast.error("两次输入密码不一致，请重新输入")
        return false;
    }

    if (password.length < 6) {
        toast.error('密码长度小于6位，请重新输入')
        return false;
    }

    return true
}

export default useSignUp