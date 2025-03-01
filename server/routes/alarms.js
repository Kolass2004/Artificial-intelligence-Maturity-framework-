const express = require('express');
const router = express.Router();
const alarmsController = require('../controllers/alarmsController');

// Routes for setting and listing alarms
router.post('/set', alarmsController.setAlarm);
router.get('/', alarmsController.getAlarms);

module.exports = router;
