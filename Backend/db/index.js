const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
    console.log("MongoDB connected");             //mongodb+srv://NHKusers:NHKusers@nhkusers.okqyjty.mongodb.net/NHK_users
})
.catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
});

// Create a MongoDB schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

const LoginSchema = mongoose.Schema({
  id:{
      type: String,
      required : true
  },
  name :{
      type : String,
      required : true
  },
  email :{
      type : String,
      required : true
      
  }

});

const mongoscheema = new mongoose.Schema({
  name:{
      type:String,
  },
  gmailid:{
      type:String
  }
});
const searchHistorySchema = new mongoose.Schema({
    content: String,
    timestamp: { type: Date, default: Date.now }
});

const user = mongoose.model('facebook_datas', {
  facebookId: String,
  displayName: String,
});
const UserModel =  mongoose.model("Google_data",mongoscheema);
const User = mongoose.model('On-site_login', userSchema);
const SearchHistory = mongoose.model('SearchHistory', searchHistorySchema);

module.exports = {
    UserModel,
    user,
    User,
    SearchHistory
};
