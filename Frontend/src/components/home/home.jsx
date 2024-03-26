import React from 'react'
import { useState, useRef } from 'react'
import Style from './home.module.css'
import SearchBar from '../searchBar/searchBar.jsx'
// import searchTerm from '../searchBar/searchBar.jsx'
import DialogueBox from '../dialogueBox/dialogueBox.jsx'
import User from '../user/user.jsx'
import SearchHistory from '../searchHistory/searchHistory.jsx'
import TypingHeading from './typingEffect.jsx'

// react icons ...
import { MdOutlineDoubleArrow } from "react-icons/md";
import { FaUserLarge} from "react-icons/fa6";



function Home() {
  const [searchTerm,setSearchTerm] = useState("");

  const [mode,setMode] = useState(false);
  const changeMode = () => {
   setMode(e => !e);
  }

  
  console.log("SEARCH TERM:"+searchTerm);

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


  const handleSearchTermChange = (term) => {
    console.log("Search is: "+term)
    setSearchTerm(term);
  }

  return (
    <div className={Style.main}>
      {popup && <div className={Style.popbg} onClick={closePopup} ref={popupRef}></div>}
      <div className={Style.history} style={{backgroundColor: mode ? "#022B3A" : "" }}>
        <h1 title='your history goes here' style={{color:mode ? "#E1E5F2" : ""}}>HISTORY</h1>
        <SearchHistory searchTerm = {searchTerm}/>
        <SearchHistory searchTerm = {searchTerm}/>
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
               {searchTerm}  ;
              <DialogueBox />
              <DialogueBox />
              <DialogueBox />
            </div>
          </div>
        </div>
        <div className={Style.footer}>
          <SearchBar onSearchTermChange={handleSearchTermChange}/>
        </div>
      </div>
    </div>
  )
}

export default Home