const Sale = require('../models/Sale');
const Part = require('../models/Part');

// Create a sale
exports.createSale = async (req, res) => {
  const sale = await Sale.create(req.body);

  // Update inventory stock
  for (const item of req.body.items) {
    await Part.findByIdAndUpdate(item.partId, {
      $inc: { quantityInStock: -item.quantity }
    });
  }

  res.status(201).json(sale);
};

// Get all sales
exports.getSales = async (req, res) => {
  const sales = await Sale.find().populate('customerId').sort({ createdAt: -1 });
  res.json(sales);
};

// Get single sale
exports.getSaleById = async (req, res) => {
  const sale = await Sale.findById(req.params.id).populate('customerId');
  if (!sale) return res.status(404).json({ message: 'Sale not found' });
  res.json(sale);
};

// Monthly sales summary
exports.getMonthlySales = async (req, res) => {
  const month = req.query.month; // 1-12
  const year = req.query.year;

  const start = new Date(`${year}-${month}-01`);
  const end = new Date(start);
  end.setMonth(end.getMonth() + 1);

  const monthlySales = await Sale.find({
    date: { $gte: start, $lt: end }
  });

  const total = monthlySales.reduce((sum, s) => sum + s.totalAmount, 0);

  res.json({ month, year, total, count: monthlySales.length });
};
