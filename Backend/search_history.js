const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3003;

mongoose.connect('mongodb://localhost:27017/searches', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  query: String,
});

const User = mongoose.model('searches', userSchema);

app.use(cors());
app.use(bodyParser.json());

app.post('/search', async (req, res) => {
  try {
    const { term } = req.body;

    // Creating a new User instance with the provided term
    const user = new User({ query: term });

    // Saving the user instance to the database
    await user.save();

    res.status(201).json({ message: 'Search is saved successfully' });
    console.log("The search is saved successfully");
  } catch (error) {
    console.error("Error during saving the search:", error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
