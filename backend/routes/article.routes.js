import express from "express";
import { submit, getArticles, getArticleById, getArticlesByCat, deleteArticle, updateArticle} from "../controller/article.controller.js";

const router = express.Router();

router.post("/submit", submit)
router.get("/get", getArticles);
router.get("/getbyid/:id", getArticleById);
router.post("/cat", getArticlesByCat);
router.get("/delete/:id", deleteArticle);
router.post("/update/:id", updateArticle);



export default router;