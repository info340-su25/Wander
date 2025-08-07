import React, { useState } from 'react';

export default function SearchBar() {
    const [search, setSearch] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Search submitted:", search);
        // Future thing to worry about :D
    };
    
    return (
        <section className="search-bar">
            <form onSubmit={handleSubmit}>
                <span className="material-symbols-outlined">search</span>
                <input
                    type="text"
                    placeholder="Search a travel destination, attraction, etc."
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
            </form>
        </section>
    );
}