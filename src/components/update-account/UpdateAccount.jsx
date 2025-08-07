import React, { useState } from 'react';

function UpdateAccount(props) {
    const userData = props.userData;

    const [email, setEmail] = useState(userData.email || '');
    const [password, setPassword] = useState(userData.password || '');
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

            <Footer />
        </div>
    );
}

export default UpdateAccount;