import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query.trim());
            setQuery('');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px' }}>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search by city, zip code, or landmark"
                aria-label="Search weather"
                style={{ flex: 1, padding: '8px' }}
            />
            <button type="submit" style={{ padding: '8px 16px' }}>
                Search
            </button>
        </form>
    );
};

export default SearchBar;