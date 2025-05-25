import express from "express";
const app = express();
import "dotenv/config";
import connectDB from "./config/db.js";

import authRouter from "./routes/auth.route.js";
import partnerRoutes from "./routes/admin.route.js";
import adminRoutes from "./routes/admin.route.js";
import inquiryRoutes from "./routes/inquiry.route.js";
import portfolioRoutes from "./routes/portfolio.route.js";

import statsRoutes from "./routes/stats.route.js";
import reviewRoutes from "./routes/review.route.js";
import categoryRoutes from "./routes/category.route.js";
import locationRoutes from "./routes/location.route.js";

// Connect to database
connectDB();

//  middleware
app.use(express.json());

//  Routes
app.use("/api/auth", authRouter);
app.use("/api/partner", partnerRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/inquiry", inquiryRoutes);
app.use("/api/partner/portfolio", portfolioRoutes);
app.use("/api/admin/stats", statsRoutes);
app.use("/api/admin/reviews", reviewRoutes);
app.use("/api/admin/categories", categoryRoutes);
app.use("/api/admin/locations", locationRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
