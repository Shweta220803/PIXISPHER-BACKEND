import express from "express";
import { restrictTo, verifyToken } from "../middlewares/auth.middleware.js";
import { getAdminStats } from "../controllers/stats.controller.js";
const statsRouter = express.Router();

statsRouter.get("/", verifyToken, restrictTo("admin"), getAdminStats);

export default statsRouter;
