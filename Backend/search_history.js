// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const { connectToDatabase, mongoose } = require('./mongo_search_history');

// const app = express();
// const PORT = 4000;


// app.use(cors()); // Enable CORS for all routes
// app.use(bodyParser.json());


// connectToDatabase();


// const searchSchema = new mongoose.Schema({
//   query: String,
//   timestamp: { type: Date, default: Date.now },
// });

// const Search = mongoose.model('Search', searchSchema);

// // Endpoint to save a search
// app.post('/save-search', async (req, res) => {
//   try {
//     const { query } = req.body;

//     // Save the search to our project atlas
//     await Search.create({ query });

//     res.status(200).json({ message: 'Search saved successfully.' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error', details: error.message });
//   }
// });

// // Endpoint to get  last 7 searches
// app.get('/get-recent-searches', async (req, res) => {
//   try {
//     const recentSearches = await Search.find().sort({ timestamp: -1 }).limit(7);

//     res.status(200).json(recentSearches);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error', details: error.message });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });














const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const [isLogin, setIsLogIn] = useState(false);
  const [LogInData, setLogInData] = useState({
    email: '',
    password: '',
  });


// const handleLogin = async () => {
//     console.log('Login data : ',LoginData)
//     try {
//       const response = await fetch('http://localhost:3001/auth/valid', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(LogInData),
//       });
  
//       const data = await response.json();
  
//       if (response.ok) {
//         console.error("New User login!!");
//       } else {
//         // Check for the specific error message
//         if (data.message === 'Email is already registered') {
            
//           // Handle the case where the email is already registered
//           console.log(data.message);
//           console.log('Login Sucessfull');
//           navigate('/home');
//           // You might display an error message to the user or take other actions
//         } else {
//           // Handle other error cases
//           console.error('Error during signup:', data.message);
//         }
//       }
//     } catch (error) {
//       console.error('Error during signup:', error);
//     }
//   };
















