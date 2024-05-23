import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getAllUsers, getUsersForSidebar } from "../controller/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);
router.get("/all", getAllUsers);


export default router;