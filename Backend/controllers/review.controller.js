import Review from "../models/review.model.js";

export const getAllReviews = async (req, res) => {
  const reviews = await Review.find().populate("user", "email");
  res.json(reviews);
};

export const editReview = async (req, res) => {
  const { id } = req.params;
  const updated = await Review.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
};

export const deleteReview = async (req, res) => {
  await Review.findByIdAndDelete(req.params.id);
  res.json({ msg: "Review deleted" });
};
