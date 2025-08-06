import React from 'react';

function Splash() {
    return (
        <div className="splash-container">
            <div className="splash-bg-rect"></div>

            <div className="splash-content">
                <p className="splash-subtext">Welcome to</p>
                <h1 className="splash-title">Wander</h1>

                <a href="sign-in.html" className="splash-signup-btn">Sign up</a>
                <p className="splash-login">Already have an account? <a href="login.html">Login here</a></p>
            </div>

            <footer className="splash-footer">
                <p className="copyright">Wander &copy; 2025</p>
                <p className="all-rights-reserved">All Rights Reserved.</p>
            </footer>
        </div>
    );
}