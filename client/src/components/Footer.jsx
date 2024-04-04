import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-container">
                <p>&copy; {new Date().getFullYear()} Laptop Bazaar. All rights reserved.</p>
                {/* Add a Link to the About Us page */}
                <Link to="/about-us">About Us</Link>
            </div>
        </footer>
    );
}

export default Footer;
