import React, { useState } from 'react';
import Footer from '../components/Footer';

function ViewTrips() {

    const [trips] = useState([
        {id: 1, place: 'Rome', alt: "Colosseum in Rome, Italy", path: '/img/david-kohler-VFRTXGw1VjU-unsplash.jpg'},
        {id: 2, place: 'Lisbon', alt: "Tram car in Lisbon, Portugal", path: '/img/aayush-gupta-ljhCEaHYWJ8-unsplash.jpg'},
        {id: 3, place: 'Nice', alt: "Fountain park in Nice, France", path: '/img/nick-karvounis-2rsK_rdiDJ8-unsplash.jpg'},
        {id: 4, place: 'Tokyo', alt: "Tokyo Tower in Tokyo, Japan", path: '/img/louie-martinez-IocJwyqRv3M-unsplash.jpg'},
        {id: 5, place: 'Phuket', alt: "Boats in blue water traveling between mountains in Phuket, Thailand", path: '/img/mike-swigunski-Of_u2aPwugw-unsplash.jpg'},
        {id: 6, place: 'Cairo', alt: "Great Pyramids in Cairo, Egypt", path: '/img/chris-andrawes-75q9AxjIUr8-unsplash.jpg'},
        {id: 7, place: 'Shanghai', alt: "The Bund in Shanghai, China", path: '/img/li-yang-5h_dMuX_7RE-unsplash.jpg'},
        {id: 8, place: 'Fiji', alt: "Sandy beach in Fiji", path: '/img/nicolas-weldingh-Gg2VVz2ycAc-unsplash.jpg'}
    ]);

    return (
        <div>
            <header className="view-trips-header">
                <nav>
                    <ul>
                        <li><a href="menu.html" className="btn"><span className="material-symbols-outlined">menu</span></a></li>
                    </ul>
                </nav>
            </header>

            <main className="view-trips-container">
                <div className="view-trips-content">
                    <div className="view-trips-heading-container">
                        <h1 class="view-trips-title">My Trips</h1>
                        <h1 class="add-new-trip"><a href="create-new-trip.html">Add a new trip <span class="material-symbols-outlined">add</span></a></h1>
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

            <Footer/>
        </div>
    );
}

export default ViewTrips;