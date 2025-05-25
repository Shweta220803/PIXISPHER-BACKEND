import express from "express";
const categoryRouter = express.Router();
import {
  getCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controller.js";
import { restrictTo, verifyToken } from "../middlewares/auth.middleware.js";

categoryRouter.post("/add", verifyToken, restrictTo("admin"), addCategory);
categoryRouter.get("/get", verifyToken, restrictTo("admin"), getCategories);
categoryRouter.put("/:id", verifyToken, restrictTo("admin"), updateCategory);
categoryRouter.delete("/:id", verifyToken, restrictTo("admin"), deleteCategory);

export default categoryRouter;
