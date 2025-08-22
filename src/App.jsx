import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import fullCardData from './components/index/cardData';
import Home from './pages/Home';
import ProfilePage from './pages/ProfilePage';
import ViewTripsPage from './pages/ViewTripsPage';
import tripsData from './components/view-trips/viewTripData';
import CreateNewTripPage from './pages/CreateNewTripPage';
import newTripData from './components/create-new-trip/tripData';
import CreateNewLogPage from './pages/CreateNewLogPage';
import ViewMap from './pages/ViewMap';
import MenuOverlay from './components/menu-overlay/Menu';
import UpdateAccountPage from './pages/UpdateAccountPage';
import PlacesBeenPage from './pages/PlacesBeenPage';
import SavedPage from './pages/SavedPage';
import Splash from './pages/Splash';
import SignInPage from './pages/SignInPage';
import DEFAULT_USERS from './components/signin/signIn.json'
import LoginPage from './pages/LoginPage';
import SettingsPage from './pages/SettingsPage';
import PrivacyPage from './pages/PrivacyPage';
import { ref, push } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from './main';

export default function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [cards, setCards] = useState(fullCardData);
    const[trips, setTrips] = useState(tripsData);
    const [tripId, setTripId] = useState(trips.length + 1);
    const[user, setUser] = useState(DEFAULT_USERS[0]);

    useEffect(() => {
        const auth = getAuth();

        onAuthStateChanged(auth, (firebaseUserObj) => {
            console.log("auth state changed");
            console.log(firebaseUserObj);
            setUser(firebaseUserObj);
        })
    }, [])

    const addCard = (log) => {
        const destination = encodeURIComponent(log.destination);
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${destination}`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                const addressParts = data.length > 0 ? data[0].display_name.split(',') : [];
                const trimmedParts = addressParts.slice(-3).map(part => part.trim());
                const attractionLocation = `${trimmedParts[0]}, ${trimmedParts[2]}`;

                const newCard = {
                    id: Date.now(),
                    userImg: "/img/hanna_pan.jpg",
                    userName: "Hanna",
                    place: log.destination,
                    location: attractionLocation,
                    rating: `${log.rating}/5`,
                    images: Array.isArray(log.file) && log.file.length > 0
                        ? log.file.map((f, i) => ({
                            src: URL.createObjectURL(f),
                            alt: f.name || `Uploaded image ${i + 1}`
                        }))
                        : [],
                    text: log.comments,
                    tags: log.tags.map((tag) => ({
                        label: tag.replace(/-/g, ' '),
                        className: tag
                    })),
                    timestamp: "Just now",
                    likes: 0,
                    liked: false,
                    saved: false
                };

                setCards((prevLogs) => [newCard, ...prevLogs]);

      
                const cardsRef = ref(db, 'cards');
                push(cardsRef, newCard)
                    .then(() => {
                        console.log("New card added to Firebase!");
                    })
                    .catch((error) => {
                        console.error("Error adding card to Firebase:", error);
                    });
            });
    };

    const addTrip = (trip) => {
        const newTrip = {
            id: tripId,
            place: trip.destination,
            alt: trip.file ? trip.file.name : `Trip to ${trip.destination}`,
            path: trip.file ? URL.createObjectURL(trip.file) : "/img/default-trip.jpg",
            description: trip.description,
            attractions: trip.attractions,
            collaborators: trip.collaborators
        };

        setTrips((prevTrips) => [newTrip, ...prevTrips]);
        setTripId(tripId + 1);

        const tripsRef = ref(db, 'trips');
        push(tripsRef, newTrip)
            .then(() => {
                console.log("New trip added to Firebase!");
            })
            .catch((error) => {
                console.error("Error adding trip to Firebase:", error);
            });
    };
    

    return (
        <>
            <Routes>
                <Route path="/" element={<Home openMenu={() => setMenuOpen(true)} />}/>
                <Route path="/splash" element={<Splash />}/>
                <Route path="/sign-in" element={<SignInPage />}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/profile" element={<ProfilePage openMenu={() => setMenuOpen(true)} />} />
                <Route path="/view-trips" element={<ViewTripsPage openMenu={() => setMenuOpen(true)} trips={trips}/>} />
                <Route path="/create-new-trip" element={<CreateNewTripPage openMenu={() => setMenuOpen(true)} addTrip={addTrip}/>} />
                <Route path="/create-log" element={<CreateNewLogPage openMenu={() => setMenuOpen(true)} addCard={addCard}/>} />
                <Route path="/map" element={<ViewMap openMenu={() => setMenuOpen(true)}/>} />
                <Route path="/update-account" element={<UpdateAccountPage openMenu={() => setMenuOpen(true)} />} />
                <Route path="/places-been" element={<PlacesBeenPage openMenu={() => setMenuOpen(true)}/>}/>
                <Route path="/saved" element={<SavedPage openMenu={() => setMenuOpen(true)}/>}/>
                <Route path="/settings" element={<SettingsPage openMenu={() => setMenuOpen(true)} />} />
                <Route path="/privacy-settings" element={<PrivacyPage openMenu={() => setMenuOpen(true)} />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>

            <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
    );
}
