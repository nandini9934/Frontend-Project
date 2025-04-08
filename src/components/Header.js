import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header className="site-header">
            <div className="header-container">
                <div className="brand-logo">
                    <a href="/">
                        job<span className="highlight">Ringer</span>
                    </a>
                </div>

                <nav className="main-nav">
                    <ul className="nav-links">
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Employers</a></li>
                        <li><a href="#">Career Tips</a></li>
                        <li><a href="#">Plans</a></li>
                    </ul>
                </nav>

                <div className="user-actions">
                    <a href="#" className="btn-outline">Login</a>
                    <a href="#" className="btn-filled">Post a Job</a>
                </div>
            </div>
        </header>

    );
};

export default Header;
