import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Footer from '../Footer';

function UpdateAccount(props) {
    const { userData, openMenu } = props;
    const navigate = useNavigate();

    const [email, setEmail] = useState(userData.email || '');
    const [password, setPassword] = useState(userData.password || '');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = () => {};
    const handleEmailUpdate = () => {};
    const handlePasswordUpdate = () => {};

    return (
        <div>
            <header className="settings-header">
                <button className="material-symbols-outlined back-btn" onClick={() => navigate(-1)}>arrow_back</button>
                <h1 className="settings-title">Update Account</h1>
                <button className="material-symbols-outlined menu-btn" onClick={openMenu}>menu</button>
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