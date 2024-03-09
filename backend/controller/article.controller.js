import Article from "../models/article.model.js";


export const submit = async (req, res) => {
    try {
        const { title,
            desc,
            author,
            category,
            bgImg,
            content,
            status } = req.body;

            const article = await Article.findOne({title});
            if(article) {
                return res.status(400).json({error:"Username already exists"})
            }

        const newArticle = new Article({
            title,
            desc,
            author,
            category,
            bgImg,
            content,
            status
        })
        if (newArticle) {
            await newArticle.save();
            res.send(JSON.stringify("文章添加成功"));
        }
    } catch (error) {
        console.log("error in article submit controller", error.message);
        res.status(500).json({ error: "Internal Server Error" })
    }
}

export const getArticles = async (req, res) => {
    try {

        const articles = await Article.find();

        if(!articles) return res.status(200).json([]);

        res.status(200).send(articles);
    } catch (error) {
        console.log("Error in getArticles controller", error.message);
        res.status(500).json({ error: "Internal server error" })
    }
}

export const getArticleById = async (req, res) => {
    try {
        const {id: articleId} = req.params;

        const article = await Article.findOne({
            _id: articleId
        })

        if(!article) return res.status(200).json([]);

        res.status(200).send(article);
    } catch (error) {
        console.log("Error in getOneArticle controller", error.message);
        res.status(500).json({ error: "Internal server error" })
    }
}

export const getArticlesByCat = async (req, res) => {
    try {
        const {cat} = req.body;

        const articles = await Article.find({
            category: cat
        })

        if(!articles) return res.status(200).json([]);

        res.status(200).send(articles);
    } catch (error) {
        console.log(111)
        console.log("Error in getArticlesCat controller", error.message);
        res.status(500).json({ error: "Internal server error" })
    }
}