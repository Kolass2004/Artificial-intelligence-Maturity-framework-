const { google } = require('googleapis');

exports.getHealthData = async (req, res) => {
  // This endpoint expects an OAuth access token (e.g., from Google Fit)
  const accessToken = req.headers['authorization-token'];
  if (!accessToken) {
    return res.status(401).json({ message: 'Access token required' });
  }
  try {
    const fitness = google.fitness({ version: 'v1', auth: accessToken });
    // Example: list data sources (adjust as needed for your integration)
    const response = await fitness.users.dataSources.list({ userId: 'me' });
    res.json({ healthData: response.data });
  } catch (err) {
    console.error('Error fetching health data:', err);
    res.status(500).json({ message: 'Error fetching health data', error: err.message });
  }
};
