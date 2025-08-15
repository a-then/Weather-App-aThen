import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query);
            setQuery(''); // Clear the input after search
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Enter city name"
                aria-label="Search weather"
            
            />
            <button type="submit" className='search-button'>
                Search
            </button>
        </form>
    );
};

export default SearchBar;