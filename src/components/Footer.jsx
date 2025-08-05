import React from 'react';
import { Link } from 'react-router';

export default function Footer() {
    return (
        <footer className="bottom-nav">
            <Link to="/">
                <span className="material-symbols-outlined">home</span>
            </Link>
            <Link to="/view-trips">
                <span className="material-symbols-outlined">format_list_bulleted</span>
            </Link>
            <Link to="/create-log">
                <span className="material-symbols-outlined">add_box</span>
            </Link>
            <Link to="/map">
                <span className="material-symbols-outlined">map</span>
            </Link>
            <Link to="/profile">
                <span className="material-symbols-outlined">account_circle</span>
            </Link>
        </footer>
    );
}
