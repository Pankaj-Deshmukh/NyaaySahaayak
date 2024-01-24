import React, { useRef } from 'react'
import './css/Account.css'
import { X } from 'lucide-react';

function Account({ onClose }) {
    const accountref = useRef();
    const closeAccount = (e) => {
        if (accountref.current === e.target) {
            onClose();
        }
    }
    return (
        <div ref={accountref} onClick={closeAccount} className='accountCover'>
            <div className="popup-container">
                <div className='x' onClick={onClose}><X /></div>
                <h2>User Information</h2>
                <hr />
                <p><strong>User Name:</strong> John Doe</p>
                <hr />
                <p><strong>Email:</strong> john.doe@example.com</p>
                <hr />
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Account