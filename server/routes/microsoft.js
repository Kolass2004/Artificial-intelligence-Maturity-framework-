const express = require('express');
const router = express.Router();
const microsoftController = require('../controllers/microsoftController');

// Example route: Outlook messages via Microsoft Graph
router.get('/outlook', microsoftController.getOutlookMessages);

module.exports = router;
