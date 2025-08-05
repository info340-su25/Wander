import React from 'react';
import { Routes, Route } from 'react-router'; // you're using react-router, not react-router-dom
import Home from './pages/Home';
import ProfilePage from './pages/ProfilePage';
import ViewTrips from './pages/ViewTrips';
import CreateNewLog from './pages/CreateNewLog';
import ViewMap from './pages/ViewMap';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/view-trips" element={<ViewTrips />} />
            <Route path="/create-log" element={<CreateNewLog />} />
            <Route path="/map" element={<ViewMap />} />
            {/* You can add more routes later here like /post/:id */}
        </Routes>
    );
}
