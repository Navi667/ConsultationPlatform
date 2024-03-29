import { useState } from 'react';
import toast from 'react-hot-toast';


const useSubmitArticle = () => {
    const [loading, setLoading] = useState(false);


    const submit = async (article) => {
        const success = handleArticleErrors(article);
        if(!success) return 
        setLoading(true);

        try {
            const res = await fetch("/api/articles/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(article)
            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            toast.success("上传成功");
          
        } catch (error) {
            toast.error(error.message);
            console.log(error.message)
        } finally {
            setLoading(false);
        }
    }

    return {loading, submit};
}

export default useSubmitArticle;

const handleArticleErrors = (article) => {
    const {
        title,
        desc,
        author,
        category,
        bgImg,
        content,
        status
    } = article
    if ( !title || !desc || !author || !category || !bgImg || !content || !status) {
        toast.error("有未完成信息，请检查后重新提交")
        return false;
    }

    return true
}

