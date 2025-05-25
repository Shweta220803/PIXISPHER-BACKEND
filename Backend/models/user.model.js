import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["client", "partner", "admin"],
    default: "client",
  },
  otp: String, // mocked OTP
});

const User = mongoose.model("User", userSchema);
export default User;
