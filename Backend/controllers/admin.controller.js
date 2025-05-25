import Partner from "../models/partner.model.js";

export const getPendingPartners = async (req, res) => {
  try {
    const pending = await Partner.find({ status: "pending" }).populate(
      "user",
      "email"
    );
    res.json(pending);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const verifyPartner = async (req, res) => {
  const { status, comment } = req.body;

  try {
    const updated = await Partner.findByIdAndUpdate(
      req.params.id,
      { status, adminComment: comment },
      { new: true }
    );
    res.json({ msg: "Partner status updated", updated });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
