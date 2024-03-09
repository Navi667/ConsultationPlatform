import {create} from "zustand";

const useArticle = create((set) => (
    {
        articles:[],
        setArticles: (articles) => set({articles}),
        article:{},
        setArticle: (article) => set({article}),
        catArticles:[],
        setCatArticles:(catArticles) => set({catArticles})
    }
))

export default useArticle;