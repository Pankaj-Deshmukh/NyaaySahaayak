const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("./passwords");
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
const PORT = 3002;

// Connect to MongoDB
mongoose.connect('mongodb+srv://kalyanppc:8m901HsB9dku8UVb@cluster0.4tv9pkp.mongodb.net/project')
// {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// Create a MongoDB schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model('On-site_logins', userSchema);

app.use(cors());


app.post("/logg",async (req,res)=>{
  try{
    const {username,email,password} =req.body;
    const user = await User.findOne({
      username,
      email,
      password
    })
    console.log(user);
    if(user){
      const token = jwt.sign({username,email},JWT_SECRET);
      console.log(token);
      res.status(400).json({
          token: "Bearer "+token
      })
    }else{
      res.status(403).json({
        msg: "you have given the wrong details"
    })
  }
  }catch(err){
    res.status(411).json({
      msg: "Something went wrong"
    })
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
