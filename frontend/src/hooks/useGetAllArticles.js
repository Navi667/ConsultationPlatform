import { useEffect, useState } from 'react';
import useArticle from '../zustand/useArticle';
import toast from 'react-hot-toast';



const useGetAllArticles = () => {
    const [loading, setLoading] = useState(false);
    const { articles, setArticles } = useArticle();

    useEffect(() => {
        const getArticles = async () => {
            setLoading(true);
            try {
                const res = await fetch(`/api/articles/get`);
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }
                setArticles(data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        getArticles();
    }, [setArticles])

    return { articles, loading };
}

export default useGetAllArticles