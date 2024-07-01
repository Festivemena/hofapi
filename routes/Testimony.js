// routes/Testimony.js
const express = require('express');
const Testimony = require('../models/Testimony');

const router = express.Router();

// Testimony route
router.route('/')
  .get(async (req, res) => {
    try {
      const registrations = await Testimony.find();
      res.status(200).json(registrations);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  })
  .post(async (req, res) => { // Removed redundant '/' here
    try {
      const { name, email, businessName, phoneNumber, proposal } = req.body;
      const newTestimony = new Testimony({ name, email, businessName, phoneNumber, proposal });
      await newTestimony.save();
      res.status(201).json(newTestimony);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  });

module.exports = router;