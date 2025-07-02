const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  address: String,
  financer: String,
  totalDue: Number,
  purchaseHistory: [{
    invoiceId: String,
    date: Date,
    amount: Number
  }]
}, { timestamps: true });

module.exports = mongoose.model('Customer', customerSchema);
