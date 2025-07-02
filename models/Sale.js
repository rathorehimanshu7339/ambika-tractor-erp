const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  invoiceNumber: String,
  items: [
    {
      partId: { type: mongoose.Schema.Types.ObjectId, ref: 'Part' },
      quantity: Number,
      rate: Number,
      total: Number
    }
  ],
  subtotal: Number,
  gst: Number,
  totalAmount: Number,
  paymentStatus: { type: String, enum: ['paid', 'unpaid', 'partial'], default: 'unpaid' },
  paymentMethod: String,
  financer: String,
  saleType: { type: String, enum: ['invoice', 'challan'], default: 'invoice' },
  deliveryNote: String,
  date: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Sale', saleSchema);
