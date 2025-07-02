const Vehicle = require('../models/Vehicle');
const ServiceJob = require('../models/ServiceJob');

// Add new vehicle
exports.addVehicle = async (req, res) => {
  const vehicle = await Vehicle.create(req.body);
  res.status(201).json(vehicle);
};

// Get all vehicles
exports.getVehicles = async (req, res) => {
  const vehicles = await Vehicle.find().populate('customerId');
  res.json(vehicles);
};

// Add service job
exports.addServiceJob = async (req, res) => {
  const job = await ServiceJob.create(req.body);
  res.status(201).json(job);
};

// Get all jobs
exports.getServiceJobs = async (req, res) => {
  const jobs = await ServiceJob.find().populate('vehicleId');
  res.json(jobs);
};

// Update job status
exports.updateJobStatus = async (req, res) => {
  const job = await ServiceJob.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(job);
};

// Get vehicle with all service history
exports.getVehicleHistory = async (req, res) => {
  const vehicle = await Vehicle.findById(req.params.id).populate('customerId');
  const jobs = await ServiceJob.find({ vehicleId: req.params.id });
  res.json({ vehicle, jobs });
};
