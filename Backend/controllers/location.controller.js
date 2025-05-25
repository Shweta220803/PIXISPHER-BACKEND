import Location from "../models/location.model.js";

export const getLocations = async (req, res) => {
  const locations = await Location.find();
  res.json(locations);
};

export const addLocations = async (req, res) => {
  const locations = await Location.create(req.body);
  res.status(201).json(locations);
};

export const updateLocations = async (req, res) => {
  const updated = await Location.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
};

export const deleteLocations = async (req, res) => {
  await Location.findByIdAndDelete(req.params.id);
  res.json({ msg: "location deleted" });
};
