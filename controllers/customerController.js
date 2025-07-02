const Customer = require('../models/Customer');
const Lead = require('../models/Lead');

// Add Customer
exports.addCustomer = async (req, res) => {
  const customer = await Customer.create(req.body);
  res.status(201).json(customer);
};

// Get All Customers
exports.getCustomers = async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
};

// Get Single Customer
exports.getCustomerById = async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  if (!customer) return res.status(404).json({ message: 'Customer not found' });
  res.json(customer);
};

// Add Lead
exports.addLead = async (req, res) => {
  const lead = await Lead.create(req.body);
  res.status(201).json(lead);
};

// Get All Leads
exports.getLeads = async (req, res) => {
  const leads = await Lead.find();
  res.json(leads);
};

// Update Lead Status
exports.updateLeadStatus = async (req, res) => {
  const lead = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(lead);
};
