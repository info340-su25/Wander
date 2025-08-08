import React from 'react';
import Footer from '../Footer';

function Saved(props) {
    const savedData = props.savedData;
    return (
        <div>
            <header className="saved-header">
                {/* COME BACK TO THIS LATER */}
                {/* <nav className="d-flex justify-content-between align-items-center">
                    
                </nav> */}
                <button className="material-symbols-outlined back-btn" onClick={() => navigate(-1)}>arrow_back</button>
                {/* <h1 className="settings-title"></h1> */}
                <button className="material-symbols-outlined menu-btn" onClick={props.openMenu}>menu</button>
            </header>

            <main className="saved-container">
                <div className="saved-content">
                    <div className="saved-heading-container">
                        <h1 class="saved-title">Saved</h1>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row g-3 justify-content-center">
                        {savedData.map((trip) => (
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

export default Saved;