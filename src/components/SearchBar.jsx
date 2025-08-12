import React from 'react';
import { useState } from 'react';
import "../styles/searchBar.css";

  function SearchBar ({onSearch}) {
    const [query,setQuery] = useState("");
    const submit  = (e) => {
      e.preventDefault(); {/*prevents the page from refreshing with every change in input */}
      if (query.trim()) onSearch(query); {/*removes any empty input */}
    };
  return (
    <div>
        <form onSubmit={submit} className='search-bar'>
          <input type='text' placeholder='Search Movie...' value={query}
          onChange={(e) => setQuery(e.target.value)} /> {/*changes the value with every letter input */}
          <button type='submit'>Search</button>
        </form>
    </div>
  );
}

export default SearchBar