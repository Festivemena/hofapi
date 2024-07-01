// models/Testimony.js
const mongoose = require('mongoose');

const TestimonySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  testimony: { type: String, required: true },
});

module.exports = mongoose.model('Testimony', TestimonySchema);
