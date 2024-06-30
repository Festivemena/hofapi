const express = require('express');
const Register = require('../models/Register');
// const nodemailer = require('nodemailer');

const router = express.Router();

// Configure Nodemailer
// const transporter = nodemailer.createTransport({
//  host: process.env.EMAIL_HOST,
//   port: process.env.EMAIL_PORT,
//   secure: false, // use TLS
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.EMAIL_PASSWORD,
//   },
//   logger: true, // log to console
//   debug: true, // include SMTP traffic in the logs
// });

// Register route
router.post('/', async (req, res) => {
  try {
    const { name, email, businessName, phoneNumber, proposal } = req.body;
    const newRegister = new Register({ name, email, businessName, phoneNumber, proposal });
    await newRegister.save();

    // Send confirmation email
    // const mailOptions = {
    //   from: process.env.MAIL,
    //   to: email,
    //   subject: 'Registration Confirmation',
    //   text: `Hello ${name},\n\nThank you for registering for Business BuildUp. We have received your proposal for ${businessName}.\n\nBest regards,\nBusiness BuildUp Team`
    // };

    // transporter.sendMail(mailOptions, (error, info) => {
    //   if (error) {
    //     console.error('Error sending email:', error);
    //     return res.status(500).json({ message: 'Error sending email' });
    //   } else {
        console.log('Email sent:', info.response);
        return res.status(201).json(newRegister);
    //   }
    // });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
