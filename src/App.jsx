import React, { useState } from 'react'
import viteLogo from '/vite.svg'
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import DiscoveryFeed from './components/DiscoveryFeed';
import Footer from './components/Footer';

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
