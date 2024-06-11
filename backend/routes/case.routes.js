import express from "express";
import { addCase, getCaseByUserId } from "../controller/case.controller.js";


const router = express.Router();
router.post("/add", addCase);
router.post("/get", getCaseByUserId);


export default router;