import React, { useState } from 'react';

function Saved() {

    const [trips] = useState([
        {id: 1, place: 'Taipei', alt: "View of Taipei 101 at night in Taipei, Taiwan", path: '/img/timo-volz-4M25kv8v7_0-unsplash.jpg'},
        {id: 2, place: 'Nice', alt: "Fountain park in Nice, France", path: '/img/nick-karvounis-2rsK_rdiDJ8-unsplash.jpg'},
        {id: 3, place: 'Lisbon', alt: "Tram car in Lisbon, Portugal", path: '/img/aayush-gupta-ljhCEaHYWJ8-unsplash.jpg'},
        {id: 4, place: 'Cannes', alt: "Rooftop view of Cannes port in Cannes, France", path: '/img/jim-thirion-5wSTD4OwPFo-unsplash.jpg'},
        {id: 5, place: 'London', alt: "View of Tower Bridge in London, England", path: '/img/charles-postiaux-Q6UehpkBSnQ-unsplash.jpg'}
    ]);

    return (
        <div>
            <header className="saved-header">
                {/* COME BACK TO THIS LATER */}
                <nav className="d-flex justify-content-between align-items-center">
                    {/* COME BACK TO THIS LATER */}
                    <div className="back-arrow">
                        <a href="menu.html"><span className="material-symbols-outlined">arrow_back</span></a>
                    </div>
                    {/* COME BACK TO THIS LATER */}
                    <ul>
                        <li><a href="menu.html" className="btn"><span className="material-symbols-outlined">menu</span></a></li>
                    </ul>
                </nav>
            </header>

            <main className="saved-container">
                <div className="saved-content">
                    <div className="saved-heading-container">
                        <h1 class="saved-title">Saved</h1>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row g-3 justify-content-center">
                        {trips.map((trip) => (
                            <div key={trip.id} className="col-6 col-md-4 col-xl-3 d-flex justify-content-center mb-3">
                                <div className="trip-card">
                                    <img src={trip.path} alt={trip.alt} className="trip-img" />
                                    <h2 className="trip-label">{trip.place}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </main>

            <footer className="bottom-nav">
                <a href="index.html"><span className="material-symbols-outlined">home</span></a>
                <a href="view-trips.html"><span className="material-symbols-outlined">format_list_bulleted</span></a>
                <a href="create-new-log.html"><span className="material-symbols-outlined">add_box</span></a>
                <a href="view-map.html"><span className="material-symbols-outlined">map</span></a>
                <a href="profile.html"><span className="material-symbols-outlined">account_circle</span></a>
            </footer>
        </div>
    );
}

export default Saved;