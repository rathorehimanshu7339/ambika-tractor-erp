const express = require('express');
const router = express.Router();
const {
  getSalesSummary,
  getServiceReport,
  getStockReport,
  getTopModels
} = require('../controllers/reportController');
const { protect, isAdmin } = require('../middleware/authMiddleware');

// Reporting Routes
router.get('/sales', protect, isAdmin, getSalesSummary);
router.get('/services', protect, isAdmin, getServiceReport);
router.get('/inventory', protect, isAdmin, getStockReport);
router.get('/top-models', protect, isAdmin, getTopModels);

module.exports = router;
