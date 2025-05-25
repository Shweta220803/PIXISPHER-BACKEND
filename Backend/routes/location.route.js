import express from "express";
const locationRouter = express.Router();
import { restrictTo, verifyToken } from "../middlewares/auth.middleware.js";
import {
  addLocations,
  deleteLocations,
  getLocations,
  updateLocations,
} from "../controllers/location.controller.js";

locationRouter.get("/", verifyToken, restrictTo("admin"), getLocations);
locationRouter.post("/", verifyToken, restrictTo("admin"), addLocations);
locationRouter.put("/:id", verifyToken, restrictTo("admin"), updateLocations);
locationRouter.delete(
  "/:id",
  verifyToken,
  restrictTo("admin"),
  deleteLocations
);

export default locationRouter;
