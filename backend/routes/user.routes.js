import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getAllUsers, getUsersForSidebar, getUserById } from "../controller/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);
router.get("/all", getAllUsers);
router.post("/id", getUserById)


export default router;