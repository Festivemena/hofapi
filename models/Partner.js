// models/Partner.js
const mongoose = require('mongoose');

const PartnerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  partnership: { type:String, required:true},
});

module.exports = mongoose.model('Partner', PartnerSchema);
