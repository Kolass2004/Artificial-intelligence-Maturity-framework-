const speakeasy = require('speakeasy');
const jwt = require('jsonwebtoken');

// In-memory user store for demo purposes (replace with a database in production)
const users = {};

exports.register = (req, res) => {
  const { username, password } = req.body;
  if (users[username]) {
    return res.status(400).json({ message: 'User already exists' });
  }
  const mfaSecret = speakeasy.generateSecret({ length: 20 });
  users[username] = { password, mfaSecret: mfaSecret.base32 };
  return res.json({ message: 'User registered', mfaSecret: mfaSecret.otpauth_url });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  const user = users[username];
  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  // Generate a temporary token to prompt for MFA verification
  const token = jwt.sign({ username, mfaVerified: false }, process.env.JWT_SECRET, { expiresIn: '10m' });
  res.json({ message: 'Login successful, please verify MFA', token });
};

exports.verifyMfa = (req, res) => {
  const { username, totp } = req.body;
  const user = users[username];
  if (!user) return res.status(401).json({ message: 'User not found' });
  const verified = speakeasy.totp.verify({
    secret: user.mfaSecret,
    encoding: 'base32',
    token: totp
  });
  if (verified) {
    const finalToken = jwt.sign({ username, mfaVerified: true }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.json({ message: 'MFA verified', token: finalToken });
  } else {
    return res.status(401).json({ message: 'Invalid MFA token' });
  }
};
