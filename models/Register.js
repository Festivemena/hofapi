// models/Register.js
const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  businessName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  proposal: { type: String, required: true },
});

module.exports = mongoose.model('Register', RegisterSchema);
