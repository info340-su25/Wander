import React from 'react';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import ProfilePage from './pages/ProfilePage';
import ViewTrips from './components/view-trips/ViewTrips';
import CreateNewLog from './components/create-new-log/CreateNewLog';
import ViewMap from './pages/ViewMap';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/view-trips" element={<ViewTrips />} />
            <Route path="/create-log" element={<CreateNewLog />} />
            <Route path="/map" element={<ViewMap />} />
        </Routes>
    );
}
