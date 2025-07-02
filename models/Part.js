const mongoose = require('mongoose');

const partSchema = new mongoose.Schema({
  partName: String,
  partNumber: String,
  brand: String,
  model: String,        // e.g., Swaraj 744
  color: String,        // e.g., red/black
  supplier: String,
  price: Number,
  quantityInStock: Number,
  lowStockThreshold: { type: Number, default: 5 },
}, { timestamps: true });

module.exports = mongoose.model('Part', partSchema);
