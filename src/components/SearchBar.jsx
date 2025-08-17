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
        <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="city"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Enter city name"
                    aria-label="Search weather"
                    autoFocus

                />
                {!query ? <button type="submit" className='search-button' disabled>Search
                </button> :
                    
                <button type="submit" className='search-button'>
                    Search
                </button>
                }
            </form>
        </div>
    );
};

export default SearchBar;