import React, { useState } from 'react';
import './css/home.css';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  const handleSearch = () => {
    console.log("Search Term: ", searchTerm);
    // Send the search term to the server
    fetch('http://localhost:3001/search', {
      method: 'POST',
      body: JSON.stringify({ textInput: searchTerm }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        // Check if data.history is defined before setting the state
        if (data.history) {
          setSearchHistory(data.history);
        }
      })
      .catch((error) => console.error('Error saving search history:', error));
  };
  return (
    <>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Home_Page</title>
          <link rel="stylesheet" href="home.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        </head>
        <body>
          <div className="Body">
            <div className="History">
              <div className="items"><h3 id="HistoryHeading">HISTORY</h3></div>
              {searchHistory.map((item, index) => (
                <div key={index} className="items">
                  <p className="history-content">{item.content}</p>
                </div>
              ))}
            </div>
            <div className="Main-body">
              <button className="ProfileButton"><i className="fa-solid fa-user"></i></button>
              <div className="Header">
                <h1 className="body-heading">NyaaySahaayak</h1>
              </div>
              <div className="Middle">
                {/* comment the scroll-body to get the background image */}
                <div className="scroll-body">
                  <div className="content-box">
                    {/* Render your data here */}
                    {searchHistory.map((item, index) => (
                      <div key={index} className="items">
                        <p className="history-content">{item.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="Footer">
                <input className="SearchBar" placeholder="Search..." type="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <button className="SearchButton" onClick={handleSearch}><i className="fa-solid fa-search"></i></button>
                <button className="voice-search"><i className="fa-solid fa-microphone"></i></button>
              </div>
            </div>
          </div>
        </body>
      </html>
    </>
  )
}
