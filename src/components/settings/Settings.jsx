import React from 'react';
import { useNavigate } from 'react-router';

export default function Settings({ openMenu }) {
    const navigate = useNavigate();

    return (
        <div className="settings-page">
            <header className="settings-header">
                <button className="material-symbols-outlined back-btn" onClick={() => navigate(-1)}>arrow_back</button>
                <h1 className="settings-title">Settings</h1>
                <button className="material-symbols-outlined menu-btn" onClick={openMenu}>menu</button>
            </header>

            <main className="settings-body">
                <div className="setting-option">
                    <span className="material-symbols-outlined icon">person</span>
                    <div className="setting-text">
                        <p className="setting-title">Your account</p>
                        <p className="setting-description">Change email, change password</p>
                    </div>
                    <span className="material-symbols-outlined arrow">chevron_right</span>
                </div>

                <hr className="setting-divider" />

                <div className="setting-option">
                    <span className="material-symbols-outlined icon">lock</span>
                    <div className="setting-text">
                        <p className="setting-title">Privacy</p>
                        <p className="setting-description">Manage information you see and share on Wander</p>
                    </div>
                    <span className="material-symbols-outlined arrow">chevron_right</span>
                </div>
            </main>
        </div>
    );
}