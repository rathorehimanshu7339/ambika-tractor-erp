const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  brand: String,
  model: String,
  color: String,
  registrationNumber: String,
  chassisNumber: String,
  images: [String], // image URLs
  videos: [String], // video URLs
  tyreCondition: String, // e.g., Good / Worn
  tyreLifePercent: Number,
  bodyCondition: String,
  notes: String
}, { timestamps: true });

module.exports = mongoose.model('Vehicle', vehicleSchema);
