import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useArticle from '../zustand/useArticle';

const useGetArticlesByCat = (cat) => {
    const [loading, setLoading] = useState(false);
    const {catArticles, setCatArticles} = useArticle();
    const artCat = cat;

    useEffect(() => {
        const getArticlesByCat = async (cat) => {
            setLoading(true);
            try {
                const res = await fetch(`/api/articles/cat`, {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({cat})
                });
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }

                setCatArticles(data);
            } catch (error) {
                toast.error(error.message);
                console.log(error.message)
            } finally {
                setLoading(false);
            }
        };

        getArticlesByCat(artCat);
    }, [cat, setCatArticles, artCat])

    return { catArticles, loading };
}

export default useGetArticlesByCat