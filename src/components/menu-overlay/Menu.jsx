import React from 'react';
import { Link, useNavigate } from 'react-router';
import { getAuth, signOut } from 'firebase/auth';

export default function MenuOverlay({ onClose, isOpen }) {
    let menuClassName = 'overlay-menu';
    if (isOpen) {
        menuClassName += ' open';
    }

    const navigate = useNavigate();
    const handleSignOut = (event) => {
        onClose();
        const auth = getAuth();
        signOut(auth);
        navigate('/splash');
    }

    return (
        <div className={menuClassName}>
            <div className="menu-header">
                <h2 className="menu-title">Menu</h2>
                <button className="material-symbols-outlined close-btn" onClick={onClose}>close</button>
            </div>

            <div className="menu-content">
                <div className="menu-buttons">
                    <Link to="/settings" className="menu-button" onClick={onClose}><span className="material-symbols-outlined">settings</span>Settings</Link>
                    <Link to="/places-been" className="menu-button" onClick={onClose}><span className="material-symbols-outlined">send</span>Places been</Link>
                    <Link to="saved" className="menu-button" onClick={onClose}><span className="material-symbols-outlined">bookmark</span>Saved</Link>
                    <button className="menu-button" onClick={handleSignOut}><span className="material-symbols-outlined">move_item</span>Log out</button>
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
