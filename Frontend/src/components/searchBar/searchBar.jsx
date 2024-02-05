import React, { useState, useRef, useEffect } from 'react';
import { MdOutlineFileUpload } from "react-icons/md";
import './searchBar.css';
// import { useAnswer } from '../../hooks/searchBody';

function SearchBar() {
  const textAreaRef = useRef(null);
  const [val, setVal] = useState('');
  const handleChange = (e) => {
    setVal(e.target.value);
    setSearchTerm(e.target.value);
}

const [searchTerm, setSearchTerm] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [highestKeywordDescription, setHighestKeywordDescription] = useState('');
  const [showAccount, setAccount] = useState(false);
  const [userDetails1, setUserDetails] = useState({
    username: localStorage.getItem('username'),
    email: localStorage.getItem('email')
  })

const handleSearch = () => {
  console.log("Search Term: ", searchTerm);

  // Send the search term to the server
  fetch('http://localhost:3002/search', {
    method: 'POST',
    body: JSON.stringify({ textInput: searchTerm }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Response from server:", data);

      // Check if description_with_highest_keywords is defined before setting the state
      if (data.description_with_highest_keywords) {
        setHighestKeywordDescription(data.description_with_highest_keywords);

        // Optional: Update search history if available in the server response
        if (data.history) {
setSearchHistory(data.history.slice(0, 7));          }
      } else {
        console.log("No description_with_highest_keywords in the response from the server.");
      }
    })
    .catch((error) => console.error('Error saving search history:', error));
};

useEffect(() => {
    textAreaRef.current.style.height = 'auto';
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  }, [val])

  return (
    <div className="searchbox">
      <textarea
        value={val}
        onChange={handleChange}
        placeholder="Type something..."
        ref={textAreaRef}
        rows={1}
        content = {searchTerm}
      />
      <div className="upload">
        <MdOutlineFileUpload onClick={handleSearch}/>
      </div>
    </div>
  );
}

export default SearchBar;
