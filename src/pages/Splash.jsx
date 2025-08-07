import React from 'react';
import { Link } from 'react-router';

function Splash() {
    return (
        <div className="splash-container">
            <div className="splash-bg-rect"></div>

            <div className="splash-content">
                <p className="splash-subtext">Welcome to</p>
                <h1 className="splash-title">Wander</h1>

                <Link to="/sign-in" className="splash-signup-btn">Sign up</Link>
                <p className="splash-login">Already have an account? <Link to="/login">Login here</Link></p>
            </div>

            <footer className="splash-footer">
                <p className="copyright">Wander &copy; 2025</p>
                <p className="all-rights-reserved">All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default Splash;