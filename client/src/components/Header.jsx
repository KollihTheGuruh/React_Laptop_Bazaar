import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Header() {
    const { isAuthenticated, setIsAuthenticated } = useAuth();

    const handleLogout = () => {
        setIsAuthenticated(false);
        // Perform any additional logout logic here
    };

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <Link to="/">Laptop Bazaar</Link>
                </div>
                <nav className="navbar">
                    <ul className="nav-list">
                        <li className="nav-item"><Link to="/">Home</Link></li>
                        <li className="nav-item"><Link to="/compare">Compare</Link></li>
                        {isAuthenticated ? (
                            <li className="nav-item">
                                <button onClick={handleLogout}>Logout</button>
                            </li>
                        ) : (
                            <li className="nav-item"><Link to="/login">Login</Link></li>
                        )}
                        <li className="nav-item"><Link to="/contact">Contact</Link></li>
                        <li className="nav-item"><Link to="/cart">Cart</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
