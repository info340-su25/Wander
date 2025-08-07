import React from 'react';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import ProfilePage from './pages/ProfilePage';
import ViewTripsPage from './pages/ViewTripsPage';
import CreateNewLogPage from './pages/CreateNewLogPage';
import ViewMap from './pages/ViewMap';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/view-trips" element={<ViewTripsPage />} />
            <Route path="/create-log" element={<CreateNewLogPage />} />
            <Route path="/map" element={<ViewMap />} />
        </Routes>
    );
}
