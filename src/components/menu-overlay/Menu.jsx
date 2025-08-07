import React from 'react';

export default function MenuOverlay({ onClose }) {
    return (
        <div className="overlay-menu">
            <div className="menu-header">
                <h2 className="menu-title">Menu</h2>
                <button className="material-symbols-outlined close-btn" onClick={onClose}>close</button>
            </div>

            <div className="menu-content">
                <div className="menu-buttons">
                    <a className="menu-button"><span className="material-symbols-outlined">settings</span>Settings</a>
                    <a className="menu-button"><span className="material-symbols-outlined">send</span>Places been</a>
                    <a className="menu-button"><span className="material-symbols-outlined">bookmark</span>Saved</a>
                    <a href="/splash.html" className="menu-button"><span className="material-symbols-outlined">move_item</span>Log out</a>
                </div>
            </div>

            <div className="menu-footer">
                <div className="contact">
                    <p>Contact us</p>
                    <p>at <strong><u>wanderhelp@com</u></strong></p>
                </div>
                <div className="copyright">
                    <p>Wander © 2025</p>
                </div>
            </div>
        </div>
    );
}