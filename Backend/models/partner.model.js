import mongoose from "mongoose";

const partnerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: String,
  phone: String,
  address: String,
  city: String,
  serviceCategory: String,
  aadharNumber: String,
  portfolio: [String], // image URLs
  status: {
    type: String,
    enum: ["pending", "verified", "rejected"],
    default: "pending",
  },
  adminComment: String,
});

const Partner = mongoose.model("Partner", partnerSchema);
export default Partner;
