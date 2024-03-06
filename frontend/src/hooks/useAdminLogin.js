import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';


const useAdminLogin = () => {
    const [loading, setLoading] = useState(false);

    const { setAuthUser } = useAuthContext();

    const login = async (adminUsername, adminPassword) => {
        const success = handleLoginErrors({ adminUsername, adminPassword });
        if (!success) return
        setLoading(true);

        try {
            const res = await fetch("/api/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ adminUsername, adminPassword })
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

    return { loading, login };

}

const handleLoginErrors = ({ adminUsername, adminPassword }) => {
    if (!adminUsername || !adminPassword) {
        toast.error("有未完成信息，请检查后重新提交")
        return false;
    }

    return true
}

export default useAdminLogin