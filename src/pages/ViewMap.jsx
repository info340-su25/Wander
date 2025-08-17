import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import '../leaflet-icons';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

function Recenter({ center, zoom }) {
    const map = useMap();
    useEffect(() => {
        map.setView(center, zoom);
    }, [center, zoom, map]);
    return null;
}

function ViewMap({openMenu}) {
    const [searchTerm, setSearchTerm] = useState('');

    // default location set to seattle
    const [center, setCenter] = useState([47.6097, -122.3425]);
    const [zoom, setZoom] = useState(13);

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        // use api to help convert string text to lat/lon coords to find location
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(value)}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (data.length > 0) {
                    const { lat: latitude, lon: longitude } = data[0];
                    setCenter([parseFloat(latitude), parseFloat(longitude)]);
                    setZoom(13);
                }
            })
            .catch((error) => {
                console.error('Geocoding error:', error);
            });
    };

    const handleNearby = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setCenter([latitude, longitude]);
            },
            () => alert('Unable to retrieve location')
        );
    };

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
                        <button className="filter-btn dark-blue-btn" onClick={handleNearby}>
                            <span className="material-symbols-outlined">location_on</span> Nearby
                        </button>
                    </section>
                </div>

                <div className="map-container">
                    <MapContainer center={center} zoom={zoom} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Recenter center={center} zoom={zoom} />
                        <Marker position={center}>
                            <Popup>
                                <strong>Your selected location</strong>
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default ViewMap;