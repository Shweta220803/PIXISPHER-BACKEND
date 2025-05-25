import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema(
  {
    client: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    category: String,
    date: Date,
    budget: Number,
    city: String,
    referenceImageUrl: String,
    assignedPartners: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    status: {
      type: String,
      enum: ["new", "responded", "booked", "closed"],
      default: "new",
    },
  },
  { timestamps: true }
);

const Inquiry = mongoose.model("Inquiry", inquirySchema);
export default Inquiry;
