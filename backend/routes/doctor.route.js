import express from "express";
import { addDoc } from "../controller/doctor.controller.js";

const router = express.Router();
router.post("/add", addDoc);

export default router;