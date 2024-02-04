import React, { useState, useRef, useEffect } from 'react';
import { MdOutlineFileUpload } from "react-icons/md";
import './searchBar.css';
import { useAnswer } from '../../hooks/searchBody';

function SearchBar() {
  const textAreaRef = useRef(null);
  const [val, setVal] = useState('');
  const handleChange = (e) => {
    setVal(e.target.value);
}

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
      />
      <div className="upload">
        <MdOutlineFileUpload />
      </div>
    </div>
  );
}

export default SearchBar;
