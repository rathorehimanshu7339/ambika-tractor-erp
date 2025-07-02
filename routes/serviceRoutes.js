const express = require('express');
const router = express.Router();
const {
  addVehicle,
  getVehicles,
  addServiceJob,
  getServiceJobs,
  updateJobStatus,
  getVehicleHistory
} = require('../controllers/serviceController');
const { protect } = require('../middleware/authMiddleware');

// Vehicle routes
router.post('/vehicle', protect, addVehicle);
router.get('/vehicle', protect, getVehicles);
router.get('/vehicle/:id/history', protect, getVehicleHistory);

// Service job routes
router.post('/job', protect, addServiceJob);
router.get('/job', protect, getServiceJobs);
router.put('/job/:id', protect, updateJobStatus);

module.exports = router;
