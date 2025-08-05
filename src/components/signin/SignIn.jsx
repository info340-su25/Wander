import React, {useState} from 'react';

function SignIn(props) {

    const [email, setEmail] = useState(props.email || '');
    const [password, setPassword] = useState(props.password || '');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleClick = (event) => {
        event.preventDefault();
        handleSubmit(event);
    }

    return (
        <div className="signin-container">
            <div className="signin-bg-rect">
                <div className="back-arrow">
                    <a href="splash.html"><span className="material-symbols-outlined">arrow_back</span></a>
                </div>

                <div className="signin-content">
                    <h1 className="signin-title">Ready to Wander?</h1>
                    <p className="signin-subtitle">Please enter your details</p>

                    <form onSubmit={handleSubmit}>
                        <div className="signin-form">
                            <label htmlFor="email" className="signin-form-label">Email address</label>
                            <input type="email" id="email" className="signin-input" placeholder="Enter your email" value={email} onChange={(event) => setEmail(event.target.value)} />
                        </div>

                        <div className="signin-form">
                            <label htmlFor="password" className="signin-form-label">Password</label>
                            <input type="password" id="password" className="signin-input" placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)} />
                        </div>

                        <div className="checkbox-signin">
                            <label htmlFor="remember" className="checkbox-label">Remember me</label>
                            <input type="checkbox" id="remember" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
                        </div>

                        <button type="submit" className="signin-btn" onClick={handleClick}>Sign in</button>
                    </form>
                </div>
            </div>

            <footer className="splash-footer">
                <p className="copyright">Wander &copy; 2025</p>
                <p className="all-rights-reserved">All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default SignIn;