import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { ShopContext } from '../contexts/shop-context';
import { useContext } from 'react';

function Header() {
    const { isAuthenticated, setIsAuthenticated } = useAuth();
    const { compareItems } = useContext(ShopContext);
    const compareCount = Object.values(compareItems).filter(val => val).length;

    const handleLogout = () => {
        setIsAuthenticated(false);
        // Perform any additional logout logic here
    };

    return (
        <header className="header">
             <div className="logo-container">
                <div>Laptop Bazaar</div>
                <nav className="navbar">
                    <ul className="nav-list">
                        {/* <li className="nav-item"><Link to="/">Laptop Bazaar</Link></li> */}
                        <li className="nav-item"><Link to="/">Home</Link></li>
                        <li className="nav-item"><Link to="/compare">Compare ({compareCount})</Link></li>
                        {isAuthenticated ? (
                            <li className="nav-item">
                                <button onClick={handleLogout}>Logout</button>
                            </li>
                        ) : (
                            <li className="nav-item"><Link to="/login">Login</Link></li>
                        )}
                        <li className="nav-item"><Link to="/contact">Contact</Link></li>
                        <li className="nav-item">
                            <Link to="/cart">
                                Cart
                                {/* SVG cart icon */}
                                <svg className="cart-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l.9 4.45m.6 2.55h12.5a.5.5 0 0 0 .5-.5V6H7"></path>
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
