const {Router} = require('express');
const {User,SearchHistory} = require('../db/index');
const JWT_SECRET = require("../passwords");
const router = Router();


// Handle signup (POST request)

router.get('/signup', async(req,res) => {
  res.json("Hello people");
})
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      console.log("Email is registered already")
      return res.status(400).json({ message: 'Email is already registered' });
    }

    // Create a new user
    const newUser = await User.create({ name, email, password });
    console.log("New user: ",newUser);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error("Error during signup:",error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
router.post("/logg",async (req,res)=>{
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
// Endpoint to handle search requests
router.post('/search', async (req, res) => {
  const searchTerm = req.body.term;

  // Save search history to MongoDB
  const searchEntry = new SearchHistory({ content: `${searchTerm}`});
  await searchEntry.save();

  // Retrieve latest search history (limited to 7 items)
  const history = await SearchHistory.find().sort({ timestamp: -1 }).limit(100);

  // Respond with search history
  res.json({ history });
});


module.exports = router;
