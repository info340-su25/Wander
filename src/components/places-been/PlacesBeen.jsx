import React from 'react';
import Footer from '../Footer';
import { useNavigate } from 'react-router';

function PlacesBeen(props) {
    const navigate = useNavigate();
    const placesBeenData = props.placesBeenData;
    return (
        <div>
            <header className="places-been-header">
                <button className="material-symbols-outlined back-btn" onClick={() => navigate(-1)}>arrow_back</button>
                <button className="material-symbols-outlined menu-btn" onClick={props.openMenu}>menu</button>
            </header>

            <main className="places-been-container">
                <div className="places-been-content">
                    <div className="places-been-heading-container">
                        <h1 className="places-been-title">Places Been</h1>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row g-3 justify-content-center">
                        {placesBeenData.map((trip) => (
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