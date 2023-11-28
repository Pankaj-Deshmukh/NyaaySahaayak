import React, { useState } from 'react';
import './components/css/LoginPage.css';
import { useNavigate } from 'react-router-dom';



export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSignup = async () => {
    console.log('Signup data : ',signupData)
    try {
      const response = await fetch('http://localhost:3001/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log(data.message);
        navigate('/login');
        prompt("User registered successfully");
      } else {
        // Check for the specific error message
        if (data.message === 'Email is already registered') {
          // Handle the case where the email is already registered
          console.error('Email is already registered. Please use a different email.');
          // You might display an error message to the user or take other actions
        } else {
          // Handle other error cases
          console.error('Error during signup:', data.message);
        }
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({ ...prevData, [name]: value }));
  };

    return (
        <div>
            <head>
                {/* Your head content goes here */}
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
                <title>Login Page | NyaaySahaayak</title>
            </head>

            <body>
                <div className={`container ${isSignUp ? 'active' : ''}`} id="container">
                    {/* Your form containers go here */}
                    <div className="form-container sign-up">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <h1>Create Account</h1>
                            <div className="social-icons">
                                <a href="/" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                                <a href="/" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="/" className="icon"><i className="fa-solid fa-phone"></i></a>
                            </div>
                            <span>or use your email for registeration</span>
                            <input type="text" name="name" placeholder="Name" onChange={handleInputChange} />
                            <input type="email" name="email" placeholder="Email" onChange={handleInputChange} />
                            <input type="password" name="password" placeholder="Password" onChange={handleInputChange} />
                            <button type="button" onClick={handleSignup}>
                                Sign Up
                            </button>
                        </form>
                    </div>
                    <div className="form-container sign-in">
                        <form>
                            <h1>Log In</h1>
                            <div className="social-icons">
                                <a href="/" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                                <a href="/" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="/" className="icon"><i className="fa-solid fa-phone"></i></a>
                            </div>
                            <span>or use your email password</span>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <a href="/">Forget Your Password?</a>
                            <button>Log In</button>
                        </form>
                    </div>
                    <div className="toggle-container">
                        <div className="toggle">
                            <div className={`toggle-panel toggle-left ${!isSignUp ? 'hidden' : ''}`}>
                                <h1>Welcome Back!</h1>
                                <p>Enter your personal details to use all site features</p>
                                <button onClick={handleToggle} style={{backgroundColor: "transparent",borderColor: "#fff"}}>Log In</button>
                            </div>
                            <div className={`toggle-panel toggle-right ${isSignUp ? 'hidden' : ''}`}>
                                <h1>Hello, Friend!</h1>
                                <p>Register with your personal details to use all site features</p>
                                <button onClick={handleToggle} style={{backgroundColor: "transparent",borderColor: "#fff"}}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Your script import goes here */}
                <script src="script.js"></script>
            </body>
        </div>
    );
}
