const axios = require('axios');

exports.getOutlookMessages = async (req, res) => {
  const accessToken = req.headers['authorization-token'];
  if (!accessToken) return res.status(401).json({ message: 'Access token required' });
  try {
    const response = await axios.get('https://graph.microsoft.com/v1.0/me/messages', {
      headers: {
        Authorization: \`Bearer \${accessToken}\`
      }
    });
    res.json({ messages: response.data.value });
  } catch (err) {
    console.error('Error fetching Outlook messages:', err);
    res.status(500).json({ message: 'Error fetching Outlook messages', error: err.message });
  }
};
