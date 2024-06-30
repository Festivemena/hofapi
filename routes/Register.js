// routes/register.js
const express = require('express');
const Register = require('../models/Register');

const router = express.Router();

// Register route
router.post('/', async (req, res) => {
  try {
    const { name, email, businessName, phoneNumber, proposal } = req.body;
    const newRegister = new Register({ name, email, businessName, phoneNumber, proposal });
    await newRegister.save();
    res.status(201).json(newRegister);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
