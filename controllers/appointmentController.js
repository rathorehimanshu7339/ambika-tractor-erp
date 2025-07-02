const Appointment = require('../models/Appointment');

// Create appointment
exports.createAppointment = async (req, res) => {
  const appointment = await Appointment.create(req.body);
  res.status(201).json(appointment);
};

// Get all appointments
exports.getAppointments = async (req, res) => {
  const appointments = await Appointment.find().populate('customerId');
  res.json(appointments);
};

// Update appointment
exports.updateAppointment = async (req, res) => {
  const updated = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

// Get customer-specific appointments
exports.getCustomerAppointments = async (req, res) => {
  const customerId = req.params.customerId;
  const appointments = await Appointment.find({ customerId });
  res.json(appointments);
};
