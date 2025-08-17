import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router';
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

export default function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <Routes>
                <Route path="/" element={<Home openMenu={() => setMenuOpen(true)} />} />
                <Route path="/splash" element={<Splash />}/>
                <Route path="/sign-in" element={<SignInPage />}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/profile" element={<ProfilePage openMenu={() => setMenuOpen(true)} />} />
                <Route path="/view-trips" element={<ViewTripsPage openMenu={() => setMenuOpen(true)}/>} />
                <Route path="/create-new-trip" element={<CreateNewTripPage openMenu={() => setMenuOpen(true)}/>} />
                <Route path="/create-log" element={<CreateNewLogPage openMenu={() => setMenuOpen(true)}/>} />
                <Route path="/map" element={<ViewMap openMenu={() => setMenuOpen(true)}/>} />
                <Route path="/update-account" element={<UpdateAccountPage openMenu={() => setMenuOpen(true)} />} />
                <Route path="/places-been" element={<PlacesBeenPage openMenu={() => setMenuOpen(true)}/>}/>
                <Route path="/saved" element={<SavedPage openMenu={() => setMenuOpen(true)}/>}/>
                <Route path="/settings" element={<SettingsPage openMenu={() => setMenuOpen(true)} />} />
                <Route path="/privacy-settings" element={<PrivacyPage openMenu={() => setMenuOpen(true)} />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>

            {menuOpen && <MenuOverlay onClose={() => setMenuOpen(false)} />}
        </>
    );
}
