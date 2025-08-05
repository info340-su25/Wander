import React from 'react';
import { Routes, Route } from 'react-router'; // you're using react-router, not react-router-dom
import Home from './pages/Home';
import ProfilePage from './pages/ProfilePage';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<ProfilePage />} />
            {/* You can add more routes later here like /post/:id */}
        </Routes>
    );
}
