const express = require('express');
const router = express.Router();
const {
  addCustomer,
  getCustomers,
  getCustomerById,
  addLead,
  getLeads,
  updateLeadStatus
} = require('../controllers/customerController');
const { protect, isAdmin } = require('../middleware/authMiddleware');

// Customers
router.post('/', protect, isAdmin, addCustomer);
router.get('/', protect, getCustomers);
router.get('/:id', protect, getCustomerById);

// Leads
router.post('/leads', protect, addLead);
router.get('/leads', protect, getLeads);
router.put('/leads/:id', protect, updateLeadStatus);

module.exports = router;
