const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  businessName: { type: String, required: false }, // Made optional as not all categories may require it
  phoneNumber: { type: String, required: true },
  proposal: { type: String, required: false }, // Made optional as not all categories may require it
  category: { 
    type: String, 
    required: true, 
    enum: ['Business Buildup', 'Ministry Buildup', 'Steward\'s Buildup', 'Believer\'s Buildup', 'Career Buildup'] 
  },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

module.exports = mongoose.model('Register', RegisterSchema);