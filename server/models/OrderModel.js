const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // Unique order ID
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  information: { type: String },
  address: { type: String, required: true },
  postalCode: { type: String, required: true },
  cardId: { type: String, required: true },
  details: { type: Object, required: true }, // Same as cards' details object
  totalPrice: { type: Number, required: true },
  status: { type: String, default: "Pending" }, // Example statuses: Pending, Shipped, Delivered
  orderDate: { type: Date, default: Date.now } // Add order date
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
