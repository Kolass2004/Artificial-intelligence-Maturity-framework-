const axios = require('axios');

exports.getTechNews = async (req, res) => {
  const apiKey = process.env.NEWS_API_KEY;
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        category: 'technology',
        language: 'en',
        apiKey: apiKey
      }
    });
    res.json({ articles: response.data.articles });
  } catch (err) {
    console.error('Error fetching tech news:', err);
    res.status(500).json({ message: 'Error fetching tech news', error: err.message });
  }
};
