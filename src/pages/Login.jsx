import React, {useState} from 'react';

function Login(props) {
    const info = props.userData;

    const [email, setEmail] = useState(info.email || '');
    const [password, setPassword] = useState(info.password || '');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleClick = (event) => {
        event.preventDefault();
        handleSubmit(event);
    }

    return (
        <div className="login-container">
            <div className="login-bg-rect">
                <div className="back-arrow">
                    <a href="splash.html"><span className="material-symbols-outlined">arrow_back</span></a>
                </div>

                <div className="login-content">
                    <h1 className="login-title">Welcome back</h1>
                    <p className="login-subtitle">Please enter your details</p>

                    <form onSubmit={handleSubmit}>
                        <div className="login-form">
                            <label htmlFor="email" className="login-form-label">Email address</label>
                            <input type="email" id="email" className="login-input" placeholder="Enter your email" value={email} onChange={(event) => setEmail(event.target.value)} />
                        </div>

                        <div className="login-form">
                            <label htmlFor="password" className="login-form-label">Password</label>
                            <input type="password" id="password" className="login-input" placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)} />
                        </div>

                        <div className="checkbox-login">
                            <label htmlFor="remember" className="checkbox-label">Remember me</label>
                            <input type="checkbox" id="remember" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
                        </div>

                        <button type="submit" className="login-btn" onClick={handleClick}>Log in</button>
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

export default Login;