import {useState} from 'react';
import toast from 'react-hot-toast';


const useDeleteArticle = () => {
    const [loading, setLoading] = useState(false);

        const deleteArticleById = async (id) => {
            setLoading(true);
            try {
                const res = await fetch(`/api/articles/delete/${id}`);
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }
                toast.success(data);
            } catch (error) {
                toast.error(error.message);
                console.log(error.message)
            } finally {
                setLoading(false);
            }
        };

        return {loading, deleteArticleById}
}

export default useDeleteArticle