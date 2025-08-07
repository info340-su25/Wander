import React, { useState } from 'react';
import { useNavigate } from 'react-router';

export default function Privacy({ openMenu }) {
    const navigate = useNavigate();
    const [isPublic, setIsPublic] = useState(false);

    const togglePrivacy = () => {
        setIsPublic((prev) => !prev);
    };

    return (
        <div className="settings-page">
            <header className="settings-header">
                <button className="material-symbols-outlined back-btn" onClick={() => navigate(-1)}>arrow_back</button>
                <h1 className="settings-title">Privacy</h1>
                <button className="material-symbols-outlined menu-btn" onClick={openMenu}>menu</button>
            </header>

            <main className="settings-body">
                <div className="privacy-toggle">
                    <p className="setting-title">Public Account</p>
                    <label className="switch">
                        <input type="checkbox" checked={isPublic} onChange={togglePrivacy} />
                        <span className="slider round"></span>
                    </label>
                </div>
            </main>
        </div>
    );
}
