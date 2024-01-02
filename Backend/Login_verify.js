const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Connect to MongoDB
mongoose.connect('mongodb+srv://NHKusers:NHKusers@nhkusers.okqyjty.mongodb.net/NHK_users', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a MongoDB schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model('On-site_logins', userSchema);

app.use(cors());

app.use(bodyParser.json());

// Handle login (POST request)
app.post('/logg', async (req, res) => {
  try{
    const { email, password } = req.body;
    console.log('Login attempt for email:', email);
    // Find a user by email
    const user = await User.findOne({email});

    if (user) {
      // Check if the password matches
      if (user.password === password) {
        // Valid credentials
        res.json({ isValid: true, user });
      } else {
        // Invalid password
        res.json({ isValid: false, message: 'Invalid password' });
      }
    } else {
      // User not found
      res.json({ isValid: false, message: 'User not found' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ isValid: false, message: 'An error occurred during login. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
