import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

function ViewMap({openMenu}) {
    const [searchTerm, setSearchTerm] = useState('');

    // filters stuff later

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    }

    return (
        <div>
            <header className="view-header">
                <Navigation openMenu={openMenu}/>
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

            <Footer />
        </div>
    );
}

export default ViewMap;