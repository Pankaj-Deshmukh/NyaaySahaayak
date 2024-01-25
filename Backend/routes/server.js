const {Router} = require('express');
const {User,SearchHistory} = require('../db/index');
const userMiddleware = require('../middlewares/normalLogin');
const JWT_SECRET = require("../passwords");
const router = Router();
const cors = require('cors')
const jwt = require('jsonwebtoken')

router.use(cors());
// Handle signup (POST request)
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


// router.post("/logg",async (req,res)=>{
//   console.log("Helloooo")
//   try{
//     console.log("Accessing the email and password elements of login data")
//     const {email,password} =req.body;
//     const user = await User.findOne({
//       email,
//       password
//     })
//     console.log(user);
//     if(user){
//       const token = jwt.sign({email,password},JWT_SECRET);
//       console.log(token);
//       res.status(200).json({
//           token: "Bearer "+token
//       })
//     }else{
//       console.log("Error in backend login verification")
//       res.status(403).json({
//         msg: "you have given the wrong details"
//     })
//   }
//   }catch(err){
//     res.status(411).json({
//       msg: "Something went wrong"
//     })
//   }
// })

router.post("/logg", async (req, res) => {
  console.log("Helloooo");
  try {
    console.log("Accessing the email and password elements of login data");
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    console.log(user);
    
    if (user) {
      console.log("User credentials are valid...")
      const token = jwt.sign({ email, password }, JWT_SECRET);
      console.log(token);
      const username = user.username;
      const email1 = user.email;
      res.status(200).json({
        token: "Bearer " + token,
        user,
        email: email1
      });
    } else {
      console.log("Error in backend login verification");
      res.status(401).json({
        msg: "Incorrect email or password",
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      msg: "Something went wrong",
    });
  }
});


// router.get('/logg',(req,res)=>{
//   console.log("Get of /logg is working")
//   res.json({msg: "Hello poeple"});
// })
// Endpoint to handle search requests
router.post('/search', async (req, res) => {
  console.log("Received search query: ",req.body)
  const searchTerm = req.body.term;

  // Save search history to MongoDB
  const searchEntry = new SearchHistory({ content: `${searchTerm}`});
  await searchEntry.save();

  // Retrieve latest search history (limited to 7 items)
  const history = await SearchHistory.find().sort({ timestamp: -1 }).limit(100);

  // Respond with search history
  res.json({ history });

  
});
// // End point for Account Details in the home page.
// router.get('/accountDetails',userMiddleware,(req,res)=>{
//   const username = req.username;
//   const email = req.email;
//   res.status(200).json({
//       username,
//       email
//   })
// })

module.exports = router;
