const express = require('express');
const router = express.Router();
const googleController = require('../controllers/googleController');

// Example route: Google Calendar events
router.get('/calendar', googleController.getCalendarEvents);

module.exports = router;
