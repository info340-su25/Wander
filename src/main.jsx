import { StrictMode } from 'react'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App.jsx';
import 'leaflet/dist/leaflet.css';
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM7d0lv38ZsVf-uqY2Xpyoyy2Iyp85maE",
  authDomain: "wander-6934e.firebaseapp.com",
  projectId: "wander-6934e",
  databaseURL: "https://wander-6934e-default-rtdb.firebaseio.com",
  storageBucket: "wander-6934e.firebasestorage.app",
  messagingSenderId: "828037450269",
  appId: "1:828037450269:web:48fdab80b85b13991d94f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
