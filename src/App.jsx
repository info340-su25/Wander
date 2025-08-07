import React, { useState } from 'react';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import ProfilePage from './pages/ProfilePage';
import ViewTripsPage from './pages/ViewTripsPage';
import CreateNewTripPage from './pages/CreateNewTripPage';
import CreateNewLogPage from './pages/CreateNewLogPage';
import ViewMap from './pages/ViewMap';
import MenuOverlay from './components/menu-overlay/Menu';

export default function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <Routes>
                <Route path="/" element={<Home openMenu={() => setMenuOpen(true)} />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/view-trips" element={<ViewTripsPage />} />
                <Route path="/create-new-trip" element={<CreateNewTripPage />} />
                <Route path="/create-log" element={<CreateNewLogPage />} />
                <Route path="/map" element={<ViewMap />} />
            </Routes>

            {menuOpen && <MenuOverlay onClose={() => setMenuOpen(false)} />}
        </>
    );
}
