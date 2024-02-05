import React, { useState } from 'react';

import './Search.css';


function Search({ handleSearch }) {
    const [inputValue, setInputValue] = useState('');
    const [year, setYear] = useState(''); // State for the year filter
  
    const onSearchClick = () => {
      handleSearch(inputValue, year);
    };
  
    return (
      <div className="search-container">
        <input 
          type="text"
          className="search-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search Movies..."
        />
        <input 
          type="text"
          className="search-input"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Year"
        />
        {}
        <button className="search-button" onClick={onSearchClick}>Search</button>
      </div>
    );
  }
  export default Search;