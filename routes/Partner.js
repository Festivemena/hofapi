// routes/Partner.js
const express = require('express');
const Partner = require('../models/Partner');

const router = express.Router();

// Partner route
router.route('/')
  .get(async (req, res) => {
    try {
      const registrations = await Partner.find();
      res.status(200).json(registrations);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  })
  .post(async (req, res) => { // Removed redundant '/' here
    try {
      const { name, email, phoneNumber, partnership } = req.body;
      const newPartner = new Partner({ name, email, phoneNumber, partnership });
      await newPartner.save();
      res.status(201).json(newPartner);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  });

module.exports = router;