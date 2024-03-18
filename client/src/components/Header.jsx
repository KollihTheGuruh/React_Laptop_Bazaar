import React from 'react';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <a href="/">Laptop Bazaar</a>
                </div>
                <nav className="navbar">
                    <ul className="nav-list">
                        <li className="nav-item"><a href="/">Home</a></li>
                        <li className="nav-item"><a href="/compare">Compare</a></li>
                        <li className="nav-item"><a href="/login">Login</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
