const Sale = require('../models/Sale');
const ServiceJob = require('../models/ServiceJob');
const Part = require('../models/Part');

// Total Sales Summary
exports.getSalesSummary = async (req, res) => {
  const sales = await Sale.find();
  const totalSales = sales.reduce((sum, sale) => sum + sale.totalAmount, 0);
  res.json({ totalSales, count: sales.length });
};

// Service Status Report
exports.getServiceReport = async (req, res) => {
  const total = await ServiceJob.countDocuments();
  const completed = await ServiceJob.countDocuments({ status: 'completed' });
  const pending = await ServiceJob.countDocuments({ status: 'pending' });
  res.json({ total, completed, pending });
};

// Inventory Stock Report
exports.getStockReport = async (req, res) => {
  const parts = await Part.find();
  const lowStock = parts.filter(p => p.quantityInStock <= p.lowStockThreshold);
  res.json({ totalParts: parts.length, lowStock: lowStock.length, parts });
};

// Top Selling Models
exports.getTopModels = async (req, res) => {
  const sales = await Sale.find().populate('items.partId');

  const modelMap = {};
  for (let sale of sales) {
    for (let item of sale.items) {
      const part = item.partId;
      if (!part || !part.model) continue;
      modelMap[part.model] = (modelMap[part.model] || 0) + item.quantity;
    }
  }

  const sortedModels = Object.entries(modelMap)
    .sort((a, b) => b[1] - a[1])
    .map(([model, qty]) => ({ model, qty }));

  res.json(sortedModels);
};
