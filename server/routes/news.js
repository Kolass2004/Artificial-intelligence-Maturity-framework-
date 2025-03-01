const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');

// Route for fetching tech news
router.get('/', newsController.getTechNews);

module.exports = router;
