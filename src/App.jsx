import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import fullCardData from './components/index/cardData';
import Home from './pages/Home';
import ProfilePage from './pages/ProfilePage';
import ViewTripsPage from './pages/ViewTripsPage';
import CreateNewTripPage from './pages/CreateNewTripPage';
import CreateNewLogPage from './pages/CreateNewLogPage';
import ViewMap from './pages/ViewMap';
import MenuOverlay from './components/menu-overlay/Menu';
import UpdateAccountPage from './pages/UpdateAccountPage';
import PlacesBeenPage from './pages/PlacesBeenPage';
import SavedPage from './pages/SavedPage';
import Splash from './pages/Splash';
import SignInPage from './pages/SignInPage';
import LoginPage from './pages/LoginPage';
import SettingsPage from './pages/SettingsPage';
import PrivacyPage from './pages/PrivacyPage';
import { ref, push } from 'firebase/database';
import { db } from './main';

export default function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [cards, setCards] = useState(fullCardData);

    const addCard = (log) => {
        const newCard = {
            id: Date.now(),
            userImg: "/img/hanna_pan.jpg",
            userName: "hannapan",
            place: log.destination,
            location: "User entered", // Update this if you collect location
            rating: `${log.rating}/5`,
            images: log.file ? log.file.map((f, i) => ({
                src: URL.createObjectURL(f),
                alt: `Uploaded image ${i + 1}`
            })) : [],
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
    };
    

    return (
        <>
            <Routes>
                <Route path="/" element={<Home openMenu={() => setMenuOpen(true)} />}/>
                <Route path="/splash" element={<Splash />}/>
                <Route path="/sign-in" element={<SignInPage />}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/profile" element={<ProfilePage openMenu={() => setMenuOpen(true)} />} />
                <Route path="/view-trips" element={<ViewTripsPage openMenu={() => setMenuOpen(true)}/>} />
                <Route path="/create-new-trip" element={<CreateNewTripPage openMenu={() => setMenuOpen(true)}/>} />
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
