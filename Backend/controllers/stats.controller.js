import Inquiry from "../models/inquiry.model.js";
import Partner from "../models/partner.model.js";
import User from "../models/user.model.js";

export const getAdminStats = async (req, res) => {
  try {
    const clients = await User.countDocuments({ role: "client" });
    const partners = await User.countDocuments({ role: "partner" });
    const pendingVerifications = await Partner.countDocuments({
      status: "pending",
    });
    const inquiries = await Inquiry.countDocuments();

    res.json({ clients, partners, pendingVerifications, inquiries });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
