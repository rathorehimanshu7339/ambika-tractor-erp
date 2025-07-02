const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: String,
  phone: String,
  source: String, // e.g. showroom visit, phone call
  status: {
    type: String,
    enum: ['new', 'contacted', 'converted', 'lost'],
    default: 'new'
  },
  note: String,
  followUpDate: Date
}, { timestamps: true });

module.exports = mongoose.model('Lead', leadSchema);
