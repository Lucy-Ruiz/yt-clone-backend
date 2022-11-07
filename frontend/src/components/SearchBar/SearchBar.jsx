import React, { useState } from 'react';
import './SearchBar.css'

const SearchBar = (props) => {

    const[searchTerm, setSearchTerm] = useState(' ');

    function handleSubmit(event) {
        event.preventDefault();
        console.log('searchTerm inside handleSubmit:', searchTerm);
        props.getVideoResultsforSearchBar(searchTerm);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Enter a video to search: </label>
            <input type='text' value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}></input>
            <button type='submit'>Search</button>
        </form>
    );
}

export default SearchBar;