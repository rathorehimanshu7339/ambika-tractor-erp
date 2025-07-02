const express = require('express');
const router = express.Router();
const {
  createAppointment,
  getAppointments,
  updateAppointment,
  getCustomerAppointments
} = require('../controllers/appointmentController');
const { protect } = require('../middleware/authMiddleware');

// Appointment routes
router.post('/', protect, createAppointment);
router.get('/', protect, getAppointments);
router.get('/customer/:customerId', protect, getCustomerAppointments);
router.put('/:id', protect, updateAppointment);

module.exports = router;
