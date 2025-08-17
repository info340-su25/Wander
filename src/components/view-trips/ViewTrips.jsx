import React from 'react';
import {Link} from 'react-router';
import Footer from '../Footer';
import Navigation from '../Navigation';

function ViewTrips(props) {
    const tripsData = props.tripsData;
    const mappingElement = tripsData.map((trip) => (
                            <div key={trip.id} className="col-6 col-md-4 col-xl-3 d-flex justify-content-center mb-3">
                                <div className="trip-card">
                                    <img src={trip.path} alt={trip.alt} className="trip-img" />
                                    <h2 className="trip-label">{trip.place}</h2>
                                </div>
                            </div>));

    return (
        <div>
            <header className="view-trips-header">
                <Navigation openMenu={props.openMenu}/>
            </header>

            <main className="view-trips-container">
                <div className="view-trips-content">
                    <div className="view-trips-heading-container">
                        <h1 className="view-trips-title">My Trips</h1>
                        <h1 className="add-new-trip"><Link to="/create-new-trip">Add a new trip <span className="material-symbols-outlined">add</span></Link></h1>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row g-3 justify-content-center">
                        {mappingElement}
                    </div>
                </div>

            </main>

            <Footer/>
        </div>
    );
}

export default ViewTrips;