import React from 'react';

export default function Footer() {
    return (
        <footer className="bottom-nav">
            <a href="index.html"><span className="material-symbols-outlined">home</span></a>
            <a href="view-trips.html"><span className="material-symbols-outlined">format_list_bulleted</span></a>
            <a href="create-new-log.html"><span className="material-symbols-outlined">add_box</span></a>
            <a href="view-map.html"><span className="material-symbols-outlined">map</span></a>
            <a href="profile.html"><span className="material-symbols-outlined">account_circle</span></a>
        </footer>
    );
}
