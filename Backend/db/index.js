const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://kalyanppc:8m901HsB9dku8UVb@cluster0.4tv9pkp.mongodb.net/project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a MongoDB schema
const userSchema = new mongoose.Schema({
      name: String,
      email: String,
      password: String,
    });
const searchHistorySchema = new mongoose.Schema({
      content: String,
      timestamp: { type: Date, default: Date.now }
    });

const User = mongoose.model('On-site_login', userSchema);
const SearchHistory = mongoose.model('SearchHistory', searchHistorySchema);


module.exports = {
      User,
      SearchHistory
}