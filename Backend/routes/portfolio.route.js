import express from "express";

const portfolioRouter = express.Router();
import {
  addPortfolioItem,
  getPortfolio,
  updatePortfolioItem,
  deletePortfolioItem,
} from "../controllers/portfolio.controller.js";

import { verifyToken, restrictTo } from "../middlewares/auth.middleware.js";

portfolioRouter.post(
  "/add",
  verifyToken,
  restrictTo("partner"),
  addPortfolioItem
);
portfolioRouter.get("/get", verifyToken, restrictTo("partner"), getPortfolio);
portfolioRouter.put(
  "/:id",
  verifyToken,
  restrictTo("partner"),
  updatePortfolioItem
);
portfolioRouter.delete(
  "/:id",
  verifyToken,
  restrictTo("partner"),
  deletePortfolioItem
);

export default portfolioRouter;
