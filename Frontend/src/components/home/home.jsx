import React from 'react'
import { useState, useRef } from 'react'
import Style from './home.module.css'
import { SearchBar, searchTerm } from '../searchBar/searchBar.jsx'
// import searchTerm from '../searchBar/searchBar.jsx'
import DialogueBox from '../dialogueBox/dialogueBox.jsx'
import User from '../user/user.jsx'
import SearchHistory from '../searchHistory/searchHistory.jsx'
import TypingHeading from './typingEffect.jsx'

// react icons ...
import { MdOutlineDoubleArrow } from "react-icons/md";
import { FaUserLarge } from "react-icons/fa6";



function Home() {
  const [mode, setMode] = useState(false);
  const changeMode = () => {
    setMode(e => !e);
  }
  // for storing user details in local storage.
  const [userDetails1, setUserDetails] = useState({
    username: localStorage.getItem('username'),
    email: localStorage.getItem('email')
  })

  console.log("SEARCH TERM:" + searchTerm);

  const [popup, setPopup] = useState(false);
  const showUser = () => {
    setPopup(e => !e);
  }
  // const [show_history,setShow_history] = useState(false);
  // onClick={setShow_history(e => !e)}
  // , width:show_history ? 0 : "280px"

  const popupRef = useRef();
  const closePopup = (e) => {
    if (popupRef.current === e.target) {
      setPopup(false);
    }
  }

  return (
    <div className={Style.main}>
      {/* popup user box .... */}
      {popup && <div className={Style.popbg} onClick={closePopup} ref={popupRef}>
        <div className={Style.popup}>
          <User changeMode={changeMode} mode={mode} username={userDetails1.username} email={userDetails1.email} />
        </div>
      </div>}
      <div className={Style.history} style={{ backgroundColor: mode ? "#022B3A" : "" }}>
        <h1 title='your history goes here' style={{ color: mode ? "#E1E5F2" : "" }}>HISTORY</h1>
        <SearchHistory />
        <SearchHistory />
      </div>
      <div className={Style.body} style={{ backgroundColor: mode ? "#011D27" : "" }}>
        <div className={Style.arrow} ><MdOutlineDoubleArrow /></div>
        <div className={Style.header}>
          <div className={Style.img} onClick={showUser}><FaUserLarge /></div>
          <TypingHeading mode={mode} />
        </div>
        <div className={Style.middle}>
          <div className={Style.queryboxbg}>
            <div className={Style.querybox}>
              <DialogueBox />
              <DialogueBox />
              {searchTerm}
              <DialogueBox />
              <DialogueBox />
              <DialogueBox />
            </div>
          </div>
        </div>
        <div className={Style.footer}>
          <SearchBar />
        </div>
      </div>
    </div>
  )
}

export default Home