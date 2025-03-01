const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Import routes
const authRoutes = require('./routes/auth');
const smsRoutes = require('./routes/sms');
const networkRoutes = require('./routes/network');
const fitnessRoutes = require('./routes/fitness');
const googleRoutes = require('./routes/google');
const microsoftRoutes = require('./routes/microsoft');
const newsRoutes = require('./routes/news');
const alarmsRoutes = require('./routes/alarms');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/sms', smsRoutes);
app.use('/api/network', networkRoutes);
app.use('/api/fitness', fitnessRoutes);
app.use('/api/google', googleRoutes);
app.use('/api/microsoft', microsoftRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/alarms', alarmsRoutes);

app.get('/', (req, res) => res.send('GennRex Personal Intelligence System is running.'));

// Start server
app.listen(port, () => {
  console.log(\`GennRex server is running on port \${port}\`);
});
