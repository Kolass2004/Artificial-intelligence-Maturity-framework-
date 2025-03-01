const { google } = require('googleapis');

exports.getCalendarEvents = async (req, res) => {
  const accessToken = req.headers['authorization-token'];
  if (!accessToken) return res.status(401).json({ message: 'Access token required' });
  try {
    const calendar = google.calendar({ version: 'v3', auth: accessToken });
    const response = await calendar.events.list({
      calendarId: 'primary',
      timeMin: (new Date()).toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime'
    });
    res.json({ events: response.data.items });
  } catch (err) {
    console.error('Error fetching calendar events:', err);
    res.status(500).json({ message: 'Error fetching calendar events', error: err.message });
  }
};
