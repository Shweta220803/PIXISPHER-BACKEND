import express from "express";
import { restrictTo, verifyToken } from "../middlewares/auth.middleware.js";
import {
  getPendingPartners,
  verifyPartner,
} from "../controllers/admin.controller.js";

const adminRouter = express.Router();

adminRouter.get(
  "/verifications",
  verifyToken,
  restrictTo("admin"),
  getPendingPartners
);
adminRouter.put("/verify/:id", verifyToken, restrictTo("admin"), verifyPartner);

export default adminRouter;
