import express from "express";
import {sendMessage, getMessages} from "../controller/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/:id", protectRoute, getMessages)
//此处id为收件人id
router.post("/send/:id", protectRoute, sendMessage);

export default router;