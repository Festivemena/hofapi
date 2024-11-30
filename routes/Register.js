const express = require('express');
const Register = require('../models/Register');

const router = express.Router();

// Register route
router.route('/')
  .get(async (req, res) => {
    try {
      const registrations = await Register.find();
      res.status(200).json(registrations);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  })
  .post(async (req, res) => {
    try {
      const { name, email, businessName, phoneNumber, proposal, category } = req.body;

      // Validate required fields
      if (!name || !email || !phoneNumber || !category) {
        return res.status(400).json({ message: 'Name, email, phone number, and category are required' });
      }

      // Validate category
      const validCategories = ['Business Buildup', 'Ministry Buildup', 'Steward\'s Buildup', 'Believer\'s Buildup'];
      if (!validCategories.includes(category)) {
        return res.status(400).json({ message: 'Invalid category. Allowed categories are: ' + validCategories.join(', ') });
      }

      // Create a new registration document
      const newRegister = new Register({
        name,
        email,
        businessName: businessName || null, // Optional field
        phoneNumber,
        proposal: proposal || null, // Optional field
        category,
      });

      await newRegister.save();
      res.status(201).json(newRegister);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });

module.exports = router;