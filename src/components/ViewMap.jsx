import React, { useState } from 'react';

function ViewMap() {
    const [searchTerm, setSearchTerm] = useState('');

    // filters stuff later

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    }

    return (
        <div>
            <header className="view-header">
                <nav>
                    <ul>
                        <li><a href="menu.html" className="btn"><span className="material-symbols-outlined">menu</span></a></li>
                    </ul>
                </nav>
            </header>

            <main className="view-container">
                <div className="view-content">

                    <h1 className="view-title">Destinations</h1>

                    <div className="view-search">
                        <input type="text" className="search-input" placeholder="Search" value={searchTerm} onChange={handleSearchChange} />
                    </div>

                    <section className="view-filters">
                        <button className="filter-btn dark-blue-btn">
                            <span className="material-symbols-outlined">location_on</span> Nearby
                        </button>
                        <button className="filter-btn dark-pink-btn">
                            <span className="material-symbols-outlined">bookmark</span> Saved
                        </button>
                        <button className="filter-btn dark-pink-btn">
                            <span className="material-symbols-outlined">person_heart</span> Recommendations
                        </button>
                        <button className="filter-btn">
                            <span className="material-symbols-outlined">filter_alt</span> Filter by
                        </button>
                    </section>
                </div>

                <div className="map-container">
                    <img src="/img/map.jpg" alt="digital map image" className="view-map-img" />
                </div>
            </main>

            <footer className="view-bottom-nav">
                <a href="index.html"><span className="material-symbols-outlined">home</span></a>
                <a href="view-trips.html"><span className="material-symbols-outlined">format_list_bulleted</span></a>
                <a href="create-new-log.html"><span className="material-symbols-outlined">add_box</span></a>
                <a href="view-map.html"><span className="material-symbols-outlined">map</span></a>
                <a href="profile.html"><span className="material-symbols-outlined">account_circle</span></a>
            </footer>
        </div>
    );
}

export default ViewMap;