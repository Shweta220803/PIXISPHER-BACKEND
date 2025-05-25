import Portfolio from "../models/portfolio.model.js";

// Add portfolio item
export const addPortfolioItem = async (req, res) => {
  const { imageUrl, description, index } = req.body;

  try {
    const item = await Portfolio.create({
      partner: req.user.id,
      imageUrl,
      description,
      index,
    });
    res.status(201).json({ msg: "Portfolio item added", item });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Get all portfolio items for a partner
export const getPortfolio = async (req, res) => {
  try {
    const items = await Portfolio.find({ partner: req.user.id }).sort("index");
    res.json(items);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Update portfolio item
export const updatePortfolioItem = async (req, res) => {
  const { id } = req.params;
  const { imageUrl, description, index } = req.body;

  try {
    const updated = await Portfolio.findByIdAndUpdate(
      id,
      { imageUrl, description, index },
      { new: true }
    );
    res.json({ msg: "Portfolio item updated", updated });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Delete portfolio item
export const deletePortfolioItem = async (req, res) => {
  try {
    await Portfolio.findByIdAndDelete(req.params.id);
    res.json({ msg: "Portfolio item deleted" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
