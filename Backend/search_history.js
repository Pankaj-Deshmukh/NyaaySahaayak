const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
const port = 3003;

// Connect to MongoDB (make sure MongoDB is running)
mongoose.connect('mongodb://localhost:27017/search_history', { useNewUrlParser: true, useUnifiedTopology: true });

// Define MongoDB schema and model for search history
const searchHistorySchema = new mongoose.Schema({
  content: String,
  timestamp: { type: Date, default: Date.now }
});

const SearchHistory = mongoose.model('SearchHistory', searchHistorySchema);

// Middleware to parse JSON requests
app.use(cors())
app.use(bodyParser.json());

// Endpoint to handle search requests
app.post('/search', async (req, res) => {
  const searchTerm = req.body.term;

  // Save search history to MongoDB
  const searchEntry = new SearchHistory({ content: `${searchTerm}`});
  await searchEntry.save();

  // Retrieve latest search history (limited to 7 items)
  const history = await SearchHistory.find().sort({ timestamp: -1 }).limit(100);

  // Respond with search history
  res.json({ history });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
