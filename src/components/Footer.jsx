import React from 'react';
import { Link } from 'react-router';

export default function Footer() {
    return (
        <footer className="bottom-nav">
            <Link to="/">
                <span className="material-symbols-outlined">home</span>
            </Link>
            <a href="view-trips.html"><span className="material-symbols-outlined">format_list_bulleted</span></a>
            <a href="create-new-log.html"><span className="material-symbols-outlined">add_box</span></a>
            <a href="view-map.html"><span className="material-symbols-outlined">map</span></a>
            <Link to="/profile">
                <span className="material-symbols-outlined">account_circle</span>
            </Link>
        </footer>
    );
}
