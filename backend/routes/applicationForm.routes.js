import express from "express";
import { submit, getById, getAll, pass } from "../controller/applicationForm.controller.js";

const router = express.Router();

router.post("/submit", submit);
router.get("/getById/:id", getById);
router.get("/getAll", getAll);
router.get("/pass/:id", pass)

export default router;