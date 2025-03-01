const express = require('express');
const router = express.Router();
const smsController = require('../controllers/smsController');

// Endpoint to send SMS
router.post('/send', smsController.sendSms);

module.exports = router;
