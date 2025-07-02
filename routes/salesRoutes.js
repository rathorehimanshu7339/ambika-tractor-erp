const express = require('express');
const router = express.Router();
const {
  createSale,
  getSales,
  getSaleById,
  getMonthlySales
} = require('../controllers/salesController');
const { protect, isAdmin } = require('../middleware/authMiddleware');

// Sales Routes
router.post('/', protect, isAdmin, createSale);
router.get('/', protect, getSales);
router.get('/monthly', protect, isAdmin, getMonthlySales);
router.get('/:id', protect, getSaleById);

module.exports = router;
