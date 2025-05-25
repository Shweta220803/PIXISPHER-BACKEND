import express from "express";
import { restrictTo, verifyToken } from "../middlewares/auth.middleware.js";
import {
  createInquiry,
  getPartnerLeads,
} from "../controllers/inquiry.controller.js";

const inquiryRouter = express.Router();

inquiryRouter.post("/create", verifyToken, restrictTo("client"), createInquiry);
inquiryRouter.get(
  "/leads",
  verifyToken,
  restrictTo("partner"),
  getPartnerLeads
);

export default inquiryRouter;
