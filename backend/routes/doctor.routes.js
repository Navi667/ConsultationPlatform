import express from "express";
import { addDoc, getDocByClass, getDocByUserId } from "../controller/doctor.controller.js";

const router = express.Router();
router.post("/add", addDoc);
router.post("/getByClass", getDocByClass);
router.post("/getByUserId", getDocByUserId);

export default router;