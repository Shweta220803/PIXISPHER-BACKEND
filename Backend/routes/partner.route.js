import express from "express";
import { restrictTo, verifyToken } from "../middlewares/auth.middleware.js";
import { onboardPartner } from "../controllers/partner.controller.js";

const partnerRouter = express.Router();

router.post("/onboard", verifyToken, restrictTo("partner"), onboardPartner);

export default partnerRouter;
