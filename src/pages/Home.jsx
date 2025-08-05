import React, { useState } from 'react'
import viteLogo from '/vite.svg'
import Header from '../components/index/Header';
import SearchBar from '../components/index/SearchBar';
import Filters from '../components/index/Filters';
import DiscoveryFeed from '../components/index/DiscoveryFeed';
import Footer from '../components/Footer';

function App() {
    return (
        <>
            <Header />
            <main>
                <SearchBar />
                <Filters />
                <DiscoveryFeed />
            </main>
            <Footer />
        </>
    );
}


export default App
