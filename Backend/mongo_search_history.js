const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    // Use environment variables for sensitive information
    const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://NHKusers:NHKusers@nhkusers.okqyjty.mongodb.net/searches';

    // Connect to MongoDB
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error.message);
    process.exit(1);
  }
};

module.exports = {
  connectToDatabase,
  mongoose,
};