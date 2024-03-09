import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useArticle from '../zustand/useArticle';

const useGetArticleById = (id) => {
    const [loading, setLoading] = useState(false);
    const {article, setArticle} = useArticle();
    const artId = id;

    useEffect(() => {
        const getArticleById = async (id) => {
            setLoading(true);
            try {
                const res = await fetch(`/api/articles/getbyid/${id}`);
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }
                setArticle(data);
            } catch (error) {
                toast.error(error.message);
                console.log(error.message)
            } finally {
                setLoading(false);
            }
        };

        getArticleById(artId);
    }, [id, setArticle])

    return { article, loading };
}

export default useGetArticleById