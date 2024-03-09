import express from "express";
import { submit, getArticles, getArticleById, getArticlesByCat } from "../controller/article.controller.js";

const router = express.Router();

router.post("/submit", submit)
router.get("/get", getArticles);
router.get("/getbyid/:id", getArticleById);
router.post("/cat", getArticlesByCat)


export default router;