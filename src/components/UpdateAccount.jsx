import React, { useState } from 'react';

function UpdateAccount() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleClick = (event) => {
        event.preventDefault();
        handleSubmit(event);
    };

    return (
        <div>
            <header className="update-account-header">
                {/* COME BACK TO THIS LATER */}
                <nav className="d-flex justify-content-between align-items-center">
                    {/* COME BACK TO THIS LATER */}
                    <div className="back-arrow">
                        <a href="menu.html"><span className="material-symbols-outlined">arrow_back</span></a>
                    </div>
                    {/* COME BACK TO THIS LATER */}
                    <h1 className="update-account-title">Update Account</h1>
                    <ul>
                        <li><a href="menu.html" className="btn"><span className="material-symbols-outlined">menu</span></a></li>
                    </ul>
                </nav>
            </header>

            <main className="update-account-content">

                <div className="account-form">
                    <label className="form-label">Change Email</label>
                    <input type="email" placeholder="Enter an email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button className="update-btn" onClick={handleEmailUpdate}>Update</button>
                </div>

                <div className="account-form">
                    <label className="form-label">Change Password</label>
                    <input type="password" placeholder="Enter a password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>


                <div className="account-form">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <button className="update-btn" onClick={handlePasswordUpdate}>Update</button>
                </div>
            </main>

            <footer className="bottom-nav">
                <a href="index.html"><span className="material-symbols-outlined">home</span></a>
                <a href="view-trips.html"><span className="material-symbols-outlined">format_list_bulleted</span></a>
                <a href="create-new-log.html"><span className="material-symbols-outlined">add_box</span></a>
                <a href="view-map.html"><span className="material-symbols-outlined">map</span></a>
                <a href="profile.html"><span className="material-symbols-outlined">account_circle</span></a>
            </footer>
        </div>
    );
}

export default UpdateAccount;