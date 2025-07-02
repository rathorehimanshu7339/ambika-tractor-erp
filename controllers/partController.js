const Part = require('../models/Part');

// Add new part
exports.addPart = async (req, res) => {
  const part = await Part.create(req.body);
  res.status(201).json(part);
};

// Get all parts
exports.getParts = async (req, res) => {
  const parts = await Part.find();
  res.json(parts);
};

// Get part by ID
exports.getPartById = async (req, res) => {
  const part = await Part.findById(req.params.id);
  if (!part) return res.status(404).json({ message: 'Part not found' });
  res.json(part);
};

// Update part
exports.updatePart = async (req, res) => {
  const part = await Part.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(part);
};

// Delete part
exports.deletePart = async (req, res) => {
  await Part.findByIdAndDelete(req.params.id);
  res.json({ message: 'Part deleted' });
};

// Get low stock parts
exports.getLowStockParts = async (req, res) => {
  const parts = await Part.find({ quantityInStock: { $lte: 5 } });
  res.json(parts);
};
