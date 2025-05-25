import Partner from "../models/partner.model.js";

export const onboardPartner = async (req, res) => {
  const {
    name,
    phone,
    address,
    city,
    serviceCategory,
    aadharNumber,
    portfolio,
  } = req.body;

  try {
    const partner = await Partner.create({
      user: req.user.id,
      name,
      phone,
      address,
      city,
      serviceCategory,
      aadharNumber,
      portfolio,
    });

    res
      .status(201)
      .json({ msg: "Partner submitted for verification", partner });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
