import React, { useRef } from 'react'
import './css/Account.css'
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Account({ onClose, username, email }) {
    const navigate = useNavigate();
    const accountref = useRef();
    const closeAccount = (e) => {
        if (accountref.current === e.target) {
            onClose();
        }
    }
//   function for logging out.(Should call this function when the logoutButton is clicked in AccountDetails)
const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
    console.log('User logged out');
  };
    return (
        <div ref={accountref} onClick={closeAccount} className='accountCover'>
            <div className="popup-container">
                <div className='x' onClick={onClose}><X /></div>
                <h2>User Information</h2>
                <hr />
                <p><strong>User Name:</strong> {username}</p>
                <hr />
                <p><strong>Email:</strong> {email}</p>
                <hr />
                <button onClick={handleLogout} >Logout</button>
            </div>
        </div>
    )
}

export default Account