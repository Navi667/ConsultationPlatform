import { useState } from "react";
import toast from "react-hot-toast";

const useSubmitCase = () => {
    const [loading, setLoading] = useState(false);

    const submitCase = async (form) => {    
        setLoading(true);
        try {
            const res = await fetch(`/api/case/add`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }  
            toast.success(data);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return {loading, submitCase};
}

export default useSubmitCase;