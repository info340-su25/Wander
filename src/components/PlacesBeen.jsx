import React, { useState } from 'react';

function PlacesBeen() {

    const [trips] = useState([
        {id: 1, place: 'Florence', alt: "Cathedral of Santa Maria del Fiore in Florence, Italy", path: '/img/alex-ghizila-k5NVjNCPR48-unsplash.jpg'},
        {id: 2, place: 'Shanghai', alt: "The Bund in Shanghai, China", path: '/img/li-yang-5h_dMuX_7RE-unsplash.jpg'}
    ]);

    return (
        <div>
            <header className="places-been-header">
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

            <main className="places-been-container">
                <div className="places-been-content">
                    <div className="places-been-heading-container">
                        <h1 class="places-been-title">Places Been</h1>
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

            <Footer />
        </div>
    );
}

export default PlacesBeen;