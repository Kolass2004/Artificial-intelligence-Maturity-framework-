const express = require('express');
const router = express.Router();
const networkController = require('../controllers/networkController');

// Endpoints for network scanning and WiFi password rotation
router.get('/devices', networkController.getConnectedDevices);
router.post('/rotate-wifi', networkController.rotateWifiPassword);

module.exports = router;
