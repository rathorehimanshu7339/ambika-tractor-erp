const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  type: {
    type: String,
    enum: ['service', 'sales', 'delivery'],
    required: true
  },
  purpose: String,
  date: Date,
  timeSlot: String, // e.g., "10:00 AM - 11:00 AM"
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
    default: 'pending'
  },
  notes: String
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);
