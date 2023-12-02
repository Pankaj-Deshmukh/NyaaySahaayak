const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectToDatabase, mongoose } = require('./mongo_search_history');

const app = express();
const PORT = ;


app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());


connectToDatabase();


const searchSchema = new mongoose.Schema({
  query: String,
  timestamp: { type: Date, default: Date.now },
});

const Search = mongoose.model('Search', searchSchema);

// Endpoint to save a search
app.post('/save-search', async (req, res) => {
  try {
    const { query } = req.body;

    // Save the search to our project atlas
    await Search.create({ query });

    res.status(200).json({ message: 'Search saved successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

// Endpoint to get  last 7 searches
app.get('/get-recent-searches', async (req, res) => {
  try {
    const recentSearches = await Search.find().sort({ timestamp: -1 }).limit(7);

    res.status(200).json(recentSearches);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
