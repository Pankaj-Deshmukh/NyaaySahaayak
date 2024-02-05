import React from 'react'
import { useState, useRef } from 'react'
import Style from './home.module.css'
import SearchBar from '../searchBar/searchBar.jsx'
import DialogueBox from '../dialogueBox/dialogueBox.jsx'
import User from '../user/user.jsx'
import SearchHistory from '../searchHistory/searchHistory.jsx'
import TypingHeading from './typingEffect.jsx'

// react icons ...
import { MdOutlineDoubleArrow } from "react-icons/md";
import { FaUserLarge} from "react-icons/fa6";



function Home() {
  const [mode,setMode] = useState(false);
  const changeMode = () => {
   setMode(e => !e);
  }

  const [popup, setPopup] = useState(false);
  const showUser = () => {
    setPopup(e => !e);
  }

  const popupRef = useRef();
  const closePopup = (e) => {
    if (popupRef.current === e.target) {
      setPopup(false);
    }
  }

  return (
    <div className={Style.main}>
      {popup && <div className={Style.popbg} onClick={closePopup} ref={popupRef}></div>}
      <div className={Style.history} style={{backgroundColor: mode ? "#022B3A" : "" }}>
        <h1 title='your history goes here' style={{color:mode ? "#E1E5F2" : ""}}>HISTORY</h1>
        <SearchHistory />
        <SearchHistory />
      </div>
      <div className={Style.body} style={{backgroundColor:mode ? "#011D27" : ""}}>
        <div className={Style.arrow}><MdOutlineDoubleArrow /></div>
        <div className={Style.header}>
          <div className={Style.img} onClick={showUser}><FaUserLarge /></div>
          <TypingHeading mode={mode}/>
        </div>
        <div className={Style.middle}>
          {popup && <div className={Style.popup}>
            <User changeMode={changeMode} mode={mode}/>
          </div>}
          <div className={Style.queryboxbg}>
            <div className={Style.querybox}>
              <DialogueBox />
              <DialogueBox />
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