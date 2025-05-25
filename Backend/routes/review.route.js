import express from "express";
const reviewRouter = express.Router();

import { restrictTo, verifyToken } from "../middlewares/auth.middleware.js";
import {
  deleteReview,
  editReview,
  getAllReviews,
} from "../controllers/review.controller.js";

reviewRouter.get("/get", verifyToken, restrictTo("admin"), getAllReviews);
reviewRouter.put("/:id", verifyToken, restrictTo("admin"), editReview);
reviewRouter.delete("/:id", verifyToken, restrictTo("admin"), deleteReview);

export default reviewRouter;
