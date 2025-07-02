const express = require('express');
const router = express.Router();
const {
  addPart,
  getParts,
  getPartById,
  updatePart,
  deletePart,
  getLowStockParts
} = require('../controllers/partController');
const { protect, isAdmin } = require('../middleware/authMiddleware');

// Inventory Routes
router.post('/', protect, isAdmin, addPart);
router.get('/', protect, getParts);
router.get('/low-stock', protect, getLowStockParts);
router.get('/:id', protect, getPartById);
router.put('/:id', protect, isAdmin, updatePart);
router.delete('/:id', protect, isAdmin, deletePart);

module.exports = router;
