const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Registration, Login and MFA verification routes
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/verify-mfa', authController.verifyMfa);

module.exports = router;
