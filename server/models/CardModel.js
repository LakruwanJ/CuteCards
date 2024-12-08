const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  details: { type: Object, required: true },
  size: { type: Number, required: true },
  price: { type: Number, required: true },
  tags: { type: Object, required: true },
  addedDate: { type: Date, default: Date.now }
});

const Card = mongoose.model('Card', CardSchema);

module.exports = Card;
