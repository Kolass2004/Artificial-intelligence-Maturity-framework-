const express = require('express');
const router = express.Router();
const fitnessController = require('../controllers/fitnessController');

// Endpoint to fetch health data (via Google Fit integration)
router.get('/healthdata', fitnessController.getHealthData);

module.exports = router;
