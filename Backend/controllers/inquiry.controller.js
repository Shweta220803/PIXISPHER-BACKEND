import Inquiry from "../models/inquiry.model.js";
import Partner from "../models/partner.model.js";

export const createInquiry = async (req, res) => {
  const { category, date, budget, city, referenceImageUrl } = req.body;

  try {
    // Match partners based on city & category
    const partners = await Partner.find({
      serviceCategory: category,
      city,
      status: "verified",
    });

    const assignedPartners = partners.map((p) => p.user);

    const inquiry = await Inquiry.create({
      client: req.user.id,
      category,
      date,
      budget,
      city,
      referenceImageUrl,
      assignedPartners,
    });

    res.status(201).json({ msg: "Inquiry created", inquiry });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const getPartnerLeads = async (req, res) => {
  try {
    const inquiries = await Inquiry.find({ assignedPartners: req.user.id });
    res.json(inquiries);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
