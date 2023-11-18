import React, { useState } from 'react';
import './LoginPage.css'; // Import your CSS file

export default function LoginPage() {
    const [isSignUp, setIsSignUp] = useState(true);

    const handleToggle = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div>
            <head>
                {/* Your head content goes here */}
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
                <title>Login Page | NyaaySahaayak</title>
            </head>

            <body>
                <div className={`container ${isSignUp ? 'active' : ''}`} id="container">
                    {/* Your form containers go here */}
                    <div className="form-container sign-up">
                        <form>
                            <h1>Create Account</h1>
                            <div className="social-icons">
                                <a href="/" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                                <a href="/" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                            </div>
                            <span>or use your email for registeration</span>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button>Sign Up</button>
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
                                <button onClick={handleToggle}>Log In</button>
                            </div>
                            <div className={`toggle-panel toggle-right ${isSignUp ? 'hidden' : ''}`}>
                                <h1>Hello, Friend!</h1>
                                <p>Register with your personal details to use all site features</p>
                                <button onClick={handleToggle}>Sign Up</button>
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
